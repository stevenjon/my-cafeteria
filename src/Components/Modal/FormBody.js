import { Button, Input, Space, Spin } from "antd";
import Item from "antd/lib/list/Item";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addListData,
  editListData,
  setFormValues,
} from "../../redux/slices/appSlice";
import { db } from "../../utils/db";
import FetchApi from "../../utils/FetchApi";
import Image from "../Inputs/Image";
import { CUSTOM, IMAGE, NUMBER, SELECT, STRING } from "../Inputs/inputTypes";
import SimpleSelect from "../Inputs/SimpleSelect";

function capitalize(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export const FormBody = ({ modal, page, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const formValues = useSelector(state => state.app.formValues[page.redux]);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(
      setFormValues({
        prop: page.redux,
        value: {
          ...formValues,
          [e.target.name]: e.target.value,
        },
      })
    );
  };
  const handleSubmit = async () => {
    setLoading(true);

    if (modal.type === "add") {
      const res = await FetchApi(page.url, "POST", formValues);
      if (res) {
        if (page.local) {
          await db[page.redux].add(res.data);
        }

        dispatch(
          addListData({
            prop: page.redux,
            value: res.data,
          })
        );
      }
    }

    if (modal.type === "edit") {
      const res = await FetchApi(page.url, "PUT", formValues);
      if (res) {
        if (page.local) {
          const item = await db[page.local]
            .where("_id")
            .equals(formValues._id)
            .toArray();
          if (item.length > 0) {
            await db[page.local].update(item[0].local_id, res.data);
          }
        }

        dispatch(
          editListData({
            prop: page.redux,
            value: res.data,
          })
        );
      }
    }

    setLoading(false);

    setOpen(false);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        {modal.type === "add"
          ? "Янги " + page.formTitle
          : capitalize(page.formTitle) + " ўзгартириш"}
      </h3>
      <hr></hr>

      <Space
        direction="vertical"
        style={{
          display: "flex",
          padding: "10px",
          height: "calc(100vh - 100px)",
          overflow: "auto",
        }}
      >
        {page.form.map(f => {
          switch (f.type) {
            case STRING:
              return (
                <Input
                  placeholder={f.placeholder}
                  name={f.name}
                  value={formValues[f.name] || ""}
                  onChange={handleChange}
                ></Input>
              );

            case NUMBER:
              return (
                <Input
                  placeholder={f.placeholder}
                  name={f.name}
                  type="number"
                  value={formValues[f.name] || ""}
                  onChange={handleChange}
                ></Input>
              );

            case SELECT:
              return (
                <SimpleSelect
                  placeholder={f.placeholder}
                  name={f.name}
                  options={f.options}
                  value={formValues[f.name] || undefined}
                  onChange={handleChange}
                ></SimpleSelect>
              );

            case IMAGE:
              return (
                <Image
                  name={f.name}
                  value={formValues[f.name] || undefined}
                  onChange={handleChange}
                ></Image>
              );
            case CUSTOM:
              return f.component;

            default:
              return null;
          }
        })}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button
            loading={loading}
            style={{
              background: "teal",
              color: "wheat",
              borderRadius: "10px",
            }}
            onClick={handleSubmit}
          >
            Saqlash
          </Button>
        </div>
      </Space>
    </div>
  );
};
