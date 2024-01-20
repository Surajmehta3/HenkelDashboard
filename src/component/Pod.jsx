import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { VscVmRunning } from "react-icons/vsc";
import {  utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";

const Pod = () => {
  const token = sessionStorage.getItem("token");
  const nagivate = useNavigate();
  const [combo, setCombo] = useState([]);
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

      ],
      orderDate: {
        from: 1680287400000,
      },
    },
    limit: 5000,
  };

  const url2Data = {
    filters: {
      shipmentStatus: ["Completed"],
      customer: ["SIEMENS HEALTHCARE PRIVATE LIMITED"],
      shipmentDate: {
        from: 1680287400000,
      },
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
      let pendingResponse = [];
      for (let i = 0; i < message[1].data.data.length; i++) {
        if (message[1].data.data[i].shipmentStatus === "Completed") {
          pendingResponse.push(message[1].data.data[i]);
        }
      }
      setCombo(pendingResponse);
      setLoader(false);
    });
  }

  function todaysdate(date1) {
    var currentDate = new Date();
    var currentTimeInMs = currentDate.getTime();
    const difference = currentTimeInMs - date1;
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

  useEffect(() => {
    const token = sessionStorage.getItem("id");
    if (token) {
      fetching();
    } else {
      nagivate("/login");
    }
  }, []);
  return (
    <>
      {/* <Aside /> */}
      <main>
        <div className="main_table-export">
          <div className="export">
            <button onClick={exportExcelFile}>
              <h1> EXPORT</h1>
            </button>
          </div>
        </div>
        <div className="main_table-heading" style={{ minWidth: "100%" }}>
          <div className="heading">
            <VscVmRunning
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>
              POD <span>{combo.length}</span>
            </h1>
          </div>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <>
            {" "}
            <table className="table" id="excel_table">
              <thead style={{ minWidth: "1200px" }}>
                <tr>
                  <th className="table-th" style={{ minWidth: "400px" }}>
                    shipment Number{" "}
                  </th>
                  <th className="table-th" style={{ minWidth: "400px" }}>
                    Pod Status{" "}
                  </th>
                  <th className="table-th" style={{ minWidth: "400px" }}>
                    Pod since{" "}
                  </th>
                  <th className="table-th" style={{ minWidth: "400px" }}>
                    POD PIC{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {combo.map((res) => {
                  return (
                    <tr>
                      <td className="td-main">{res.shipmentNumber}</td>
                      <td className="td-main">
                        {res.consignments[0].pod?.status
                          ? res.consignments[0].pod?.status
                          : "--"}
                      </td>
                      <td className="td-main">
                        {todaysdate(res.shipmentStages[1].departureTime)}
                      </td>
                      <td className="td-main" style={{ lineHeight: "2rem" }}>
                        <span>
                          {res.consignments[0]?.pod &&
                          res.consignments[0]?.pod?.documents ? (
                            <a
                              target="_blank"
                              style={{ color: "#ff00ff", fontWeight: "bold" }}
                              href={
                                res.consignments[0]?.pod?.documents[0]
                                  .downloadUrl
                              }
                              rel="noreferrer"
                            >
                              FRONT PIC
                            </a>
                          ) : (
                            "wating"
                          )}
                        </span>
                        <br />
                        <span>
                          {res.consignments[0]?.pod &&
                          res.consignments[0]?.pod?.documents ? (
                            <a
                              style={{ color: "#ff00ff", fontWeight: "bold" }}
                              href={
                                res.consignments[0]?.pod?.documents[1]
                                  .downloadUrl
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              BACK PIC
                            </a>
                          ) : (
                            "for pic"
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </>
  );
};

export default Pod;
