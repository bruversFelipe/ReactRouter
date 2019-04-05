import React from "react";
import { Link } from "react-router-dom";
import List from "antd/lib/list";
import Card from "antd/lib/card";

const data = [
  { key: 1, title: "Children do SubMenu 2", route: "/sub-menu2/item1" },
  { key: 2, title: "Children  2 do SubMenu 2", route: "/sub-menu2/item2" }
];

const Container = () => (
  <Card>
    Render component Sub Menu 2
    <br />
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Link to={item.route}>{item.title}</Link>
        </List.Item>
      )}
    />
    <br />
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Link className="ant-btn" to="/">
        GoBack
      </Link>
    </div>
  </Card>
);

export default Container;
