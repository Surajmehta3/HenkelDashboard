import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { MdOutlinePayment } from "react-icons/md";
import { utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  const [count, setCount] = useState(0);
  const nagivate = useNavigate();
  const [pendingStatus, setPendingStatus] = useState([]);
  const [loader, setLoader] = useState(true);
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ2MDI2MDIsInVzZXJJZCI6Ijc3N2Q5YzIwLTEyNWYtNDhhZS04MWZjLTUzZWI2ZWM3MjZmZSIsImVtYWlsIjoiZGF0YS5zY2llbmNlQGFnYXJ3YWxwYWNrZXJzLmNvbSIsIm1vYmlsZU51bWJlciI6IjgyOTE4NDk1NjUiLCJvcmdJZCI6IjQwNTJhYjI0LTA1NDMtNGNkNC1iNTE3LTllNzhlZmVlNGZlZCIsIm5hbWUiOiJQcml5YWVzaCBQYXRlbCIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.cJR4aISn0MMed1zPQqPxkMsZTn0_9N0W9n1D5mCzLMw",
    "Content-Type": "application/json",
  };

  const url1Data = {
    filters: {
      consigner: [
        "SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD",
        "SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL - NHAVA SHEVA- SIEMENS HEALTHCARE PVT LTD",
        "SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD",
        "SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD",
        "SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.",
        "SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD",
        "SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD",
        "SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.",
        "SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD",
        "SHPL-GURGAON HARIYANA-SEIMENS HEALTHCARE PVT. LTD.",
        "SHPL-Banglore-Factory-SIEMENS HEALTHCARE PVT.LTD.",

      ],
      orderDate: {
        from: 1680287400000,
      },
    },
    limit: 5000,
  };

  const url2Data = {
    filters: {
      shipmentStatus: ["Planned", "Created"],
      customer: ["SIEMENS HEALTHCARE PRIVATE LIMITED"],
    },
  };

  const url1 =
    "https://apis.fretron.com/automate/autoapi/run/255ab0db-70ed-4933-a0cc-b30b67b70955";
  const url2 =
    "https://apis.fretron.com/automate/autoapi/run/67953f4a-fb2d-4548-a86f-7b4ce2d710d2";

  function fetching() {
    const promise1 = axios.post(url1, url1Data, headers);
    const promise2 = axios.post(url2, url2Data, headers);

    Promise.all([promise1, promise2]).then((message) => {
      setPendingStatus(message[1].data.data);
      setLoader(false);
    });
  }

  function subtractDates1(date1, date2) {
    const difference = date1 - date2;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const re = `${days}D ${hours}H`;
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

  useEffect(() => {
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
            <MdOutlinePayment
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>
              PAYMENT <span>{count}</span>
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
                  <th className="table-th">Vehicle No. </th>
                  <th className="table-th">Vehicle type </th>
                  {/* <th className="table-th">shipment created </th> */}
                  <th className="table-th">Ship to Party</th>
                  <th className="table-th">Ship To Address</th>
                  <th className="table-th">Arrival Time </th>
                  <th className="table-th">gateInTime vs arrivalTime </th>
                  <th className="table-th">departureTime vs gateInTime</th>
                  {/* <th className="table-th">Podc</th> */}
                </tr>
              </thead>
              <tbody>
                {pendingStatus.map((res) => {
                  if (
                    res.customFields
                      .filter((res) => res.fieldKey === "Order By")
                      .map((res) => {
                        return res.value.split(" ")[0].toLowerCase();
                      }) == user.toLowerCase() ||
                    user == "VIEW BY ALL"
                  ) {
                    return (
                      <tr>
                        <td className="td-main">
                          {res.fleetInfo.vehicle.vehicleRegistrationNumber}
                        </td>
                        <td className="td-main">
                          {
                            res.fleetInfo.vehicle.vehicleLoadType.name.split(
                              "-"
                            )[1]
                          }
                        </td>
                        {/* <td className="td-main">created</td> */}
                        <td className="td-main">
                          {res.consignments[0].consigner.name.split("-")[1]}
                        </td>
                        <td className="td-main">
                          {res.consignments[0].consignee.name}
                        </td>
                        <td className="td-main">
                          {differentdate(res.shipmentStages[0].arrivalTime)}
                        </td>
                        <td className="td-main">
                          {" "}
                          {subtractDates1(
                            res.shipmentStages[0].gateInTime,
                            res.shipmentStages[0].arrivalTime
                          )}
                        </td>
                        <td className="td-main">
                          {" "}
                          {subtractDates1(
                            res.shipmentStages[0].departureTime,
                            res.shipmentStages[0].gateInTime
                          ) > "-1 days 0 hours 0 minutes"
                            ? subtractDates1(
                                res.shipmentStages[0].departureTime,
                                res.shipmentStages[0].gateInTime
                              )
                            : ""}
                        </td>
                        {/* <td className="td-main">
                          {res.shipmentStages[0].tripPoint.remainingDistance
                            ? res.shipmentStages[0].tripPoint.remainingDistance
                            : "--"}
                        </td> */}
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </>
  );
};

export default Payment;
