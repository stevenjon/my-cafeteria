import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import "antd/dist/antd.css";
import Login from "./Pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Settings from "./Pages/Settings";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./Pages/AnimatedPage";
import ListLayout from "./Layout/ListLayout";
import SettingsClass from "./Pages/Settings/SettingsClass";
import Orders from "./Pages/Orders";
import SingleOrder from "./Pages/SingleOrder";
import IngredientsIncome from "./Pages/IngredientsIncome";
import ReportsClass from "./Pages/Reports/ReportsClass";
import Reports from "./Pages/Reports";
import ReportLayout from "./Layout/ReportLayout";
import Clients from "./Pages/Clients";
import ClientPayment from "./Pages/ClientPayment";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "./utils/db";
import { getLocalAllData } from "./redux/slices/appSlice";
function App() {
  const location = useLocation();
  const auth = useSelector(state => state.app.auth);

  const dispatch = useDispatch();
  const allData = useLiveQuery(async () => {
    //
    // Query Dexie's API
    //
    const categories = await db.categories.toArray();
    const ingredients = await db.ingredients.toArray();
    const meals = await db.meals.toArray();
    const clients = await db.clients.toArray();

    // Return result
    return {
      categories,
      ingredients,
      meals,
      clients,
    };
  });

  if (allData) {
    dispatch(getLocalAllData(allData));
  }
  // useEffect(() => {
  //   if (auth) {
  //     dispatch(getAllData());
  //   }
  // }, [auth, dispatch]);
  if (auth) {
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home></Home>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path="/settings"
            element={
              <AnimatedPage>
                <Settings></Settings>
              </AnimatedPage>
            }
          ></Route>

          <Route
            path="/reports"
            element={
              <AnimatedPage>
                <Reports></Reports>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path={Clients.path}
            element={
              <AnimatedPage>
                <ListLayout page={Clients}></ListLayout>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path={ClientPayment.path}
            element={
              <AnimatedPage>
                <ListLayout page={ClientPayment}></ListLayout>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path={Orders.path}
            element={
              <AnimatedPage>
                <ListLayout page={Orders}></ListLayout>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path={IngredientsIncome.path}
            element={
              <AnimatedPage>
                <ListLayout page={IngredientsIncome}></ListLayout>
              </AnimatedPage>
            }
          ></Route>
          <Route
            path={SingleOrder.path}
            element={
              <AnimatedPage>
                <ListLayout page={SingleOrder}></ListLayout>
              </AnimatedPage>
            }
          ></Route>
          {SettingsClass.map(page => (
            <Route
              path={page.path}
              element={
                <AnimatedPage>
                  <ListLayout page={page}></ListLayout>
                </AnimatedPage>
              }
            ></Route>
          ))}

          {ReportsClass.map(page => (
            <Route
              path={page.path}
              element={
                <AnimatedPage>
                  <ReportLayout page={page}></ReportLayout>
                </AnimatedPage>
              }
            ></Route>
          ))}
        </Routes>
      </AnimatePresence>
    );
  } else {
    return <Login></Login>;
  }
}

export default App;
