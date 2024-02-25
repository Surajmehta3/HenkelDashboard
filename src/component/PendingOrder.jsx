import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { FaList } from "react-icons/fa";
import { utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/orderDetailSlice"

const PendingOrder = () => {
  const nagivate = useNavigate();
  const [pendingData, setPendingData] = useState([])
  const [loader, setLoader] = useState(true)

  const gettingData = async () => {
    let status = 'Pending Order'
    let OrderStatus = "active"
    var enrouteData = await axios.get(`https://apml-api-b1.glitch.me/api/v1/henkel/orders?keyword=${sessionStorage.getItem('customer')}&keyword1=${status}&keyword2=${OrderStatus}`)
    setPendingData(enrouteData)
    setLoader(false)
    console.log(pendingData, "pendingDatapendingData")

    let data = {
      'HenkelPendingCount': enrouteData?.data?.data?.length
    };

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `https://apml-api-b1.glitch.me/api/v1/productCount/64c3978bfd3cfcbc73b3e2ff`,
      headers: {},
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log("updated successfully")
      })
      .catch((error) => {
        console.log(error)
      });
  }

  function differentdate(a) {
    let date = new Date(a);
    let milliseconds = date.getTime();
    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();
    const expectedPickupDate = milliseconds;
    const expectedPickupTimestamp = expectedPickupDate;
    let days, hours, minutes;
    if (expectedPickupTimestamp > currentTimestamp) {
      const difference = expectedPickupTimestamp - currentTimestamp;
      days = Math.floor(difference / (1000 * 60 * 60 * 24));
      hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    } else if (currentTimestamp > expectedPickupTimestamp) {
      const difference = currentTimestamp - expectedPickupTimestamp;
      days = Math.floor(difference / (1000 * 60 * 60 * 24)) * -1;
      hours =
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) *
        -1;
      minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)) * -1;
    } else {
      days = 0;
      hours = 0;
      minutes = 0;
    }
    const re = days + "d" + hours + "h" + minutes + "m";
    return re;
  }

  const convertmilisecond = (mydate) => {
    const milliseconds = mydate;
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedDateTime
  }

  const exportExcelFile = () => {
    const element = document.getElementById("excel_table");
    let ws = utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    let wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    /* save to file */
    writeFile(wb, "sample.xlsx");
  };




  useEffect(() => {
    const token = sessionStorage.getItem("id");
    if (token) {
      gettingData()
    } else {
      nagivate("/login")
    }
  }, []);



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
            <FaList className="heading-icon" style={{ color: "orange" }} />
            <h1>
              PENDING ORDERS <span>{pendingData?.data?.orderCount}</span>
            </h1>
          </div>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <table className="main-table" id="excel_table">
              <thead>
                <tr>
                  <th className="table-th">order number </th>
                  <th className="table-th">Origin </th>
                  <th className="table-th">Ship To Party </th>
                  <th className="table-th">Ship To Address</th>
                  <th className="table-th">Vehicles Types</th>
                  <th className="table-th">Total vehicles</th>

                  <th className="table-th">material</th>
                  <th className="table-th">expected Pickup Date </th>
                  <th className="table-th">expected DELIVERY Date </th>
                  <th className="table-th">Order By </th>
                  <th className="table-th">Order Date </th>
                  <th className="table-th">instructions </th>
                  <th className="table-th">Apml Remarks </th>
                </tr>
              </thead>

              <tbody>
                {
                  pendingData?.data?.data.map((res) => {
                    return (
                      <tr>
                        <td className="td-main">{res?.Order?.orderNumber ? res?.Order?.orderNumber : "No Order Number"}</td>
                        <td className="td-main">{res?.Order?.origin ? res.Order.origin : "--"}</td>
                        <td className="td-main" style={{ color: "rgb(16, 177, 231)", fontWeight: "bold" }}>{res?.Order?.shiptoparty ? res.Order.shiptoparty : "--"}</td>
                        <td className="td-main" style={{ color: "rgb(16, 177, 231)", fontWeight: "bold" }}>{res?.Order?.destination ? res.Order.destination : "--"}</td>

                        <td className="td-main" style={{ color: "rgb(16, 177, 231)", fontWeight: "bold" }}>{res?.Order?.vehicletype ? res.Order.vehicletype : "--"}</td>

                        <td className="td-main" >{res?.Order?.totalvehicle ? res?.Order?.totalvehicle : "--"}</td>
                       
                        <td className="td-main">{res?.Order?.material[0]?.key} , {res?.Order?.material[1]?.key} , {res?.Order?.material[2]?.key} , {res?.Order?.material[3]?.key} , {res?.Order?.material[4]?.key}</td>
                        <td className="td-main" style={{
                          fontWeight: "bold",
                          color: differentdate(res?.Order?.pickupdate) > 21600000 &&
                            differentdate(res?.Order?.pickupdate) < 86400000 ? "yellow"
                            :
                            differentdate(res?.Order?.pickupdate) > 21600000 &&
                              differentdate(res?.Order?.pickupdate) < 86400000 ? "orange"
                              : 'red'
                        }}>
                          {differentdate(res?.Order?.pickupdate)}
                        </td>
                        <td className="td-main"
                          style={{ color: "#00ff00", fontWeight: "bold" }}
                        >{differentdate(res?.Order?.expecteddeliverydate)}</td>
                        <td className="td-main">{res?.Order?.orderby ? res?.Order?.orderby : "--"}</td>
                        <td className="td-main">{res?.Order?.pickupdate ? convertmilisecond(res?.Order?.pickupdate) : "--"}</td>
                        <td className="td-main">{res?.Order?.shplinstructions ? res.Order.shplinstructions : "--"}</td>
                        <td className="td-main">{res?.Order?.Pending_Remark ? res.Order.Pending_Remark : "--"}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </>
  );
};

export default PendingOrder; 