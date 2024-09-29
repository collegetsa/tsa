"use client";
import React, { useEffect, useState } from "react";
import FreeCounselingList from "@/frontend/admin/FreeCounselingList";
import { useCookies } from "next-client-cookies";

export default function Page() {
  const cookies = useCookies();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jwtToken = cookies.get("jwtToken");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/free-counseling`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const list = await response.json();
      setData(list);
    };
    fetchData();
  }, []);
  return <FreeCounselingList data={data} />;
}
