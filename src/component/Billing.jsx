import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { RiBilliardsFill } from "react-icons/ri";
import { WorkBook, WorkSheet, utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/orderDetailSlice";

function Billing() {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  const [count, setCount] = useState(0);
  const nagivate = useNavigate();
  const [combo, setCombo] = useState([]);
  // const [loader, setLoader] = useState(true);

  const { loader, orders } = useSelector((state) => {
    return state.app
  })

  const customer = sessionStorage.getItem("customer")

  var completedData = orders?.data?.filter((res) => {
    if (user == "VIEW BY ALL") {
      return res?.vehicleStatus == "Completed" && res?.Order?.customer.includes(customer)
    } else {
      return res?.vehicleStatus == "Completed" && res?.Order?.customer.includes(customer) && res?.Order?.orderby.includes(user)
    }
  }
  ).map((res) =>
  ({
    ...res
  })
  )


  useEffect(() => {
    const token = sessionStorage.getItem("id")
    if (token) {
    } else {
      nagivate("/login")
    }
    dispatch(fetchData())
    // axios
    //   .get("https://fire-hot-hardhat.glitch.me/auth", {
    //     headers: { Authorization: "Bearer " + token },
    //   })
    //   .then((res) => {
    //     if (res.data.message === "Authorized") {
    //       fetching();
    //     }
    //   })
    //   .catch((err) => {
    //     nagivate("/");
    //   });
  }, []);

  let temp;

  const getCount = () => {
    let tr = document.getElementsByTagName("tr");
    temp = tr.length;

    setTimeout(() => {
      setCount(temp - 1);
    }, 1000);
  };

  const exportExcelFile = () => {
    const element = document.getElementById("excel_table");
    let ws = utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    let wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    /* save to file */
    writeFile(wb, "sample.xlsx");
  };

  getCount();

  return (
    <>
      <main>
        <div className="main_table-export">
          <div className="export">
            <button onClick={exportExcelFile}>
              <h1> EXPORT</h1>
            </button>
          </div>
        </div>
        <div className="main_table-heading">
          <div className="heading">
            <RiBilliardsFill
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>
              BILLING <span>{count}</span>
            </h1>
          </div>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <>
            {" "}
            <table className="main-table" id="excel_table">
              <thead>
                <tr>
                  <th className="table-th">Order Number</th>
                  <th className="table-th">Origin</th>
                  <th className="table-th">Destination</th>
                  <th className="table-th">Vehicle Number</th>
                  <th className="table-th">Bill Number</th>
                  <th className="table-th">Bill Date</th>
                  <th className="table-th">Bill Status</th>
                  <th className="table-th">Grm Number</th>
                  <th className="table-th">Bill Submitted Date</th>
                  <th className="table-th">Total Distance</th>
                  <th className="table-th">Additional Distance</th>
                  <th className="table-th">Zone</th>
                  <th className="table-th">Rate</th>
                  <th className="table-th">Halting Charges</th>
                  <th className="table-th">Two Point Charge</th>
                  <th className="table-th">Additoinal Charge</th>
                  <th className="table-th">Taxable Value</th>
                  <th className="table-th">GST</th>
                  <th className="table-th">Grand Total Cost</th>
                  <th className="table-th">Remark</th>
                  <th className="table-th">Detention Charges</th>
                  <th className="table-th">Loading Charges</th>
                  <th className="table-th">UnLoading Charges</th>
                  <th className="table-th">Other Charges</th>
                </tr>
              </thead>
              <tbody>
                {
                  completedData?.map((res) => {
                    return (
                      <tr>
                        <td className="td-main">{res?.Order?.orderNumber ? res?.Order?.orderNumber : "--"}</td>
                        <td className="td-main">{res?.Order?.origin ? res?.Order?.origin : "--"}</td>
                        <td className="td-main">{res?.Order?.city ? res?.Order?.city : "--"}</td>
                        <td className="td-main">{res?.vehicleAssign?.VehicleNumber}</td>
                        <td className="td-main">{res?.BillNumber ? res?.BillNumber : "--"}</td>
                        <td className="td-main">{res?.BillDate ? res?.BillDate : "--"}</td>
                        <td className="td-main">{res?.BillStatus ? res?.BillStatus : "--"}</td>
                        <td className="td-main">{res?.GrmNumber ? res?.GrmNumber : "--"}</td>
                        <td className="td-main">{res?.BillSubmitedDate ? res?.BillSubmitedDate : "--"}</td>
                        <td className="td-main">{res?.TotalDistance ? res?.TotalDistance : "--"}</td>
                        <td className="td-main">{res?.AdditionalDistance ? res?.AdditionalDistance : "--"}</td>
                        <td className="td-main">{res?.Zone ? res?.Zone : "--"}</td>
                        <td className="td-main">{res?.Rate ? res?.Rate : "--"}</td>
                        <td className="td-main">{res?.HaltingCharge ? res?.HaltingCharge : "--"}</td>
                        <td className="td-main">{res?.TwoPointCharge ? res?.TwoPointCharge : "--"}</td>
                        <td className="td-main">{res?.AdditionalCharge ? res?.AdditionalCharge : "--"}</td>
                        <td className="td-main">{res?.TaxableValue ? res?.TaxableValue : "--"}</td>
                        <td className="td-main">{res?.Gst ? res?.Gst : "--"}</td>
                        <td className="td-main">{res?.GrandTotalCost ? res?.GrandTotalCost : "--"}</td>
                        <td className="td-main">{res?.Remark ? res?.Remark : "--"}</td>
                        <td className="td-main">{res?.DetentionCharge ? res?.DetentionCharge : "--"}</td>
                        <td className="td-main">{res?.LoadingCharge ? res?.LoadingCharge : "--"}</td>
                        <td className="td-main">{res?.UnloadingCharge ? res?.UnloadingCharge : "--"}</td>
                        <td className="td-main">{res?.OtherCharge ? res?.OtherCharge : "--"}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </>
        )}
      </main>
    </>
  );
}

export default Billing;
