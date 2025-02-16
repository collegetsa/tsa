"use client";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ViewUpdate({ type, Update }) {
  const route = useRouter();
  const auth = useSelector((state) => state.app.auth);
  return (
    <React.Fragment>
      {auth && auth?.email === "collegetsainfo@gmail.com" && (
        <div className="template-action-icons">
          <Image
            src="/images/edit.png"
            width={20}
            height={20}
            alt=""
            onClick={() => route.push(`/admin/update/edit/${Update?.pageUrl}`)}
            className="cursor-pointer template-icons"
          />
        </div>
      )}
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-30">
        <div className="content-page">
          <h1 className="font-20">{Update?.title}</h1>
          <small> {Update?.updateDate}</small>
          <p>{Update?.description}</p>
          <div
            className="mt-20"
            dangerouslySetInnerHTML={{ __html: Update?.content }}></div>
        </div>
      </div>
    </React.Fragment>
  );
}
