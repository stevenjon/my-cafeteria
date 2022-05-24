import { Spin } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/appSlice";
import FetchApi from "../../utils/FetchApi";
import "./Lock.css";
const Lock = () => {
  const [circles, setCircles] = useState([-1, -1, -1, -1]);
  const [incorrect, setIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const HandleClick = x => {
    if (circles.filter(d => d !== -1).length < 3) {
      const b = [...circles];
      b[circles.filter(d => d !== -1).length] = x;
      setCircles(b);
    } else {
      const b = [...circles];
      b[3] = x;
      setCircles(b);
      handleLogin(b);
    }
  };

  const handleLogin = async pincode => {
    setLoading(true);
    const code = pincode.join("");

    const res = await FetchApi("/users", "POST", {
      pincode: code,
    });
    if (res.data.length > 0) {
      dispatch(setAuth(res.data[0]));
    } else {
      window.navigator.vibrate(200);
      setIncorrect(true);
      setCircles([-1, -1, -1, -1]);
      setTimeout(() => {
        setIncorrect(false);
      }, 500);
    }

    setLoading(false);
  };

  return (
    <>
      <div id="pincode">
        <div className="table">
          <div className="cell">
            <div id="anleitung">
              <p>
                <strong>Iltimos PIN-Codeni kiriting.</strong>
              </p>
            </div>
            <Spin spinning={loading}>
              <div id="fields" className={incorrect ? "miss" : null}>
                <div className="grid">
                  {circles.map((d, index) => (
                    <div
                      key={index}
                      className={
                        d !== -1
                          ? "grid__col grid__col--1-of-4 numberfield active"
                          : "grid__col grid__col--1-of-4 numberfield"
                      }
                    >
                      <span></span>
                    </div>
                  ))}
                </div>
              </div>{" "}
            </Spin>
            <div id="numbers">
              <div className="grid">
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(1)}>1</button>
                </div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(2)}>2</button>
                </div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(3)}>3</button>
                </div>

                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(4)}>4</button>
                </div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(5)}>5</button>
                </div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(6)}>6</button>
                </div>

                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(7)}>7</button>
                </div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(8)}>8</button>
                </div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(9)}>9</button>
                </div>

                <div className="grid__col grid__col--1-of-3"></div>
                <div className="grid__col grid__col--1-of-3">
                  <button onClick={() => HandleClick(0)}>0</button>
                </div>
                <div className="grid__col grid__col--1-of-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lock;
