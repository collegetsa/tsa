import { Database } from "@/backend/Database";
import College from "@/backend/schema/College";
import { stopWords } from "@/frontend/utility";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { ...newData } = await request.json();
    const isExist = await College.findOne({ pageUrl: newData?.pageUrl });
    if (isExist) {
      return NextResponse.json({ message: "Already exist" }, { status: 404 });
    }
    await College.create(newData);
    return NextResponse.json(
      { message: "New college created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    await Database();
    const getQueryParam = (param, defaultValue = "") => {
      const value = request?.nextUrl?.searchParams?.get(param);
      return value ? value : defaultValue;
    };

    const page = parseInt(getQueryParam("page")) || 1;
    const itemsPerPage = 10;
    const offset = (page - 1) * itemsPerPage;

    const type = getQueryParam("type");
    const pageUrl = getQueryParam("pageUrl");
    const search = decodeURIComponent(getQueryParam("search"));
    const collegetype = getQueryParam("collegetype");
    const location = getQueryParam("location");
    const ownership = getQueryParam("ownership");
    const university = getQueryParam("university");

    let data;
    const query = {
      pageUrl: { $regex: new RegExp(pageUrl, "i") },
    };

    if (search) {
      query["$or"] = [
        { "collegeData.collegeName": { $regex: new RegExp(search, "i") } },
        { "collegeData.location": { $regex: new RegExp(search, "i") } },
        { "collegeData.ownership": { $regex: new RegExp(search, "i") } },
        { "collegeData.university": { $regex: new RegExp(search, "i") } },
        { "collegeData.collegetype": { $regex: new RegExp(search, "i") } },
        { "collegeData.content": { $regex: new RegExp(search, "i") } },
        {
          "collegeData.course": {
            $elemMatch: {
              courseName: { $regex: new RegExp(search, "i") },
            },
          },
        },
        // {
        //   "collegeData.course": {
        //     $elemMatch: {
        //       $or: searchWords.map((word) => ({
        //         courseName: { $regex: new RegExp(word, "i") },
        //       })),
        //     },
        //   },
        // },
      ];
    }
    if (location) {
      query["collegeData.location"] = { $regex: new RegExp(location, "i") };
    }
    if (ownership) {
      query["collegeData.ownership"] = { $regex: new RegExp(ownership, "i") };
    }
    if (university) {
      query["collegeData.university"] = { $regex: new RegExp(university, "i") };
    }
    if (collegetype) {
      query["collegeData.collegeType"] = {
        $regex: new RegExp(collegetype, "i"),
      };
    }
    if (type === "get-length") {
      data = await College.aggregate([
        {
          $group: {
            _id: "$pageUrl",
          },
        },
        {
          $count: "totalCount",
        },
      ]);
    } else if (type === "sitemap") {
      data = await College.aggregate([
        {
          $group: {
            _id: {
              pageUrl: "$pageUrl",
            },
          },
        },
      ]);
    } else if (type === "search") {
      let query2 = {};
      const keywords = search
        .split(/\s+/)
        .filter((word) => !stopWords.includes(word.toLowerCase()) && word);

      if (!keywords.length) {
        data = [];
      } else {
        query2["$or"] = [
          {
            pageUrl: {
              $in: keywords.map((word) => new RegExp(word, "i")),
            },
          },
          {
            "collegeData.collegeName": {
              $in: keywords.map((word) => new RegExp(word, "i")),
            },
          },
          {
            "collegeData.content": {
              $in: keywords.map((word) => new RegExp(word, "i")),
            },
          },
        ];

        data = await College.aggregate([
          {
            $match: query2,
          },
          {
            // Add a score field based on the number of matching keywords
            $addFields: {
              score: {
                $add: [
                  {
                    $size: {
                      $filter: {
                        input: keywords,
                        as: "keyword",
                        cond: {
                          $regexMatch: {
                            input: "$pageUrl",
                            regex: "$$keyword",
                            options: "i",
                          },
                        },
                      },
                    },
                  },
                  {
                    $size: {
                      $filter: {
                        input: keywords,
                        as: "keyword",
                        cond: {
                          $regexMatch: {
                            input: "$collegeData.collegeName",
                            regex: "$$keyword",
                            options: "i",
                          },
                        },
                      },
                    },
                  },
                  {
                    $size: {
                      $filter: {
                        input: keywords,
                        as: "keyword",
                        cond: {
                          $regexMatch: {
                            input: "$collegeData.content",
                            regex: "$$keyword",
                            options: "i",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            $group: {
              _id: {
                pageUrl: "$pageUrl",
                logo: "$collegeData.logo",
                collegeName: "$collegeData.collegeName",
              },
              score: { $first: "$score" },
            },
          },
          {
            $sort: { score: -1, "_id.field": 1 },
          },
        ]);
      }
    } else if (type === "location-list") {
      data = await College.aggregate([
        {
          $group: {
            _id: "$collegeData.location",
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);
    } else if (type === "view-list") {
      data = await College.aggregate([
        {
          $match: query,
        },
        {
          $group: {
            _id: {
              pageUrl: "$pageUrl",
              logo: "$collegeData.logo",
              collegeName: "$collegeData.collegeName",
              location: "$collegeData.location",
              university: "$collegeData.university",
              ownership: "$collegeData.ownership",
              course: {
                $slice: [
                  {
                    $cond: {
                      if: {
                        $gt: [
                          {
                            $size: {
                              $filter: {
                                input: "$collegeData.course",
                                as: "course",
                                cond: {
                                  $regexMatch: {
                                    input: "$$course.courseName",
                                    regex: search,
                                    options: "i",
                                  },
                                },
                              },
                            },
                          },
                          0,
                        ],
                      },
                      then: {
                        $filter: {
                          input: "$collegeData.course",
                          as: "course",
                          cond: {
                            $regexMatch: {
                              input: "$$course.courseName",
                              regex: search,
                              options: "i",
                            },
                          },
                        },
                      },
                      else: { $slice: ["$collegeData.course", 2] },
                    },
                  },
                  2,
                ],
              },
            },
          },
        },
        {
          $sort: { _id: 1 },
        },
        {
          $skip: offset,
        },
        {
          $limit: itemsPerPage,
        },
      ]);
    } else {
      data = await College.find({ pageUrl: pageUrl });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};