import { Database } from "@/backend/Database";
import Course from "@/backend/schema/Course";
import { stopWords } from "@/frontend/utility";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await Database();
    const { ...newData } = await request.json();
    await Course.create(newData);
    return NextResponse.json(
      { message: "New Course created" },
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

    const search = decodeURIComponent(getQueryParam("search"));

    let data;
    let query = {};
    const type = getQueryParam("type");

    if (type === "course-count") {
      data = await Course.aggregate([
        {
          $group: {
            _id: "$field",
            count: { $sum: 1 },
          },
        },
      ]);
    } else if (type === "search") {
      const keywords = search
        .split(/\s+/)
        .filter((word) => !stopWords.includes(word.toLowerCase()) && word);

      if (!keywords.length) {
        data = [];
      } else {
        query["$or"] = [
          {
            field: {
              $in: keywords.map((word) => new RegExp(word, "i")),
            },
          },
          {
            "courseData.courseName": {
              $in: keywords.map((word) => new RegExp(word, "i")),
            },
          },
          {
            "courseData.level": {
              $in: keywords.map((word) => new RegExp(word, "i")),
            },
          },
        ];

        data = await Course.aggregate([
          {
            $match: query,
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
                            input: "$field",
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
                            input: "$courseData.courseName",
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
                            input: "$courseData.level",
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
                field: "$field",
                courseName: "$courseData.courseName",
              },
              score: { $first: "$score" },
            },
          },
          {
            $sort: { score: -1, "_id.field": 1 },
          },
        ]);
      }
    } else {
      data = await Course.find();
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};