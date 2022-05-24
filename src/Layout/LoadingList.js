import React, { useState, useEffect } from "react";
import { List, Avatar, Skeleton, Divider, Typography, Affix } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  CAT,
  CLIENT,
  CLIENT_PAYMENT,
  DONE_ORDER,
  MEAL,
  ORDER_ACTION,
} from "../Components/ListItems/listItemTypes";
import CategoryItem from "../Components/ListItems/CategoryItem";
import FetchApi from "../utils/FetchApi";
import { useDispatch, useSelector } from "react-redux";
import { setListData } from "../redux/slices/appSlice";
import MealItem from "../Components/ListItems/MealItem";
import OrderAction from "../Components/ListItems/OrderActions";
import DoneOrder from "../Components/ListItems/DoneOrder";
import ClientItem from "../Components/ListItems/ClientItem";
import ClientPaymentItem from "../Components/ListItems/ClientPaymentItem";

const LoadingList = ({ page }) => {
  const [loading, setLoading] = useState(false);

  const data = useSelector(state =>
    state.app.listData[page.redux] ? state.app.listData[page.redux] : []
  );

  const dispatch = useDispatch();
  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    // setLoading(true);
    const res = await FetchApi(page.url, "GET");
    if (res) {
      dispatch(
        setListData({
          prop: page.redux,
          value: res.data,
        })
      );
    }
    // setLoading(false);
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  const setItems = item => {
    const listItems = {
      [CAT]: <CategoryItem item={item} page={page}></CategoryItem>,
      [MEAL]: <MealItem item={item} page={page}></MealItem>,
      [ORDER_ACTION]: <OrderAction item={item} page={page} />,
      [DONE_ORDER]: <DoneOrder item={item} page={page} />,
      [CLIENT]: <ClientItem item={item} page={page} />,
      [CLIENT_PAYMENT]: <ClientPaymentItem item={item} page={page} />,
    };

    return listItems[page.listItem];
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
        <span style={{ color: "#aaa", fontSize: "12px" }}>
          {" "}
          ({data.length} ta)
        </span>
      </div>
      <div
        id="scrollableDiv"
        style={{
          height: "calc(100vh - 92px)",
          overflow: "auto",
          padding: "0 16px",
          paddingBottom: "40px",
          borderRadius: "10px",
          border: "1px dashed teal",
        }}
      >
        <InfiniteScroll
          dataLength={data?.length}
          next={loadMoreData}
          hasMore={false}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List dataSource={data || []} renderItem={setItems} />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default LoadingList;
