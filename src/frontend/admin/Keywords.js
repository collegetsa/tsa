"use client";
import React, { useState } from "react";
import Image from "next/image";

const Keywords = ({ data, setData, setIsEditKeyword }) => {
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(false);

  const addItem = () => {
    if (isEdit) {
      let temp = [...data];
      temp[index] = input;
      setData(temp);
      setInput("");
      setIsEdit(false);
    } else {
      if (input.length > 1) {
        let temp = [...data];
        temp?.push(input);
        setData(temp);
        setInput("");
      }
    }
  };

  const deleteKeyword = (index) => {
    let temp = [...data];
    temp.splice(index, 1);
    setData(temp);
  };

  const editKeyword = (index) => {
    setIndex(index);
    setIsEdit(true);
    let temp = [...data];
    setInput(temp[index]);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="mb-30 mt-20">
      <div className="content-page">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <h4># SEO Keywords</h4>
          <button className="btn mr-40" onClick={() => setIsEditKeyword(false)}>
            Back
          </button>
        </div>
        <div
          className="did-floating-label-content mb-0"
          style={{ display: "flex", alignItems: "center" }}>
          <input
            className="did-floating-input mr-10"
            type="text"
            placeholder=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="fees"
          />
          <Image
            src="/images/add.png"
            width={25}
            height={25}
            alt=""
            onClick={addItem}
            className="cursor-pointer"
          />
        </div>
        <ol>
          {data?.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <Image
                src="/images/edit.png"
                width={15}
                height={15}
                alt=""
                onClick={() => editKeyword(index)}
                className="cursor-pointer ml-10"
              />
              <Image
                src="/images/delete.png"
                width={15}
                height={15}
                alt=""
                onClick={() => deleteKeyword(index)}
                className="cursor-pointer ml-10"
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Keywords;
