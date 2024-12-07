import React from "react";
import "../App.css";
import Records from "../assets/Blog.json";
function BlogDisplay() {
  return (
    <>
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id} className="data_info">
              <h2>{record.title}</h2>
              <br />
              <p>{record.content}</p>
              <div className="extra_info">
                <h5 className="author_name">--{record.author}--</h5>
                <h5>Date: {record.date}</h5>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default BlogDisplay;
