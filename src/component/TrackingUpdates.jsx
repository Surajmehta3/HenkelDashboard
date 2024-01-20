import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { MdSpatialTracking } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TrackingUpdates = () => {
  const token = sessionStorage.getItem("token");
  const nagivate = useNavigate();
  const [completeShipmentX, setCompleteShipmentX] = useState([]);
  const [loader, setLoader] = useState(true);
  const [trackingdata, settrackingdata] = useState([])
  const [finalData, setFinalData] = useState([])


  const getTrackingData = async () => {

    let promise = await axios.get(`https://apml-api-b1.glitch.me/api/v1/henkel/orders?keyword=${sessionStorage.getItem("customer")}`)

    Promise.all([promise]).then((data) => {
      console.log(data)
      let trackingissue = []
      for (let i = 0; i < data[0].data.data.length; i++) {
        const element = data[0].data.data[i];
        if (element?.TrackingUpdate) {
          trackingissue.push(element);
        }
      }

      let newArr = []
      let mainElee = []
      for (let i = 0; i < trackingissue.length; i++) {
        let element = trackingissue[i].TrackingUpdate
        for (let j = 0; j < element.length; j++) {
          let elemene1 = element[j];
          mainElee.push(elemene1)
          newArr.push(elemene1)
        }
      }

      // console.log(mainElee)
      var finalArr = []
      trackingissue.map((res) => {
        for (let i = 0; i < mainElee.length; i++) {
          for (let j = 0; j < res.TrackingUpdate.length; j++) {
            let matchDate = mainElee[i].issueCreated === res.TrackingUpdate[j].issueCreated


            if (matchDate) {
              var obj = {
                issueData: mainElee[i],
                orderData: res
              }
              finalArr.push(obj)
              setFinalData(finalArr)
              console.log(finalArr, "finalArrfinalArr")

            }
          }
        }
        setLoader(false)
      })

    })

  }

  console.log(finalData, "finalArrfinalArr")
  useEffect(() => {
    const token = sessionStorage.getItem('id');
    if (token) {
      getTrackingData()
    } else {
      nagivate("/login")
    }
  }, []);

  return (
    <>
      <main>
        <div className="main_table-heading">
          <div className="heading">
            <MdSpatialTracking
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>TRACKING UPDATES </h1>
          </div>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <h1 style={{ color: "black", fontWeight: "500" }}>
              PENDING &nbsp;{finalData.length}{" "}
            </h1>
            <div className="two-tables">
              <table className="first-table">
                <thead>
                  <tr>
                    <th className="table-th-short">gc Number </th>
                    <th className="table-th-short">Ship To Party</th>
                    <th className="table-th-short">Ship To Address</th>
                    <th className="table-th-short">Issue Name </th>
                    <th className="table-th-short">Created at </th>
                    <th className="table-th-short">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {finalData.map((res) => {
                    return (
                      <tr>
                        <td className="table-td-short">
                          {res?.orderData?.GC_DATA?.DocketNo ? res?.orderData?.GC_DATA?.DocketNo : "--"}
                        </td>
                        <td className="table-td-short">
                          {res.orderData.Order.shiptoparty}
                        </td>
                        <td
                          className="table-td-short"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {res.orderData.Order.shiptoaddress}
                        </td>
                        <td className="table-td-short">
                          Tracking Update
                        </td>
                        <td className="table-td-short">
                          {res.issueData.issueCreated}
                        </td>
                        <td className="table-td-short">
                          {res.issueData.issueRemark}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div>
                <div style={{ marginTop: "-3.2rem" }}>
                  <h1 style={{ color: "black", fontWeight: "500" }}>
                    COMPLETED &nbsp;{completeShipmentX.length}
                  </h1>
                </div>

                <table className="second-table">
                  <thead>
                    <tr>
                      <th className="table-th-short">gc Number </th>
                      <th className="table-th-short">Ship To Party</th>
                      <th className="table-th-short">Ship To Address</th>
                      <th className="table-th-short">Issue Name </th>
                      <th className="table-th-short">Created at </th>
                      <th className="table-th-short">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default TrackingUpdates;
