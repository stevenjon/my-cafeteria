import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { List, Modal, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormChild } from "../../../redux/slices/appSlice";
import OrderItem from "../../ListItems/OrderItem";

const OrderForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [values, setValues] = useState({});
  const meals = useSelector(state => state.app.allData["meals"]) || [];
  const data = useSelector(
    state => state.app.formValues["single_order"]["meals"] || []
  );
  const dispatch = useDispatch();

  const handleOk = () => {
    const new_ings = [...data, values];
    dispatch(
      setFormChild({
        prop: "single_order",
        child: "meals",
        value: new_ings,
      })
    );
    setValues({});
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setValues({});
    setIsModalVisible(false);
  };
  const setModal = meal => {
    setValues({
      ...meal,
      count: 1,
    });
    setIsModalVisible(true);
  };
  return (
    <div>
      <List
        dataSource={meals}
        renderItem={item => (
          <OrderItem setModal={setModal} item={item}></OrderItem>
        )}
      />

      <Modal
        centered
        title="Таом сони"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space
          direction="horizontal"
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          <MinusCircleFilled
            onClick={() => {
              if (values.count < 1) {
                handleCancel();
              } else {
                setValues({
                  ...values,
                  count: values.count - 1,
                });
              }
            }}
            style={{ color: "teal", fontSize: "28px" }}
          ></MinusCircleFilled>
          <div
            style={{
              padding: "2px 20px",
              fontSize: "18px",
              color: "tomato",
              borderRadius: "7px",
              border: "1px solid teal",
            }}
          >
            {values.count}
          </div>
          <PlusCircleFilled
            onClick={() => {
              if (values.count === 100) {
                handleCancel();
              } else {
                setValues({
                  ...values,
                  count: values.count + 1,
                });
              }
            }}
            style={{ color: "teal", fontSize: "28px" }}
          ></PlusCircleFilled>
        </Space>
      </Modal>
    </div>
  );
};

export default OrderForm;
