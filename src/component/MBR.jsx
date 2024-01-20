import React, { useEffect, useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const MBR = () => {
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

  function date(a) {
    let milisecondValue = a;
    let date = new Date(milisecondValue);
    return date.toString();
  }

  function issue_escl(a) {
    var issuename = [];
    if (a != null) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].issueType === "Escalations") {
          issuename.push(a[i].issueType);
        }
      }
      return issuename.length;
    } else {
      return "0";
    }
  }

  function issue_track(a) {
    var issuename = [];
    if (a != null) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].issueType === "Tracking Update") {
          issuename.push(a[i].issueType);
        }
      }
      return issuename.length;
    } else {
      return "0";
    }
  }

  function issue_abnorm(a) {
    var issuename = [];
    if (a != null) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].issueType === "Abnormalities") {
          issuename.push(a[i].issueType);
        }
      }
      return issuename.length;
    } else {
      return "0";
    }
  }

  function todaysdate(date1) {
    var currentDate = new Date();
    var currentTimeInMs = currentDate.getTime();
    const difference = currentTimeInMs - date1;
    // Calculate the difference in days, hours, and minutes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    // Return the difference as a string in the format "X days Y hours Z minutes"
    return `${days}D ${hours}H`;
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

  function subtractDates1(date1, date2) {
    const difference = date1 - date2;
    // Calculate the difference in days, hours, and minutes
    let days, hours, minutes;
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const re = days + "d" + hours + "h" + minutes + "m";
    return re;
  }

  useEffect(() => {
    const token= sessionStorage.getItem("id")
    if(token){
      fetching();
    }else{
      nagivate("/login")
    }
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
        <div className="main_table-heading">
          <div className="heading">
            <AiOutlineLineChart
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>
              MBR <span>{count}</span>
            </h1>
          </div>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <iframe
              style={{
                background: "#252525",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                width: "100vw",
                height: "100vh",
              }}
              src="https://charts.mongodb.com/charts-project-0-ixrdr/embed/dashboards?id=640fea27-e1ba-4465-8c63-3db4bc804f10&theme=dark&autoRefresh=true&maxDataAge=300&showTitleAndDesc=true&scalingWidth=fixed&scalingHeight=fixed"
            ></iframe>
            <table>
              <thead>
                <tr>
                  <th className="table-th">VEHICLE NO. </th>
                  <th className="table-th">VEHICLE TYPE </th>
                  <th className="table-th">SHIPMENT CREATED </th>
                  <th className="table-th">MATERIAL NAME </th>
                  <th className="table-th">ESCALATIONS</th>
                  <th className="table-th">TRACKING UPDATE </th>
                  <th className="table-th">ABNORMALITIES</th>
                  <th className="table-th">FROM</th>
                  <th className="table-th">Ship To Party</th>
                  <th className="table-th">TO</th>
                  <th className="table-th">Ship To Address </th>
                  <th className="table-th">CONTRACT EDD </th>
                  <th className="table-th">ORDER BY EDD </th>
                  <th className="table-th">ACTUAL ARRIVAL </th>
                  <th className="table-th">
                    {/* LOADING POINT A SHORTER DIFFERENCE BETWEEN THE TIME A VEHICLE IS
                STANDING OUTSIDE THE LOADINGPOINT AND THE ACTUAL GATE-IN TIME IN
                DATE TIME INDICATES A MORE EFFICIENT LOADINGPOINT OPERATION. */}
                    AT VS GT{" "}
                  </th>
                  <th className="table-th">
                    {/* THIS TIME CAN VARY DEPENDING ON FACTORS SUCH AS THE EFFICIENCY
                OF LOADING AND UNLOADING OPERATIONS, INSPECTIONS OR OTHER
                SECURITY PROCEDURES, AND THE NUMBER OF VEHICLES INSIDE THE
                WAREHOUSE. */}
                    GT VS DT{" "}
                  </th>
                  <th className="table-th">GT VS LS </th>
                  <th className="table-th">LS VS LE</th>
                  <th className="table-th">LE VS DT </th>
                  <th className="table-th">
                    {/* THIS TIME CAN VARY DEPENDING ON FACTORS SUCH AS THE EFFICIENCY
                OF LOADING AND UNLOADING OPERATIONS, INSPECTIONS OR OTHER
                SECURITY PROCEDURES, AND THE NUMBER OF VEHICLES INSIDE THE
                WAREHOUSE.  */}
                    AT VS DT{" "}
                  </th>
                  <th className="table-th">
                    {/* THIS TIME CAN VARY DEPENDING ON FACTORS SUCH AS THE EFFICIENCY
                OF LOADING AND UNLOADING OPERATIONS, INSPECTIONS OR OTHER
                SECURITY PROCEDURES, AND THE NUMBER OF VEHICLES INSIDE THE
                WAREHOUSE.  */}
                    TRANSIT TIME{" "}
                  </th>
                  <th className="table-th">
                    {/* THIS TIME CAN VARY DEPENDING ON FACTORS SUCH AS THE EFFICIENCY
                OF LOADING AND UNLOADING OPERATIONS, INSPECTIONS OR OTHER
                SECURITY PROCEDURES, AND THE NUMBER OF VEHICLES INSIDE THE
                WAREHOUSE. */}
                    UNLOADING AT VS UNLS{" "}
                  </th>
                  <th className="table-th">UNLOADING UNLS VS UNLE </th>
                  <th className="table-th">UNLOADING UNLE VS DT</th>
                  <th className="table-th">UNLOADING AT VS DT </th>
                  <th className="table-th">TOTAL UNLOADING TIME </th>
                  <th className="table-th">POD </th>
                  <th className="table-th">POD SINCE </th>
                  <th className="table-th">POD PIC</th>
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
                        <td className="td-main">created</td>
                        <td className="td-main">
                          {res.consignments[0].lineItems[0].material
                            ? res.consignments[0].lineItems[0].material.name
                            : "no material"}
                        </td>
                        <td
                          className="td-main"
                          style={{
                            fontWeight: "bolder",
                            color:
                              issue_escl(res.issues) > 0 ? "red" : "#00ff00",
                          }}
                        >
                          {issue_escl(res.issues)}
                        </td>
                        <td
                          className="td-main"
                          style={{
                            fontWeight: "bolder",
                            color:
                              issue_track(res.issues) > 0 ? "red" : "#00ff00",
                          }}
                        >
                          {issue_track(res.issues)}
                        </td>
                        <td
                          className="td-main"
                          style={{
                            fontWeight: "bolder",
                            color:
                              issue_abnorm(res.issues) > 0 ? "red" : "#00ff00",
                          }}
                        >
                          {issue_abnorm(res.issues)}
                        </td>
                        <td className="td-main">
                          {" "}
                          {res.shipmentStages[0].place.name}
                        </td>
                        <td className="td-main">
                          {" "}
                          {res.consignments[0].consigner.name.split("-")[1]}
                        </td>
                        <td className="td-main">
                          {res.shipmentStages[1].place.name}
                        </td>
                        <td className="td-main">
                          {" "}
                          {res.consignments[0].consignee.name}
                        </td>
                        <td className="td-main">-</td>
                        <td className="td-main">-</td>
                        <td className="td-main">
                          {differentdate(res.shipmentStages[0].arrivalTime)}
                        </td>
                        <td className="td-main">
                          {differentdate(
                            subtractDates1(
                              res.shipmentStages[0].gateInTime,
                              res.shipmentStages[0].arrivalTime
                            )
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res.shipmentStages[0].departureTime,
                            res.shipmentStages[0].gateInTime
                          )}
                        </td>
                        <td className="td-main">
                          {" "}
                          {subtractDates1(
                            res.shipmentStages[0].actualActivityStartTime,
                            res.shipmentStages[0].gateInTime
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][0]["actualActivityEndTime"],
                            res["shipmentStages"][0]["actualActivityStartTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {" "}
                          {subtractDates1(
                            res["shipmentStages"][0]["departureTime"],
                            res["shipmentStages"][0]["actualActivityEndTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {" "}
                          {subtractDates1(
                            res["shipmentStages"][0]["departureTime"],
                            res["shipmentStages"][0]["arrivalTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][1]["arrivalTime"],
                            res["shipmentStages"][0]["departureTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][1]["actualActivityStartTime"],
                            res["shipmentStages"][1]["arrivalTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][1]["actualActivityEndTime"],
                            res["shipmentStages"][1]["actualActivityStartTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][1]["departureTime"],
                            res["shipmentStages"][1]["actualActivityEndTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][1]["departureTime"],
                            res["shipmentStages"][1]["arrivalTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {subtractDates1(
                            res["shipmentStages"][1]["departureTime"],
                            res["shipmentStages"][1]["arrivalTime"]
                          )}
                        </td>
                        <td className="td-main">
                          {res["consignments"][0]["pod"]?.status
                            ? res["consignments"][0]["pod"]?.status
                            : "SUBMITTED"}
                        </td>
                        <td className="td-main">
                          {todaysdate(
                            res["shipmentStages"][1]["departureTime"]
                          )}
                        </td>
                        <td className="td-main" style={{ lineHeight: "2rem" }}>
                          <span>
                            {res.consignments[0]?.pod &&
                            res.consignments[0]?.pod?.documents ? (
                              <a
                                style={{ color: "#ff06ff", fontWeight: "bold" }}
                                href={
                                  res.consignments[0]?.pod?.documents[0]
                                    .downloadUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                              >
                                FRONT PIC
                              </a>
                            ) : (
                              "WATING"
                            )}
                          </span>
                          <br />
                          <span>
                            {res.consignments[0]?.pod &&
                            res.consignments[0]?.pod?.documents ? (
                              <a
                                style={{ color: "#ff06ff", fontWeight: "bold" }}
                                href={
                                  res.consignments[0]?.pod?.documents[0]
                                    .downloadUrl
                                }
                                target="_blank"
                                rel="noreferrer"
                              >
                                BACK PIC
                              </a>
                            ) : (
                              "FOR PIC"
                            )}
                          </span>
                        </td>
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

export default MBR;
