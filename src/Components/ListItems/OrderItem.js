import { PlusCircleFilled } from "@ant-design/icons";
import { Avatar, List, Typography } from "antd";
import React from "react";
import NumberFormat from "../../utils/NumberFormat";

const OrderItem = ({ item, setModal }) => {
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        avatar={<Avatar size={"large"} src={item.img} />}
        title={<Typography style={{ color: "teal" }}>{item.name}</Typography>}
        description={<>{NumberFormat(item.price)} so'm</>}
      />

      <PlusCircleFilled
        onClick={() => setModal(item)}
        style={{
          color: "teal",
          fontSize: "24px",
          marginRight: "5px",
          cursor: "pointer",
        }}
      />
    </List.Item>
  );
};

export default OrderItem;
