import {
  BarChartOutlined,
  CarryOutOutlined,
  SettingOutlined,
  ShopOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import React from "react";
import MenuItem from "../Components/menu/MenuItem";
import HomeLayout from "../Layout/HomeLayout";
const Home = () => {
  return (
    <HomeLayout>
      <div className="menu-items">
        <MenuItem
          title="Заказлар"
          to="/orders"
          icon={<ShopOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Созламалар"}
          to="/settings"
          icon={<SettingOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Махсулотлар кирими"}
          to="/ingredients_income"
          icon={<CarryOutOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Хисобот"}
          to="/reports"
          icon={<BarChartOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Клиентлар"}
          to="/clients"
          icon={<UserOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
        <MenuItem
          title={"Клиент тўловлари"}
          to="/client-payments"
          icon={<UserSwitchOutlined style={{ fontSize: "24px" }} />}
        ></MenuItem>
      </div>
    </HomeLayout>
  );
};

export default Home;
