import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { FaTruckPickup } from "react-icons/fa";
import { WorkBook, WorkSheet, utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/orderDetailSlice";
import { enroutehader } from "./common";


const EnrouteForpickup = () => {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  const nagivate = useNavigate();
  const [loader, setLoader] = useState(true)
  const [EnrouteData, setEnrouteData] = useState([])

  // const customer = sessionStorage.getItem("customer")

  const gettingData = async () => {
    let status = 'Enroute For Pickup'
    let OrderStatus = "active"
    var enrouteData = await axios.get(`https://apml-api-b1.glitch.me/api/v1/henkel/orders?keyword=Henkel&keyword1=${status}&keyword2=${OrderStatus}`)
    setEnrouteData(enrouteData)
    setLoader(false)

    let data = {
      'enrouteCount': enrouteData?.data?.data?.length
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


  const exportExcelFile = () => {
    const element = document.getElementById("excel_table");
    let ws = utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    let wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Sheet1");
    /* save to file */
    writeFile(wb, "sample.xlsx");
  };


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
  }, [])


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
            <FaTruckPickup
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>
              ENROUTE FOR PICKUP <span>{EnrouteData?.data?.orderCount}</span>
            </h1>
          </div>
        </div>
        {loader ? <Loader /> : (
          <>
            {" "}
            <table id="excel_table">
              <thead>
                <tr>

                  {
                    enroutehader.map((res) => {
                      return (
                        <th className="table-th">{res}</th>
                      )
                    })
                  }

                </tr>
              </thead>
              <tbody>
                {
                  EnrouteData?.data?.data.map((res) => {
                    console.log(res)
                    if (
                      res.Order.orderby == user ||
                      user == "VIEW BY ALL"
                    ) {
                      return (
                        <tr>
                          <td className="td-main">{res?.Order?.orderNumber}</td>
                          <td className="td-main">{res?.Order?.origin}</td>
                          <td className="td-main" style={{ color: res?.GC_DATA ? "#00ff00" : "red", fontWeight: "bold" }}>{res?.GC_DATA ? res?.GC_DATA?.DocketNo || res?.GC_DATA : "Gc Not Uploaded"}</td>
                          <td className="td-main">{res?.vehicleAssign?.VehicleNumber}</td>
                          <td className="td-main">{`${res?.TotalDistance ? res?.TotalDistance : 0} kms`}</td>
                          <td className="td-main">{res?.Order?.orderby}</td>
                          <td className="td-main">{convertmilisecond(res?.Order?.pickupdate)}</td>
                          <td className="td-main">{res?.Order?.shiptoparty}</td>
                          <td className="td-main">{res?.Order?.shiptoaddress}</td>
                          <td className="td-main">{res?.Order?.material}</td>
                          <td className="td-main">{res?.Order?.vehicletype1 ? res?.Order?.vehicletype1 : res?.Order?.vehicletype}</td>
                          <td className="td-main" style={{
                            fontWeight: "bold",
                            color: differentdate(res?.Order?.pickupdate) > 21600000 &&
                              differentdate(res?.Order?.pickupdate) < 86400000 ? "yellow"
                              :
                              differentdate(res?.Order?.pickupdate) > 21600000 &&
                                differentdate(res?.Order?.pickupdate) < 86400000 ? "orange"
                                : 'red'

                          }}>{differentdate(res?.Order?.pickupdate)}</td>
                          <td className="td-main"
                            style={{ color: "#00ff00", fontWeight: "bold" }}
                          >{differentdate(res?.Order?.expecteddeliverydate)}</td>
                          {/* <td className="td-main"
                            style={{ color: "rgb(212, 41, 41)", fontWeight: "bold" }}
                          >{res?.Order?.shplinstructions}</td> */}
                          <td className="td-main"
                            style={{ color: "rgb(247, 3, 145)", fontWeight: "bold" }}
                          >{res?.Enroute_remark ? res?.Enroute_remark : "no remark"}</td>
                        </tr>

                      )
                    }
                  })
                }


                {/* );
                  }
                })} */}
              </tbody>
            </table>
          </>
        )
        }
      </main>
    </>
  );
}

export default EnrouteForpickup