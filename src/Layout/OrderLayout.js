import { Button, List, Modal, Space, Spin } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Reciept from "../Components/General/Reciept";
import SimpleSelect from "../Components/Inputs/SimpleSelect";
import OrderAction from "../Components/ListItems/OrderActions";
import {
  addListData,
  editListData,
  setFormValues,
} from "../redux/slices/appSlice";
import FetchApi from "../utils/FetchApi";
import NumberFormat from "../utils/NumberFormat";

const OrderLayout = ({ page }) => {
  const data = useSelector(state =>
    state.app.formValues[page.redux] ? state.app.formValues[page.redux] : {}
  );

  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const finishOrder = () => {
    if (data.meals.length > 0) {
      setIsModalVisible(true);
    }
  };
  const dispatch = useDispatch();
  const handleOk = async () => {
    if (data.meals.length > 0) {
      setLoading(true);
      const mapedMeals = data.meals.map(m => {
        let obj = { ...m };
        delete obj.img;
        return obj;
      });
      const res = await FetchApi(page.url, "POST", {
        ...data,
        meals: mapedMeals,
      });
      if (res) {
        dispatch(
          addListData({
            prop: "orders",
            value: res.data,
          })
        );
      }

      //   if (modal.type === "edit") {
      //     const res = await FetchApi(page.url, "PUT", data);
      //     if (res) {
      //       dispatch(
      //         editListData({
      //           prop: page.redux,
      //           value: res.data,
      //         })
      //       );
      //     }
      //   }

      setLoading(false);
    }
    setIsModalVisible(false);
    navigate("/orders");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            color: "teal",
            fontSize: "18px",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {page.title}
        </span>
        <span style={{ color: "#aaa", fontSize: "12px" }}></span>
      </div>
      <div
        style={{
          height: "calc(100vh - 170px)",
          overflow: "auto",
          padding: "0 16px",
          paddingBottom: "40px",
          borderRadius: "10px",
          border: "1px dashed teal",
        }}
      >
        <List
          dataSource={data.meals}
          renderItem={item => (
            <OrderAction item={item} page={page}></OrderAction>
          )}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <div>
          <span style={{ color: "darkcyan" }}>Summa:</span>{" "}
          <span style={{ color: "teal", fontWeight: "bold", fontSize: "20px" }}>
            {data.meals?.length > 0
              ? NumberFormat(
                  data.meals.reduce((a, b) => a + b.price * b.count, 0)
                )
              : 0}
          </span>
          <span style={{ color: "darkcyan" }}> so'm</span>
        </div>
        <Space>
          <Button size="small" type="primary" danger>
            Бекор қилиш
          </Button>
          <Button onClick={finishOrder} size="small" type="primary">
            Заказни ёпиш
          </Button>
        </Space>
      </div>

      <Modal
        centered
        title="Чек"
        okText="Сақлаш"
        cancelText="Ортга"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Spin spinning={loading}>
          <SimpleSelect
            name={"client_id"}
            options={{
              type: "clients",
            }}
            value={data.client_id}
            onChange={e => {
              dispatch(
                setFormValues({
                  prop: page.redux,
                  value: {
                    ...data,
                    [e.target.name]: e.target.value,
                  },
                })
              );
            }}
            placeholder="Клиент танланг"
          ></SimpleSelect>
          <hr></hr>
          <Reciept data={data.meals || []}></Reciept>
        </Spin>
      </Modal>
    </>
  );
};

export default OrderLayout;
