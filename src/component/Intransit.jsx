import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import L from "leaflet";
import Loader from "./Loader";
import { TbTruckDelivery } from "react-icons/tb";
import { utils, writeFile } from "xlsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/orderDetailSlice";
import { intransit, statelatlong } from "./common";

const Intransit = () => {
  const dispatch = useDispatch()
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("user");
  const [froms, setFrom] = useState('')
  const [tos, setTo] = useState('')
  const [Distance, setDistance] = useState("")
  const [intransitData, setIntransitData] = useState([])

  const nagivate = useNavigate();
  const [loader, setLoader] = useState(true)


  const customer = sessionStorage.getItem("customer")

  const gettingData = async () => {
    let customer = 'siemens'
    let status = 'Intransit'
    let OrderStatus = "active"
    var enrouteData = await axios.get(`https://apml-api-b1.glitch.me/api/v1/henkel/orders?keyword=Henkel&keyword1=${status}&keyword2=${OrderStatus}`)
    setIntransitData(enrouteData)
    setLoader(false)

    let data = {
      'intransitCount': enrouteData?.data?.data?.length
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

  function subtractDates1(date1, date2) {
    const difference = date1 - date2;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const re = `${days} D ${hours} H ${minutes} M`;
    return re.toString();
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

  // map
  var origindata = [];
  var destinationdata = [];
  var vehicleloaction = [];
  var vehiclenumber = [];
  var remaingkm = [];

  for (var i = 0; i < intransitData?.data?.data?.length; i++) {
    remaingkm.push(
      Math.round(
        intransitData?.data?.data[i]?.RemainingDistance
      ) / 1000
    );
    var latitude4 =
      // intransitData?.data?.dataData[i].shipment.currentLocation !== null
      //     ? Number(intransitData?.data?.dataData[i].shipment.currentLocation.latitude)
      //     : 19.076;
      19.076
    var longitude4 =
      // intransitData?.data?.data[i].shipment.currentLocation !== null
      //   ? Number(intransitData?.data?.data[i].shipment.currentLocation.longitude)
      //   : 72.8777;
      72.8777
    vehicleloaction.push(latitude4 + "," + longitude4);
    vehiclenumber.push(
      intransitData?.data?.data[i]?.vehicleAssign?.VehicleNumber
    );

    var latitude = intransitData?.data?.data[i]?.Order?.from.split(",")[1]

    var longitude = intransitData?.data?.data[i]?.Order?.from.split(",")[0]

    origindata.push(latitude + "," + longitude);
    var latitude2 = intransitData?.data?.data[i]?.Order?.to.split(",")[1]

    var longitude2 = intransitData?.data?.data[i]?.Order?.to.split(",")[0]

    destinationdata.push(latitude2 + "," + longitude2);
  }

  navigator.geolocation.getCurrentPosition((position) => {
    var coordinates = origindata;
    var datatr = coordinates.map((x) => [
      parseFloat(x.split(",")[0]),
      parseFloat(x.split(",")[1]),
    ]);
    var coordinates12 = destinationdata;
    var datatr12 = coordinates12.map((x) => [
      parseFloat(x.split(",")[0]),
      parseFloat(x.split(",")[1]),
    ]);
    var coordinates14 = vehicleloaction;
    var datatr14 = coordinates14.map((x) => [
      parseFloat(x.split(",")[0]),
      parseFloat(x.split(",")[1]),
    ]);
    var coordinates15 = vehiclenumber;
    var datatr15 = coordinates15;
    var coordinates16 = remaingkm;
    var datatr16 = coordinates16;
    var statelatlong = [
      {
        state: "Andhra Pradesh",
        capital: "Amaravati",
        latitude: 16.5745,
        longitude: 80.3736,
      },
      {
        state: "Arunachal Pradesh",
        capital: "Itanagar",
        latitude: 27.102,
        longitude: 93.692,
      },
      {
        state: "Assam",
        capital: "Dispur",
        latitude: 26.1433,
        longitude: 91.7898,
      },
      {
        state: "Bihar",
        capital: "Patna",
        latitude: 25.5941,
        longitude: 85.1376,
      },
      {
        state: "Chhattisgarh",
        capital: "Raipur",
        latitude: 21.2514,
        longitude: 81.6296,
      },
      {
        state: "Goa",
        capital: "Panaji",
        latitude: 15.4909,
        longitude: 73.8278,
      },
      {
        state: "Gujarat",
        capital: "Gandhinagar",
        latitude: 23.2156,
        longitude: 72.6369,
      },
      {
        state: "Haryana",
        capital: "Chandigarh",
        latitude: 30.7333,
        longitude: 76.7794,
      },
      {
        state: "Himachal Pradesh",
        capital: "Shimla",
        latitude: 31.1048,
        longitude: 77.1734,
      },
      {
        state: "Jharkhand",
        capital: "Ranchi",
        latitude: 23.3441,
        longitude: 85.3096,
      },
      {
        state: "Karnataka",
        capital: "Bengaluru",
        latitude: 12.9716,
        longitude: 77.5946,
      },
      {
        state: "Kerala",
        capital: "Thiruvananthapuram",
        latitude: 8.5241,
        longitude: 76.9366,
      },
      {
        state: "Madhya Pradesh",
        capital: "Bhopal",
        latitude: 23.2599,
        longitude: 77.4126,
      },
      {
        state: "Maharashtra",
        capital: "Mumbai",
        latitude: 19.076,
        longitude: 72.8777,
      },
      {
        state: "Manipur",
        capital: "Imphal",
        latitude: 24.817,
        longitude: 93.9368,
      },
      {
        state: "Meghalaya",
        capital: "Shillong",
        latitude: 25.5788,
        longitude: 91.8933,
      },
      {
        state: "Mizoram",
        capital: "Aizawl",
        latitude: 23.7367,
        longitude: 92.7146,
      },
      {
        state: "Nagaland",
        capital: "Kohima",
        latitude: 25.6747,
        longitude: 94.11,
      },
      {
        state: "Odisha",
        capital: "Bhubaneswar",
        latitude: 20.2961,
        longitude: 85.8245,
      },
      {
        state: "Punjab",
        capital: "Chandigarh",
        latitude: 30.7333,
        longitude: 76.7794,
      },
      {
        state: "Rajasthan",
        capital: "Jaipur",
        latitude: 26.9124,
        longitude: 75.7873,
      },
      {
        state: "Sikkim",
        capital: "Gangtok",
        latitude: 27.3389,
        longitude: 88.6065,
      },
      {
        state: "Tamil Nadu",
        capital: "Chennai",
        latitude: 13.0827,
        longitude: 80.2707,
      },
      {
        state: "Telangana",
        capital: "Hyderabad",
        latitude: 17.385,
        longitude: 78.4867,
      },
      {
        state: "Tripura",
        capital: "Agartala",
        latitude: 23.8315,
        longitude: 91.2868,
      },
      {
        state: "Uttar Pradesh",
        capital: "Lucknow",
        latitude: 26.8467,
        longitude: 80.9462,
      },
      {
        state: "Uttarakhand",
        capital: "Dehradun",
        latitude: 30.3165,
        longitude: 78.0322,
      },
      {
        state: "West Bengal",
        capital: "Kolkata",
        latitude: 22.5726,
        longitude: 88.3639,
      },
    ];
    const latLong1 = [19.8628, 76.9629];
    let mymap = L.map("map").setView(latLong1, 4);
    var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer(
      "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}",
      {
        attribution:
          'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
        bounds: [
          [-85.0511287776, -179.999999975],
          [85.0511287776, 179.999999975],
        ],
        minZoom: 1,
        maxZoom: 8,
        format: "jpg",
        time: "",
        tilematrixset: "GoogleMapsCompatible_Level",
      }
    );
    var Stamen_TonerLite = L.tileLayer(
      "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 0,
        maxZoom: 20,
        ext: "png",
      }
    );
    var Stadia_AlidadeSmoothDark = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    );
    mymap.addLayer(Stadia_AlidadeSmoothDark);
    let DefaultIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
      iconSize: [25, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    for (var i = 0; i < datatr12.length; i++) {
      let marker5 = new L.marker([datatr12[i][0], datatr12[i][1]])
        .bindPopup(datatr14[i][0])
        .addTo(mymap);
      marker5.bindPopup(
        `<b>${datatr15[i]}<br><span style="color:red;">${datatr16[i]}kms.</span></b>`
      );
      var polygon = L.polyline([
        [datatr12[i][0], datatr12[i][1]],
        [datatr14[i][0], datatr14[i][1]],
      ]).addTo(mymap);
      var polygon1 = L.polyline([
        [datatr[i][0], datatr[i][1]],
        [datatr14[i][0], datatr14[i][1]],
      ]).addTo(mymap);
      polygon.setStyle({
        color: "red",
        dashArray: "5, 5",
        dashOffset: "0",
      });
      polygon1.setStyle({
        color: "green",
        dashArray: "15, 15",
        dashOffset: "0",
      });
      let circle1 = L.circle([datatr[i][0], datatr[i][1]], {
        color: "yellow",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 5000,
      }).addTo(mymap);
      let circle = L.circle([datatr12[i][0], datatr12[i][1]], {
        color: "red",
        fillColor: "#252525",
        fillOpacity: 0.5,
        radius: 5000,
      }).addTo(mymap);
    }
    for (var i = 0; i < statelatlong.length; i++) {
      let marker51 = new L.marker(
        [statelatlong[i].latitude, statelatlong[i].longitude],
        {
          icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/3995/3995483.png",
            iconSize: [11, 13],
          }),
          iconSize: [45, 45],
        }
      )
        .bindPopup(statelatlong[i].capital)
        .addTo(mymap);
    }
  });

  const Stages = (a, b, c, d) => {

    var status = 'NO STATUS'
    let calcTotalKm = a / 250 // 622/250 = 2 days
    // let calcRemainingKm = Number(b) / 250
    let diffMillseconds = c - b // expected delivery date - departed date Sun 10 September 2023 - Thu 7 September 2023 = 3 day
    const millisecondsInOneDay = 86400000; // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const days = diffMillseconds / millisecondsInOneDay;

    if (Math.floor(calcTotalKm) === Math.floor(days)) {
      return status = 'On Time'
    } else if (Math.floor(calcTotalKm) >= Math.floor(days)) {
      return status = 'Early'
    } else if (Math.floor(calcTotalKm) <= Math.floor(days)) {
      return status = 'Delay'
    }
    console.log(status, "statusstatus")



    return status
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
            <TbTruckDelivery
              className="heading-icon"
              style={{ color: "orange" }}
            />
            <h1>
              INTRANSIT <span>{intransitData?.data?.orderCount}</span>
            </h1>
          </div>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <table className=" main-table" id="excel_table">
              <thead>
                <tr>
                  {
                    intransit.map((res, index) => {
                      return (
                        <th className="table-th" key={index}>{res}</th>
                      )
                    })

                  }


                </tr>
              </thead>
              <tbody>
                {
                  intransitData?.data?.data.map((res) => {
                    console.log(res)
                    if (
                      res.Order.orderby == user ||
                      user == "VIEW BY ALL"
                    ) {
                      return (
                        <tr>
                          <td className="td-main">{res?.Order?.orderNumber}</td>
                          <td className="td-main" style={{ color: res?.Order.Intransit_Remark ? "red" : "", fontWeight: res?.Order.Intransit_Remark ? "bold" : "" }}>{res?.Order.Intransit_Remark ? res.Order.Intransit_Remark : "no remarks"}</td>
                          <td className="td-main" style={{
                            color: "rgb(16, 177, 231)",
                            fontWeight: "bolder",
                          }}>{!res?.RemainingDistance ? 0 : res?.RemainingDistance} kms</td>
                          <td className="td-main" style={{
                            color: "red",
                            fontWeight: "bolder",
                          }}>{res?.CurrentLocation ? res?.CurrentLocation : "--"}</td>
                          <td className="td-main">{res?.Order?.origin}</td>
                          <td className="td-main">{res?.EwayBill?.ewayBillNo ? res?.EwayBill?.ewayBillNo : "No Eway update"}</td>
                          <td className="td-main">{res?.EwayBill?.validUpto ? res?.EwayBill?.validUpto.split(" ")[0] : "--"}</td>
                          <td className="td-main" style={{ textTransform: "uppercase" }}>{res?.GC_DATA ? res?.GC_DATA?.DocketNo || res?.GC_DATA : "no Gc Updated"}</td>
                          <td className={
                            Stages(res?.EwayBill?.actualDist, res.Departed, Number(res?.Order?.expecteddeliverydate)) === 'Early' ? "early" :
                              Stages(res?.EwayBill?.actualDist, res.Departed, Number(res?.Order?.expecteddeliverydate)) === 'Delay' ? "delay" : "ontime"
                          }
                          >
                            {Stages(res?.EwayBill?.actualDist, res.Departed, Number(res?.Order?.expecteddeliverydate), res._id)}</td>
                          <td className="td-main" style={{ textTransform: "uppercase" }}>{res?.vehicleAssign?.VehicleNumber}</td>
                          <td className="td-main">{res?.Order?.orderby}</td>
                          <td className="td-main">{convertmilisecond(res?.Order?.pickupdate)}</td>
                          <td className="td-main">{res?.vehicleAssign?.DriverNumber}</td>
                          <td className="td-main">{res?.Order?.vehicletype}</td>
                          <td className="td-main">{res?.EwayBill?.actualDist ? `${res?.EwayBill?.actualDist}km` : "--"}</td>

                          <td className="td-main">{res?.Order?.shiptoparty}</td>
                          <td className="td-main">{res?.Order?.shiptoaddress}</td>
                          <td className="td-main"
                            style={{ color: "#00ff00", fontWeight: "bold" }}
                          >{differentdate(res?.Order?.expecteddeliverydate)}</td>
                          <td className="td-main"
                            style={{ fontWeight: "bold", color: "" }}
                          >{subtractDates1(res?.GateIn, res?.ArrivalTime)}</td>
                          <td className="td-main">{subtractDates1(res?.Departed, res?.GateIn)}</td>
                        </tr>
                      )
                    }
                  })
                }

              </tbody>
            </table>
            <div className="bottom">
              <div
                className="left"
                style={{
                  color: "black",
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div class="maps">
                  &nbsp;&nbsp;{" "}
                  <span
                    class="counter"
                    style={{ fontSize: "25px", color: "aliceblue" }}
                  >
                    {" "}
                    <i
                      class="fa-solid fa-truck-fast"
                      style={{ color: "green" }}
                    />{" "}
                    Transit Vehicle Map
                  </span>
                  <br />
                  <br />
                  <div class="india" id="map"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Intransit;
