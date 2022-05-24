import React from "react";
import NumberFormat from "../../utils/NumberFormat";
import { NUMBER } from "../Inputs/inputTypes";
import "./reciept.css";
const Reciept = ({ data }) => {
  return (
    <div id="invoice-POS">
      <center id="top">
        <div className="info">
          <h2>Darmon restaurant</h2>
        </div>
      </center>
      <div id="bot">
        <div id="table">
          <table>
            <tr className="tabletitle text-c">
              <td className="item">
                <h2>Таом</h2>
              </td>
              <td className="Hours text-c">
                <h2>Сони</h2>
              </td>
              <td className="Rate text-c">
                <h2>Нархи</h2>
              </td>
            </tr>
            {data.map(d => (
              <tr className="service">
                <td className="tableitem">
                  <p className="itemtext">{d.name}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext text-c">{d.count}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext text-r">{NumberFormat(d.price)}</p>
                </td>
              </tr>
            ))}

            <tr className="tabletitle">
              <td></td>
              <td className="Rate text-c">
                <h2>Жами</h2>
              </td>
              <td className="payment text-r">
                <h2>
                  {data.length > 0 &&
                    NumberFormat(
                      data.reduce((acc, d) => acc + d.price * d.count, 0)
                    )}
                </h2>
              </td>
            </tr>
          </table>
        </div>

        <div id="legalcopy">
          <p className="legal">
            <strong>Харидингиз учун рахмат</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reciept;
