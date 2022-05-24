import React, { useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  deleteListData,
  setFormValues,
  setModal,
} from "../../redux/slices/appSlice";
import { Spin } from "antd";
import FetchApi from "../../utils/FetchApi";
import { db } from "../../utils/db";
import { useNavigate } from "react-router-dom";
const ItemActions = ({ item, type, page }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openEdit = () => {
    if (type === "order") {
      dispatch(
        setFormValues({
          prop: "single_order",
          value: item,
        })
      );

      navigate("single");
    } else {
      dispatch(
        setFormValues({
          prop: page.redux,
          value: item,
        })
      );

      dispatch(
        setModal({
          type: "downModal",
          value: {
            open: true,
            type: "edit",
          },
        })
      );
    }
  };

  const handleDelete = async () => {
    const bool = window.confirm("Тасдиқланг!");
    if (bool) {
      setLoading(true);

      const res = await FetchApi(page.url + `/${item._id}`, "DELETE");
      if (res) {
        if (page.local) {
          const item = await db[page.local]
            .where("_id")
            .equals(res.data._id)
            .toArray();
          if (item.length > 0) {
            await db[page.local].delete(item[0].local_id);
          }
        }

        dispatch(
          deleteListData({
            prop: page.redux,
            value: res.data,
          })
        );
      }
      setLoading(false);
    }
  };
  return (
    <Spin spinning={loading}>
      <div className="list-actions">
        <EditFilled
          onClick={openEdit}
          style={{ color: "teal", cursor: "pointer" }}
        />
        <DeleteFilled
          onClick={handleDelete}
          style={{ color: "#FF6363", cursor: "pointer" }}
        />
      </div>
    </Spin>
  );
};

export default ItemActions;
