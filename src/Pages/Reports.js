import {
  ExceptionOutlined,
  GroupOutlined,
  PoundOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import React from "react";
import BackButton from "../Components/General/BackButton";
import MenuItem from "../Components/menu/MenuItem";
import HomeLayout from "../Layout/HomeLayout";
const Reports = () => {
  return (
    <HomeLayout>
      <BackButton
        back={{
          to: "/",
          title: "Menu",
        }}
      ></BackButton>
      <div className="menu-items">
        <MenuItem
          title="Махсулот қолдиғи"
          to="ingredient-quantity"
          icon={<ExceptionOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title="Касса"
          to="kassa"
          icon={<PoundOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title="Клиент қарздорлик"
          to="client-debts"
          icon={<ExceptionOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
      </div>
    </HomeLayout>
  );
};

export default Reports;
