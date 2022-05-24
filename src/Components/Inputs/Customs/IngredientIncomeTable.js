import React, { useState } from "react";

import { Table, Space, Button, Modal, Input } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import SimpleSelect from "../SimpleSelect";
import { useDispatch, useSelector } from "react-redux";
import { setFormChild } from "../../../redux/slices/appSlice";
import NumberFormat from "../../../utils/NumberFormat";

const IngredientIncomeTable = ({ redux, name }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ingValues, setIngValues] = useState({});
  const data = useSelector(state => state.app.formValues[redux][name] || []);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const new_ings = [...data, ingValues];
    dispatch(
      setFormChild({
        prop: redux,
        child: name,
        value: new_ings,
      })
    );
    setIngValues({});
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIngValues({});
    setIsModalVisible(false);
  };
  const ingredients = useSelector(state => state.app.allData.ingredients || []);

  const handleIngredient = e => {
    const inger = ingredients.find(ing => ing._id === e.target.value) || {};
    setIngValues({
      ...ingValues,
      ...inger,
    });
  };

  const handleDelete = id => {
    const inger = data.filter(ing => ing._id !== id);
    dispatch(
      setFormChild({
        prop: redux,
        child: name,
        value: inger,
      })
    );
  };

  const columns = [
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Turi",
      dataIndex: "purchase_type",
      key: "age",
      render: text => (text == 1 ? "Кило" : "Дона"),
    },
    {
      title: "kg/dona",
      dataIndex: "count",
      key: "address",
    },
    {
      title: "Narxi",
      dataIndex: "price",
      key: "address",
      render: text => NumberFormat(text),
    },
    {
      title: "Summa",
      dataIndex: "price",
      key: "address",
      render: (text, record) => NumberFormat(text * record.count),
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <DeleteFilled
          onClick={() => handleDelete(record._id)}
          style={{ color: "#FF6363", cursor: "pointer" }}
        />
      ),
    },
  ];
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Maxsulot qo'shish
      </Button>
      <Table
        scroll={{ x: 375 }}
        pagination={false}
        size="small"
        columns={columns}
        dataSource={data}
      />
      <div style={{ textAlign: "right" }}>
        <span style={{ color: "gray" }}>Жами:</span>{" "}
        <span style={{ color: "teal", fontWeight: "bold" }}>
          {data.length > 0
            ? NumberFormat(data.reduce((acc, d) => acc + d.price * d.count, 0))
            : 0}
        </span>
      </div>
      <Modal
        centered
        title="Махсулот танланг"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Сақлаш"
        cancelText="Ортга"
        onCancel={handleCancel}
      >
        <Space direction="horizontal">
          <SimpleSelect
            name="ingredient_id"
            options={{
              type: "ingredients",
            }}
            value={ingValues._id}
            onChange={handleIngredient}
            placeholder={"maxsulot tanlang"}
          ></SimpleSelect>
          <Input
            placeholder="Miqdor"
            value={ingValues.count}
            onChange={e => {
              setIngValues({
                ...ingValues,
                count: e.target.value,
              });
            }}
            type={"number"}
          ></Input>
        </Space>
        <hr></hr>
        <Input
          placeholder="Narxi"
          value={ingValues.price}
          onChange={e => {
            setIngValues({
              ...ingValues,
              price: e.target.value,
            });
          }}
          type={"number"}
        ></Input>
      </Modal>
    </div>
  );
};

export default IngredientIncomeTable;
