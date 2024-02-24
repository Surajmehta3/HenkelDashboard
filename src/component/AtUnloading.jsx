import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { MdFireTruck } from "react-icons/md";
import { WorkBook, WorkSheet, utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/orderDetailSlice";
import { atunloadingheader } from "./common";

const AtUnloading = () => {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  const [count, setCount] = useState(0);
  const [sheetData, setSheetData] = useState([]);
  const nagivate = useNavigate();
  const [combo, setCombo] = useState([]);
  const [atunloadingData, setAtunloading] = useState([])
  const [loader, setLoader] = useState(true)


  const customer = sessionStorage.getItem("customer")

  const gettingData = async () => {
    let customer = 'Henkel'
    let status = 'At Unloading'
    let OrderStatus = "active"
    var enrouteData = await axios.get(`https://apml-api-b1.glitch.me/api/v1/henkel/orders?keyword=Henkel&keyword1=${status}&keyword2=${OrderStatus}`)
    setAtunloading(enrouteData)
    setLoader(false)

    let data = {
      'atUnloadingCount': enrouteData?.data?.data?.length
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

  function remaingkms(a) {
    var kms = Math.floor(a / 1000);
    const re = kms + " kms";
    return re;
  }

  function differentdate(a) {
    let date = new Date(a);
    let milliseconds = date.getTime();
    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();
    const expectedPickupDate = milliseconds;

    console.log(expectedPickupDate, "expectedPickupDate")
    console.log(currentTimestamp, "currentTimestamp")
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
    const re = days + "d " + hours + "h " + minutes + "m";
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

  useEffect(() => {
    const token = sessionStorage.getItem("id")
    if (token) {
      // fetching();
      console.log("authorised")
    } else {
      nagivate("/login")
    }

    gettingData()
  }, []);

  let temp;

  function status_color(a) {
    if (a != null) {
      return true
    } else {
      return false
    }
  }

  function atvsnow(a) {
    const millis = new Date().getTime();
    const difference = millis - a;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const re = `${days}D ${hours}H ${minutes}M`;
    return re.toString();
  }

  function subtractDates1(date1, date2) {
    const difference = date1 - date2;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const re = `${days} days ${hours} hours ${minutes} minutes`;
    return re.toString();
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



  const getCount = () => {
    let tr = document.getElementsByTagName("tr");
    temp = tr.length;

    setTimeout(() => {
      setCount(temp - 1);
    }, 1000);
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
            <MdFireTruck className="heading-icon" style={{ color: "orange" }} />
            <h1>
              AT UNLOADING <span>{atunloadingData?.data?.orderCount}</span>
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
                  {
                    atunloadingheader.map((res) => {
                      return (
                        <th className="table-th">{res}</th>
                      )
                    })
                  }
                </tr>
              </thead>
              <tbody>
                {
                  atunloadingData?.data?.data.map((res) => {
                    return (
                      <tr>
                        <td className="td-main">{res?.Order?.orderNumber}</td>
                        <td className="td-main">{res?.Order?.origin}</td>
                        <td className="td-main">{res?.GC_DATA ? res?.GC_DATA?.DocketNo || res?.GC_DATA : "no Gc Updated"}</td>
                        <td className="td-main">{res?.vehicleAssign?.VehicleNumber}</td>
                        <td className="td-main">{`${res?.EwayBill?.actualDist} kms`}</td>
                        <td className="td-main">{res?.Order?.orderby}</td>
                        <td className="td-main">{convertmilisecond(res?.Order?.pickupdate)}</td>
                        {/* <th className="table-th" style={{ color: "green" }}>{`${remaingkms(res?.remainingDistance)} `}</th> */}
                        <td className="td-main" >{res?.Order?.shiptoparty}</td>
                        <td className="td-main">{res?.Order?.shiptoaddress}</td>
                        <td className="td-main">{res?.Order?.vehicletype}</td>

                        {/* <td className="td-main">--</td> */}
                        <td className="td-main">{differentdate(res?.Order?.expecteddeliverydate)}</td>
                        <td className="td-main">{res?.Order?.shplinstructions}</td>
                        {/* <td className="td-main" style={{ color: "red", fontWeight: "bold" }}>{res?.Order?.apmlremarks ? res?.Order?.apmlremarks : "noremark"}</td> */}
                        <td className="td-main">
                          <button
                            className="color-button hovertext1"
                            data-hover="Arrival Time"
                            style={{
                              backgroundColor: status_color(
                                res.ArrivalTime
                              )
                                ? "#00ff00"
                                : "red",
                            }}
                          >
                            .
                          </button>
                          <button
                            className="color-button hovertext2"
                            data-hover="Actual Activity Load Start"
                            style={{
                              backgroundColor: status_color(
                                res.UnLoadingStart
                              )
                                ? "#00ff00"
                                : "red",
                            }}
                          >
                            .
                          </button>

                          <button
                            className="color-button hovertext3"
                            data-hover="Actual Activity Load End"
                            style={{
                              backgroundColor: status_color(
                                res.UnLoadingEnd
                              )
                                ? "#00ff00"
                                : "red",
                            }}
                          >
                            .
                          </button>
                        </td>
                        <td className="td-main"
                          style={{ color: atvsnow(res.ArrivalTime) > "-1 days 0 hours 0 minutes" ? "#00ff00" : "red", fontWeight: "bold" }}
                        >
                          {atvsnow(res.ArrivalTime) ? atvsnow(res.ArrivalTime) : "--"}
                        </td>
                        <td className="td-main"
                          style={{ color: subtractDates1(res.UnLoadingStart, res.ArrivalTime) <= "0 days 0 hours 0 minutes" ? "-" : subtractDates1(res.UnLoadingStart, res.ArrivalTime) > "-1 days 0 hours 0 minutes" ? "#00ff00" : subtractDates1(res.UnLoadingStart, res.ArrivalTime) < "-1 days 0 hours 0 minutes" ? "red" : "--", fontWeight: "bold" }}
                        >
                          {res.UnLoadingStart === undefined ? "--" : subtractDates1(res.UnLoadingStart, res.ArrivalTime) <= "0 days 0 hours 0 minutes"
                            ? "-"
                            : subtractDates1(res.UnLoadingStart, res.ArrivalTime) > "0 days 0 hours 0 minutes" ?
                              subtractDates1(res.UnLoadingStart, res.ArrivalTime) : "--"}
                        </td>
                        <td className="td-main"
                          style={{ color: subtractDates1(res.UnLoadingStart, res.UnLoadingEnd) <= "0 days 0 hours 0 minutes" ? "#00ff00" : subtractDates1(res.UnLoadingStart, res.UnLoadingEnd) > "-1 days 0 hours 0 minutes" ? "#00ff00" : subtractDates1(res.UnLoadingStart, res.UnLoadingEnd) < "-1 days 0 hours 0 minutes" ? "red" : "--", fontWeight: "bold" }}
                        >
                          {res?.UnLoadingEnd === undefined ? "--" : subtractDates1(res?.UnLoadingStart, res.UnLoadingEnd) <= "0 days 0 hours 0 minutes"
                            ? subtractDates1(res.UnLoadingEnd, res?.UnLoadingStart)
                            : subtractDates1(res.UnLoadingEnd, res.UnLoadingStart) > "0 days 0 hours 0 minutes" ?
                              subtractDates1(res.UnLoadingEnd, res.UnLoadingStart) : "--"}
                        </td>
                        <td className="td-main">{res?.Order.Atunloading_Remark ? res.Order.Atunloading_Remark : "no remarks"}</td>
                        <td className="td-main">{res.InvoiceNo || "--"}</td>
                        <td className="td-main">{res.InvoiceDate || "--"}</td>
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
};

export default AtUnloading;
