import { message } from "antd";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";

const key = 12;
export default async (url, method, data = null, id = null) => {
  const path = id ? url + "/" + id : url;
  try {
    return await axios({
      method: method,
      url: BaseUrl + path,
      data: data,
    });
  } catch (error) {
    console.log(error);
    if (error.code === "ERR_NETWORK") {
      message.error({ content: "Internet bilan aloqa yo'q!", key: key });
    }
    if (error.message.includes("400")) {
      message.error({ content: "Формани тўлдиринг!", key: key });
    }
  }
};
