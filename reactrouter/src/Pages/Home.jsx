import React from "react";
import { Link } from "react-router-dom";
import List from "antd/lib/list";

const data = [
  { key: 1, title: "Sub menu 1", route: "/sub-menu1" },
  { key: 2, title: "Sub menu 2", route: "/sub-menu2" }
];

const Home = () => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Link to={item.route}>{item.title}</Link>
        </List.Item>
      )}
    />
  );
};
export default Home;
