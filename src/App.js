import logo from "./logo.svg";
import SideBar from "./components/UI/Sidebar";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);

  const fetchData = async () => {
    let datesArray = [];
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.posts_by_date);
        setDate(Object.keys(data.posts_by_date));
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex h-full">
      <SideBar />
      <Content postData={data} postDate={date} />
    </div>
  );
}

export default App;
