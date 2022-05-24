import { Button, DatePicker, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FetchApi from "../../utils/FetchApi";

const { RangePicker } = DatePicker;
const ReportTable = ({ columns, page }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const allData = useSelector(state => state.app.allData);
  useEffect(() => {
    fetchReport();
  }, [allData]);

  const fetchReport = async () => {
    switch (page.redux) {
      case "ingredient_quantity":
        {
          setLoading(true);
          const res = await FetchApi(page.path, "POST");

          if (res) {
            const mapedData = allData.ingredients?.map(ing => {
              return {
                _id: ing._id,
                name: ing.name,
                killo: res.data.find(d => d._id === ing._id)?.killo || 0,
                dona: res.data.find(d => d._id === ing._id)?.dona || 0,
              };
            });
            if (mapedData) {
              setData(mapedData);
            }
          }
          setLoading(false);
        }
        break;

      case "kassa":
        {
          setLoading(true);
          const res = await FetchApi(page.path, "POST");

          if (res) {
            setData(res.data);
          }
          setLoading(false);
        }
        break;
      case "client_debts":
        {
          setLoading(true);
          const res = await FetchApi(page.path, "POST");

          if (res) {
            const mapedData = allData.clients?.map(ing => {
              return {
                _id: ing._id,
                name: ing.name,
                total: res.data.find(d => d._id === ing._id)?.total || 0,
              };
            });
            if (mapedData) {
              setData(mapedData);
            }
          }
          setLoading(false);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Space>
        <RangePicker size="small" />
        <Button size="small" type="primary">
          Yangilash
        </Button>
      </Space>
      <hr></hr>
      <Table
        scroll={{ x: 375 }}
        pagination={false}
        size="small"
        columns={page.reportColumns || []}
        dataSource={data}
      />
    </div>
  );
};

export default ReportTable;
