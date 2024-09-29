import { Database } from "@/backend/Database";
import College from "@/backend/schema/College";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { ...newData } = await request.json();
    const isExist = await College.findOne({ pageUrl: newData?.pageUrl });
    if (isExist) {
      return NextResponse.json(
        { message: "Already exist" },
        { status: 404 }
      );
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

    const offset = parseInt(getQueryParam("offset")) || 0;
    const limit = parseInt(getQueryParam("limit")) || 25;
    const type = getQueryParam("type");
    const pageUrl = getQueryParam("pageUrl");
    const search = decodeURIComponent(getQueryParam("search"));
    const collegetype = getQueryParam("collegetype");
    const location = getQueryParam("location");
    const ownership = getQueryParam("ownership");
    const university = getQueryParam("university");

    // let searchWords = search?.split(" ");

    let data;
    const query = {
      pageUrl: { $regex: new RegExp(pageUrl, "i") },
    };

    if (search) {
      query["$or"] = [
        { keywords: { $regex: new RegExp(search, "i") } },
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

    if (type === "sitemap") {
      data = await College.aggregate([
        {
          $group: {
            _id: {
              pageUrl: "$pageUrl",
            },
          },
        },
      ]);
    } else if (type === "home-search") {
      data = await College.aggregate([
        {
          $group: {
            _id: {
              pageUrl: "$pageUrl",
              logo: "$collegeData.logo",
              collegeName: "$collegeData.collegeName",
            },
          },
        },
      ]);
    } else if (type === "location-list") {
      data = await College.aggregate([
        {
          $group: {
            _id: "$collegeData.location", // Group by location
          },
        },
        {
          $sort: { _id: 1 }, // Optional: Sort the locations alphabetically
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
          $sort: { _id: 1 }, // Sort by collegeName (1 = ascending, -1 = descending)
        },
        {
          $skip: offset,
        },
        {
          $limit: limit,
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