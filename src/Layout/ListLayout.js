import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FloatBtn from "../Components/Buttons/FloatBtn";
import BackButton from "../Components/General/BackButton";
import DownModal from "../Components/Modal/DownModal";
import { LIST, ORDER } from "../Pages/Types";
import { setFormValues, setModal } from "../redux/slices/appSlice";
import "./layout.css";
import LoadingList from "./LoadingList";
import OrderLayout from "./OrderLayout";
const ListLayout = ({ page }) => {
  const modal = useSelector(state => state.app.modal.downModal);
  const dispatch = useDispatch();
  const setOpen = (bool, type) => {
    if (type === "add") {
      dispatch(
        setFormValues({
          prop: page.redux,
          value: {},
        })
      );
    }
    dispatch(
      setModal({
        type: "downModal",
        value: {
          open: bool,
          type,
        },
      })
    );
  };

  const pageLayouts = {
    [LIST]: <LoadingList page={page}></LoadingList>,
    [ORDER]: <OrderLayout page={page}></OrderLayout>,
  };

  const navigate = useNavigate();
  const handleFloat = () => {
    if (page.path === "/orders") {
      navigate("single");
    } else {
      setOpen(true, "add");
    }
  };
  return (
    <div className="list-layout">
      <div className="navbar">
        <BackButton back={page.back} type={"bg"}></BackButton>
        <Input
          style={{ borderRadius: "5px" }}
          size="small"
          placeholder="Qidirish..."
          prefix={<SearchOutlined style={{ color: "teal" }} />}
        />
        <FilterOutlined style={{ color: "wheat", fontSize: "20px" }} />
      </div>
      <div className="content">{pageLayouts[page.type]}</div>
      <div className="footer"></div>
      <FloatBtn onClick={handleFloat}></FloatBtn>
      <DownModal page={page} modal={modal} setOpen={setOpen}></DownModal>
    </div>
  );
};

export default ListLayout;
