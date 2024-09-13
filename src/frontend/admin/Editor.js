"use client"
import React, { useState } from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";

const EditorQuill = ({ data, setData }) => {
  const handleChange = (html) => {
    setData({ ...data, ["content"]: html });
  };

  return (
    <React.Fragment>
      <ReactQuill
        theme={"snow"}
        onChange={handleChange}
        value={data?.content}
        modules={EditorQuill.modules}
        formats={EditorQuill.formats}
        bounds={".app"}
      />
    </React.Fragment>
  );
};

EditorQuill.propTypes = {
  placeholder: PropTypes.string,
};

EditorQuill.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ "code-block": true }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    [{ direction: "rtl" }],
    ["formula"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
EditorQuill.formats = [
  "header",
  "font",
  "size",
  "color",
  "background",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "script",
  "align",
  "direction",
  "formula",
];

export default EditorQuill;
