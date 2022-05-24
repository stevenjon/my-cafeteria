import { GroupOutlined, ProfileOutlined } from "@ant-design/icons";
import React from "react";
import BackButton from "../Components/General/BackButton";
import MenuItem from "../Components/menu/MenuItem";
import HomeLayout from "../Layout/HomeLayout";
const Settings = () => {
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
          title="Категория"
          to="category"
          icon={<GroupOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Махсулотлар"}
          to="ingredients"
          icon={<ProfileOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Таомлар"}
          to="meals"
          icon={<ProfileOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
      </div>
    </HomeLayout>
  );
};

export default Settings;
