import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { Avatar, List, Space, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormChild } from "../../redux/slices/appSlice";
import NumberFormat from "../../utils/NumberFormat";

const OrderAction = ({ item }) => {
  const meals = useSelector(
    state => state.app.formValues["single_order"]["meals"] || []
  );
  const dispatch = useDispatch();
  const handleDelete = () => {
    const new_meals = meals.filter(m => m._id !== item._id);
    dispatch(
      setFormChild({
        prop: "single_order",
        child: "meals",
        value: new_meals,
      })
    );
  };
  const setCount = n => {
    const new_meals = meals.map(m => {
      if (m._id === item._id) {
        return {
          ...m,
          count: n,
        };
      } else return n;
    });

    dispatch(
      setFormChild({
        prop: "single_order",
        child: "meals",
        value: new_meals,
      })
    );
  };
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        avatar={<Avatar size={"large"} src={item.img} />}
        title={<Typography style={{ color: "teal" }}>{item.name}</Typography>}
        description={<> {NumberFormat(item.price)} so'm</>}
      />

      <Space
        direction="horizontal"
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <MinusCircleFilled
          onClick={() => {
            if (item.count === 1) {
              handleDelete();
            } else {
              setCount(item.count - 1);
            }
          }}
          style={{ color: "teal", fontSize: "24px" }}
        ></MinusCircleFilled>
        <div
          style={{
            padding: "2px 10px",
            fontSize: "14px",
            color: "tomato",
            borderRadius: "7px",
            border: "1px solid teal",
          }}
        >
          {item.count}
        </div>
        <PlusCircleFilled
          onClick={() => {
            if (item.count === 100) {
              handleDelete();
            } else {
              setCount(item.count + 1);
            }
          }}
          style={{ color: "teal", fontSize: "24px" }}
        ></PlusCircleFilled>
      </Space>
    </List.Item>
  );
};

export default OrderAction;
