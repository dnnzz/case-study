import React, { useState } from "react";
import Header from "./UI/Header";
import Card from "./UI/Card";
//w-369 h-426

function Content(props) {
  const [dateDefault, setDateDefault] = useState([]);
  React.useEffect(() => {
    setDateDefault(Object.keys(props.postData));
    console.log(props.postData, props.postDate, dateDefault);
  }, []);
  return (
    <div className="flex flex-grow flex-col ml-12">
      <Header />
      <div className="main-content flex flex-col -mt-4">
        {props.postDate.map((date) => {
          return (
            <div key={date}>
              <h1 key={date} className="content-text text-xl">
                {date}
              </h1>
              <div className="post-cards flex flex-wrap">
                {props.postData[date].map((post) => (
                  <Card key={post.updated_at} post={post} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
