import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { FaWpforms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Button.scss";
import { useAlert } from "react-alert";
import { Autocomplete, TextField } from "@mui/material";
import Loader from "./Loader";
import { city } from "./common";

export default function OrderForm() {
  const alert = useAlert();
  const form = useRef();
  const date = new Date();
  const miliseconds = date.getTime(date);
  const nagivate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [totalVeh, setTotalVeh] = useState(0);
  const [veh, setVeh] = useState([]);
  const [selectLocation, setSelectLocation] = useState("");
  const [selectOrigin, setSelectOrigin] = useState("");
  const [loadingCharges, setLoadingCharges] = useState("shpl");
  const [unloadingCharges, setUnloadingCharges] = useState("shpl");
  const [loader, setloader] = useState(false);
  const [orderNumberLoader, setOrderNumberLoader] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [myexpecteddeliverydate, setexpecteddeliverydate] = useState("");
  const [mypickupdate, setpickupdate] = useState("");
  const [orderNumberCount, setOrderNumberCount] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedTransportation, setSelectedTransportation] = useState('');
  const [ccNumbers, setCcNumbers] = useState({
    cc1: null,
    cc2: null,
    cc3: null,
    cc4: null,
    cc5: null,
    cc6: null,
    cc7: null,
    cc8: null,
  });
  const [originLocation, setOriginLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [froms, setFrom] = useState("");
  const [tos, setTo] = useState("");

  const [vehicleIndex, setVehicleIndex] = useState({
    vehicle1Index: "",
    vehicle2Index: "",
    vehicle3Index: "",
  });
  const [selectedCity, setSelectedCity] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat: 0,
    long: 0,
  });

  let timeoutId;

  const getDatas = async () => {
    setOrderNumberLoader(true);
    const res = await axios.get("https://apml-api-b1.glitch.me/api/v1/get/OrderCount");
    console.log(res);
    setOrderNumberCount(res.data.data);
    setOrderNumberLoader(false);
  };

  const handleLoading = (e) => {
    // Destructuring
    const { name, checked } = e.target;
    if (checked) {
      setLoadingCharges("APML");
    } else {
      setLoadingCharges("SHPL");
    }
  };
  const handleChange = (event) => {
    setSelectedTransportation(event.target.value);
    // Reset selectedAmount when the transportation service changes
    setSelectedAmount('');
  };
  const handleUnloading = (e) => {
    // Destructuring
    const { name, checked } = e.target;
    if (checked) {
      setUnloadingCharges("APML");
    } else {
      setUnloadingCharges("SHPL");
    }
  };
  const handleCcNumberChange = (e) => {
    setCcNumbers({
      ...ccNumbers,
      [e.target.name]: e.target.value,
    });
  };

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
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

    const formattedDateTime = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")} ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    return formattedDateTime;
  };

  //fetching location

  const showRoute = async (e) => {
    const Value = e.target.value;
    clearTimeout(timeoutId); // Clear any previous timeouts
    console.log(Value.length);
    // City?.getAllCities()?.map((city, index) => {
    //   setSuggestions(city.name)
    // })

    // setSuggestions()
    timeoutId = setTimeout(async () => {
      if (Value.length >= 2) {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf6248bb03350ac5bf425fab2182fab129903c&text=${Value}`,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept:
              "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
          },
        };

        axios
          .request(config)
          .then(async (response) => {
            const data = await response.data.features.map((res) => ({
              label: res.properties.label,
              coordinates: res.geometry.coordinates,
            }));
            // const data = City?.getAllCities()?.map((res) => ({
            //   label: res.name,
            //   coordinates: [res.latitude, res.longitude],
            // }));
            // console.log(data, "datadata")
            setSuggestions(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (Value.length <= 1) {
        setSuggestions([]);
      }
    }, 300); // Wait for 300 milliseconds after the user stops typing
    console.log(Suggestions, "Suggestions");
  };
  const handlePlaceSelect = (selectedValue) => {
    if (selectedValue && selectedValue.coordinates) {
      setSelectedCoordinates({
        lat: selectedValue.coordinates[1],
        long: selectedValue.coordinates[0],
      });
      setSelectedCity(selectedValue);
    }
  };

  console.log(selectedCity, "selectedCityselectedCityselectedCity");

  const handleSubmit = async (e) => {
    setloader(true);
    e.preventDefault();

    let dateTime = inputs.pickupdate;
    let date = new Date(dateTime).toString();
    let formattedDate = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    let dateTime1 = inputs.expecteddeliverydate;
    let date1 = new Date(dateTime1);
    let formattedDate1 = date1.toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    var from = "";
    var to = "";
    console.log(inputs, "inputs");
    if ((selectedCity.label && originLocation) || (selectedCity.label && inputs.otherlocation)) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248bb03350ac5bf425fab2182fab129903c&text=${
          originLocation || inputs.otherlocation
        }&sources=openstreetmap&layers=address&boundary.country=IND`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept:
            "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
        },
      };

      let config1 = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248bb03350ac5bf425fab2182fab129903c&text=${selectedCity.label}&sources=openstreetmap&layers=address&boundary.country=IND`,
        headers: {},
      };

      let latlong = await axios
        .request(config)
        .then((response) => {
          setFrom(
            response.data.features[0].geometry.coordinates[0] +
              "," +
              response.data.features[0].geometry.coordinates[1]
          );
          from =
            response.data.features[0].geometry.coordinates[0] +
            "," +
            response.data.features[0].geometry.coordinates[1];
          axios
            .request(config1)
            .then(async (res) => {
              setTo(
                res.data.features[0].geometry.coordinates[0] +
                  "," +
                  res.data.features[0].geometry.coordinates[1]
              );
              to =
                res.data.features[0].geometry.coordinates[0] +
                "," +
                res.data.features[0].geometry.coordinates[1];
              // console.log(from, to, "from to")
              // console.log(froms, tos, "froms tos")
              console.log(from, to, "after openroute api");
              let config = {
                method: "get",
                maxBodyLength: Infinity,
                url: `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf624833f8055ba65e4ca0b09b4e056e4ca312&start=${from}&end=${to}`,
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  Accept:
                    "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
                },
              };
              console.log("after the openroute api");
              console.log(orderNumberCount, "orderNumberCount");

              if (orderNumberCount > 0) {
                let char = ["a", "b", "c"];
                for (let i = 0; i < totalVeh; i++) {
                  let orders = [];
                  let orderNumber = `APML000${orderNumberCount}`;
                  if (totalVeh > 1) {
                    const charIndex = i < char.length ? i : i % char.length;
                    orderNumber += `(${char[charIndex]})`;
                  }
                  var datas = {
                    orderNumber: orderNumber,
                    origin: selectOrigin,
                    from: from,
                    to: to,
                    location:
                      inputs.Origin === "Henkel-Others"
                        ? inputs.otherlocation
                        : selectLocation || "null",
                    vehicletype: veh[i],
                    totalvehicle: totalVeh,
                    transportationservice: inputs.tranportationservice,
                    loadingscope: loadingCharges,
                    unloadingscope: unloadingCharges,
                    orderby: inputs.orderby,
                    pickupdate: new Date(inputs.pickupdate).getTime(),
                    shiptoparty: inputs.shiptoparty,
                    shiptoaddress: inputs.shiptoaddress,
                    destination: selectedCity.label,
                    pincode: inputs.pincode,
                    sonumber: inputs.sonumber,
                    wbscost: inputs.wbscost,
                    shplinstructions: inputs.shplinstructions,
                    material: inputs.material === "Others" ? inputs.othermaterial : inputs.material,
                    expecteddeliverydate: new Date(inputs.expecteddeliverydate).getTime(),
                    // "pmname": inputs.pmname,
                    // "pmnumber": inputs.pmnumber,
                    // "rpmname": inputs.rpmname,
                    // "rpmnumber": inputs.rpmnumber,
                    // "kamname": inputs.kamname,

                    kamnumber: inputs.kamnumber,
                    remark: inputs.remark,
                    cc1: ccNumbers.cc1 || null,
                    cc2: ccNumbers.cc2 || null,
                    cc3: ccNumbers.cc3 || null,
                    cc4: ccNumbers.cc4 || null,
                    cc5: ccNumbers.cc5 || null,
                    cc6: ccNumbers.cc6 || null,
                    cc7: ccNumbers.cc7 || null,
                    cc8: ccNumbers.cc8 || null,
                    customer: "Henkel",
                    mydate: miliseconds,
                  };

                  orders.push(datas);

                  console.log(orders);

                  var obj = {
                    Order: datas,
                    vehicleStatus: "Pending Order",
                    OrderStatus: "Active",
                  };

                  var updatedObject = { ...obj };

                  console.log(updatedObject);

                  let config = {
                    method: "post",
                    maxBodyLength: Infinity,
                    url: "https://apml-api-b1.glitch.me/api/v1/henkel/new",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: updatedObject,
                  };

                  setloader(true);
                  console.log(updatedObject, "updatedObjectupdatedObject");
                  axios
                    .request(config)
                    .then((response) => {
                      alert.success("order send successfully");
                      setloader(false);

                      setInterval(() => {
                        window.location.reload();
                      }, 7000);
                    })
                    .catch((error) => {
                      setloader(false);
                      alert.error("order have not placed");
                    });
                }

                let mailConfig = {
                  method: "post",
                  maxBodyLength: Infinity,
                  // url: 'http://localhost:8000/sendMail',
                  url: "https://apml-api-b1.glitch.me/api/v1/sendMail",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: {
                    sonumber: inputs.sonumber,
                    origin: inputs.Origin,
                    shiptoparty: inputs.shiptoparty,
                    city: selectedCity?.label,
                    material: inputs.material,
                    ordernumber: "APML000" + orderNumberCount,
                    orderby: inputs.orderby,
                    pmname: inputs.pmname,
                    veh: veh,
                    expecteddate: inputs.expecteddeliverydate,
                    wbsnumber: inputs.wbscost,
                    orderdate: convertmilisecond(miliseconds),
                    totalvehicle: totalVeh,
                    location: selectLocation,
                    cc: ccNumbers,
                  },
                };
                axios
                  .request(mailConfig)
                  .then((response) => {
                    console.log("mail send successfully");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                alert.error("Please Try Again");
              }

              axios
                .request(config)
                .then((response) => {
                  // setAllResponse(response.data.features)
                })
                .catch((error) => {
                  // console.log(error);
                });
            })
            .catch((error) => {
              // console.log(error);
              alert.error("order have not placed, please enter city correctly");
            });
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };

  // switch case for origin location select
  const SelectOrigin = (so) => {
    let data = [];
    let selectedLocation = "";

    switch (so) {
      case "Chennai Plant":
        selectedLocation = "Chennai";
        break;
      case "Chennai W/h":
        selectedLocation = "Chennai";
        break;
      case "HAIPL - 3PM Site Viscon":
        selectedLocation = "Chakan";
        break;
      case "HAIPL - Kurkumbh Plant":
        selectedLocation = "Kurkumbh";
        break;
      case "HAIPL - Lonikand, Garuda CDC":
        selectedLocation = "Lonikand";
        break;
      case "HAT - Gurgaon ACCI W/h":
        selectedLocation = "Gurgaon";
        break;
      case "HAT - Kolkatta W/H":
        selectedLocation = "Kolkatta";
        break;
      case "HAT - Gurgaon TCI W/h":
        selectedLocation = "Gurgaon";
        break;
      case "HAT - Jejuri Plant":
        selectedLocation = "Kurkumbh";
        break;
      case "HAT - Kurkumbh Plant":
        selectedLocation = "Kurkumbh";
        break;
      case "HAT - Lonikand W/h":
        selectedLocation = "Lonikand";
        break;
      case "HAT - Rudrapur Plant":
        selectedLocation = "Rudrapur";
        break;
      case "HAT - Vadpe W/h - Domestic":
        selectedLocation = "Bhiwandi";
        break;
      case "HAT - Thane Plant":
        selectedLocation = "Bhiwandi";
        break;

      // case "SHPL-Guwahati- SIEMENS HEALTHCARE PVT.LTD.":
      //   selectedLocation = "Guwahati"
      //   break;

      default:
        break;
    }
    // setOriginLocation(selectLocation)

    data[0] = "Henkel";
    data[1] = so;
    data[2] = "Mumbai";
    data[3] = selectedLocation;

    return data;
  };

  // switch case for amount select

  const amount = (so) => {
    let data = [];
    let selectedAmount = "";

    switch (so) {
      case "Cont 22 FT MA - 16 T":
        selectedAmount = "16000";
        break;
      case "Cont 24 FT MA - 15.5 T":
        selectedAmount = "15500";
        break;
      case "Cont 26 FT MA - 15 T":
        selectedAmount = "15000";
        break;
      case "Cont 28 FT MA - 14.5 T":
        selectedAmount = "14500";
        break;
      case "Cont 30 FT MA - 14.5 T":
        selectedAmount = "14500";
        break;
      case "Cont 32 FT MA - 15 T":
        selectedAmount = "15000";
        break;
      case "Cont 32 FT MA - 18 T":
        selectedAmount = "18000";
        break;
      case "Cont 32 FT MA - 24 T":
        selectedAmount = "24000";
        break;
      case "Cont 32 FT MA - 28 T":
        selectedAmount = "28000";
        break;
      case "Cont 40 FT MA - 20 T":
        selectedAmount = "20000";
        break;
      case "Cont 40 FT MA - 24 T":
        selectedAmount = "24000";
        break;
      case "Cont 40 FT MA - 33 T":
        selectedAmount = "33000";
        break;
      case "Cont 24 FT MA - 24 T":
        selectedAmount = "24000";
        break;
      case "Open Truck SA - 18 FT - 9.1 T":
        selectedAmount = "9100";
        break;
      case "Open Truck SA- 20 FT - 8 T":
        selectedAmount = "8000";
        break;
      case "Open Truck SA- 22 FT - 8.5 T":
        selectedAmount = "8500";
        break;
      case "Open Truck SA- 24 FT - 9 T":
        selectedAmount = "9000";
        break;
      case "Open Truck SA- 26 FT - 8.1 T":
        selectedAmount = "8100";
        break;
      case "Open Truck SA- 28 FT - 7.9 T":
        selectedAmount = "7900";
        break;
      case "Open Truck SA- 30 FT - 6 T":
        selectedAmount = "6000";
        break;
      case "Open Truck SA- 32 FT - 5.8 T":
        selectedAmount = "5800";
        break;
      case "Open Truck SA- 17 FT - 5 T":
        selectedAmount = "5000";
        break;
      case "Open Truck SA- 19 FT - 7 T":
        selectedAmount = "7000";
        break;
      case "Open Truck 24 FT MA - 16 T":
        selectedAmount = "16000";
        break;
      case "Open Truck 26 FT MA - 15 T":
        selectedAmount = "15000";
        break;
      case "Open Truck 28 FT MA - 14.5 T":
        selectedAmount = "14500";
        break;
      case "Open Truck 30 FT MA - 14.5 T":
        selectedAmount = "14500";
        break;
      case "Open Truck 32 FT MA - 15 T":
        selectedAmount = "15000";
        break;
      case "Open Truck 24 FT MA - 21 T":
        selectedAmount = "21000";
        break;
      case "Open Truck 24 FT MA - 18 T":
        selectedAmount = "18000";
        break;
      case "Open Truck 22 FT MA - 16 T":
        selectedAmount = "16000";
        break;
      case "Cont SA - 18 FT - 9 T":
        selectedAmount = "9000";
        break;
      case "Cont SA - 20 FT - 7 T":
        selectedAmount = "7000";
        break;
      case "Cont SA - 22 FT - 8.5 T":
        selectedAmount = "8500";
        break;
      case "Cont SA - 24 FT - 9 T":
        selectedAmount = "9000";
        break;
      case "Cont SA - 26 FT - 8.1 T":
        selectedAmount = "8100";
        break;
      case "Cont SA - 28 FT - 7.9 T":
        selectedAmount = "7900";
        break;
      case "Cont SA - 30 FT - 6 T":
        selectedAmount = "6000";
        break;
      case "Cont SA - 32 FT - 7 T":
        selectedAmount = "7000";
        break;
      case "Cont SA - 14 FT - 3 T":
        selectedAmount = "3000";
        break;
      case "TAT Ace - 0.7 T":
        selectedAmount = "1000";
        break;
      case "Force - 0.8 T":
        selectedAmount = "800";
        break;
      case "TATA 709 - 6 T":
        selectedAmount = "6000";
        break;
      case "TAT 409 - 4.5 T":
        selectedAmount = "4500";
        break;
      case "TATA 407 - 2.5 T":
        selectedAmount = "2500";
        break;
      case "Pick Up - 0.8 T":
        selectedAmount = "800";
        break;
      case "Open Truck SA- 19 FT - 9 T":
        selectedAmount = "9000";
        break;
      case "Cont 1109-5MT(Close Body)":
        selectedAmount = "5000";
        break;
      case "BOLERO-PICKUP-1.5T":
        selectedAmount = "1500";
        break;
      case "Reefer Van 1MT":
        selectedAmount = "1000";
        break;
      case "TATA-Ace EV":
        selectedAmount = "600";
        break;
      case "Prima Double Decker-32MT":
        selectedAmount = "32000";
        break;

      default:
        break;
    }
    // setOriginLocation(selectLocation)

    data[0] = "Henkel";
    data[1] = so;
    data[2] = "Mumbai";
    data[3] = selectedAmount;
    setSelectedAmount(selectedAmount);

    return data;
  };

//   const onMaterialChange = (e) => {
//     const material = e.target.value;
//     console.log(material, "material");

// // switch case to check the material and set the nth vehicle   
//     switch (material) {
//       case "MRI":
//         setTotalVeh(3);
//         setVeh(["SHPL - 20FT AIR SUSPENSION", "SHPL - 20 FT ODC", "SHPL - 20 FT ODC"]);
//         break;
//       case "RF":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//       case "cios fit":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//       case "CT":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//       case "LBO":
//         setTotalVeh(3);
//         setVeh(["SHPL - PICK UP", "SHPL - PICK UP", "SHPL - 17ft VEHICLE"]);
//         break;
//       case "MI":
//         setTotalVeh(3);
//         setVeh(["SHPL - 20FT AIR SUSPENSION", "SHPL - 20 FT ODC", "SHPL - 20 FT ODC"]);
//         break;
//       case "Biograph Horizon":
//         setTotalVeh(3);
//         setVeh(["SHPL - 20FT AIR SUSPENSION", "SHPL - 20 FT ODC", "SHPL - 20 FT ODC"]);
//         break;
//       case "Symbia":
//         setTotalVeh(3);
//         setVeh(["SHPL - 20FT AIR SUSPENSION", "SHPL - 20 FT ODC", "SHPL - 20 FT ODC"]);
//         break;
//       case "Artis":
//         setTotalVeh(2);
//         setVeh(["SHPL - 20 FT ODC", "SHPL - 20 FT ODC"]);
//         break;
//       case "Mammomat":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//       case "Multix":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//       case "Mobilett elara max":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//       case "Yasio max":
//         setTotalVeh(1);
//         setVeh(["SHPL - 20 FT ODC"]);
//         break;
//     }
//   };

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10000);
    }
  };
  //
  console.log(veh, "vehvehvehveh");
  var arr = [veh[0], veh[1], veh[2]];

  const handleVeh1Index = (e) => {
    setVehicleIndex((prevState) => ({
      ...prevState,
      vehicle1Index: true,
    }));
  };

  // const handleVeh2Index = (e) => {
  //   setVehicleIndex((prevState) => ({
  //     ...prevState,
  //     vehicle2Index: true,
  //   }));
  // };
  // const handleVeh3Index = (e) => {
  //   setVehicleIndex((prevState) => ({
  //     ...prevState,
  //     vehicle3Index: true,
  //   }));
  // };
  useEffect(() => {
    var token = sessionStorage.getItem("id");
    if (token) {
      getDatas();
    } else {
      nagivate("/login");
    }
  }, []);

  console.log(orderNumberCount, "orderNumberCountorderNumberCountdd");

  return (
    <>
      {orderNumberLoader ? (
        <Loader />
      ) : (
        <main
          style={{
            backgroundColor: "gray",
            margin: "0",
            padding: "0",
            height: "100vh",
            overflow: "unset",
          }}
        >
          <div className="form-main">
            <div class="form">
              <div class="form_contain">
                <FaWpforms style={{ fill: "white", height: "2rem", width: "2rem" }} />
                <h1>ORDER FORM </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                ref={form}
              >
                <div className="order-form-button">
                  <button
                    className={isAnimating ? "animate order" : "order"}
                    onClick={handleClick}
                  >
                    <span className="default">Complete Order</span>
                    <span className="success">
                      Order Placed
                      <svg viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <div className="box"></div>
                    <div className="truck">
                      <div className="back"></div>
                      <div className="front">
                        <div className="window"></div>
                      </div>
                      <div className="light top"></div>
                      <div className="light bottom"></div>
                    </div>
                    <div className="lines"></div>
                  </button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <div>
                    <div
                      style={{
                        marginTop: "2rem",
                        position: "absolute",
                        bottom: "12%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      margin: "1rem",
                    }}
                  >
                    <div>
                      <label>Origin:</label>
                      <select
                        name="Origin"
                        onChange={(e) => {
                          let data = SelectOrigin(e.target.value);
                          setSelectLocation(data[3]);
                          setSelectOrigin(e.target.value);
                          handleChanges(e);
                          setOriginLocation(data[3]);
                        }}
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="Chennai Plant">Chennai Plant</option>
                        <option value="Chennai W/h">Chennai W/h</option>
                        <option value="HAIPL - 3PM Site Viscon">HAIPL - 3PM Site Viscon</option>
                        <option value="HAIPL - Kurkumbh Plant">HAIPL - Kurkumbh Plant</option>

                        <option value="HAIPL - Lonikand, Garuda CDC">
                          HAIPL - Lonikand, Garuda CDC
                        </option>
                        <option value="HAT - Gurgaon ACCI W/h">HAT - Gurgaon ACCI W/h</option>
                        <option value="HAT - Kolkatta W/H">HAT - Kolkatta W/H</option>
                        <option value="HAT - Gurgaon TCI W/h">HAT - Gurgaon TCI W/h</option>
                        <option value="HAT - Jejuri Plant">HAT - Jejuri Plant</option>
                        <option value="HAT - Kurkumbh Plant">HAT - Kurkumbh Plant</option>
                        <option value="HAT - Lonikand W/h">HAT - Lonikand W/h</option>
                        <option value="HAT - Rudrapur Plant">HAT - Rudrapur Plant</option>
                        <option value="HAT - Vadpe W/h - Domestic">
                          HAT - Vadpe W/h - Domestic
                        </option>
                        <option value="HAT - Thane Plant">HAT - Thane Plant</option>

                        <option value="Henkel-Others">Henkel-Others</option>

                        <option
                          disabled
                          value="Others"
                        >
                          Others
                        </option>
                      </select>
                    </div>

                    {inputs.Origin === "Henkel-Others" && (
                      <div>
                        <label>other location</label>
                        <input
                          type="text"
                          name="otherlocation"
                          id="otherlocation"
                          onChange={handleChanges}
                          required
                        />
                      </div>
                    )}
                    <div>
                      <label>Location :</label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={selectLocation}
                        onChange={handleChanges}
                        disabled
                        required={true}
                      />
                    </div>

                    <div>
                      <label>Transportation Service:</label>
                      <select
                        name="tranportationservice"
                        id="tranportationservice"
                        onChange={handleChange}
                        value={selectedTransportation}
                        required
                      >
                        <option value="">--Select--</option>
                        <option value="FTL">FTL</option>
                        <option value="PTL">PTL</option>
                        {/* <option value="Express">Express</option> */}
                      </select>
                    </div>

                    <div>
                      <label>Total Vehicles:</label>
                      <select
                        name="totalvehicle"
                        id="totalvehicle"
                        value={totalVeh}
                        onChange={(e) => {
                          setTotalVeh(e.target.value);
                        }}
                        required
                      >
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        
                      </select>
                    </div>

                    {totalVeh >= 1 && (
                      <div>
                        <label>Vehicle Type:</label>

                        {/* <div style={{ display: "none" }}>
                          {vehicleIndex.vehicle1Index ? (veh[0] = inputs.v1) : (veh[0] = veh[0])}
                        </div> */}

                        <select
                          name="v1"
                          value={veh[0]}
                          onChange={(e) => {
                            // setVeh([...veh, e.target.value])
                            amount(e.target.value);
                            handleChanges(e);
                            // handleVeh1Change()
                            setVehicleIndex((prevState) => ({ ...prevState, vehicle1Index: true }));
                          }}
                          required
                        >
                          <option value="">--select--</option>
                          <option value="Cont 22 FT MA - 16 T">Cont 22 FT MA - 16 T</option>
                          <option value="Cont 24 FT MA - 15.5 T">Cont 24 FT MA - 15.5 T</option>
                          <option value="Cont 26 FT MA - 15 T">Cont 26 FT MA - 15 T</option>
                          <option value="Cont 28 FT MA - 14.5 T">Cont 28 FT MA - 14.5 T</option>
                          <option value="Cont 30 FT MA - 14.5 T">Cont 30 FT MA - 14.5 T</option>
                          <option value="Cont 32 FT MA - 15 T">Cont 32 FT MA - 15 T</option>
                          <option value="Cont 32 FT MA - 18 T">Cont 32 FT MA - 18 T</option>
                          <option value="Cont 32 FT MA - 24 T">Cont 32 FT MA - 24 T</option>
                          <option value="Cont 32 FT MA - 28 T">Cont 32 FT MA - 28 T</option>
                          <option value="Cont 40 FT MA - 20 T">Cont 40 FT MA - 20 T</option>
                          <option value="Cont 40 FT MA - 24 T">Cont 40 FT MA - 24 T</option>
                          <option value="Cont 40 FT MA - 33 T">Cont 40 FT MA - 33 T</option>
                          <option value="Cont 24 FT MA - 24 T">Cont 24 FT MA - 24 T</option>
                          <option value="Cont 40 FT MA - 33 T">Cont 40 FT MA - 33 T</option>
                          <option value="Open Truck SA - 18 FT - 9.1 T">
                            Open Truck SA - 18 FT - 9.1 T
                          </option>
                          <option value="Open Truck SA- 20 FT - 8 T">
                            Open Truck SA- 20 FT - 8 T
                          </option>
                          <option value="Open Truck SA- 22 FT - 8.5 T">
                            Open Truck SA- 22 FT - 8.5 T
                          </option>
                          <option value="Open Truck SA- 24 FT - 9 T">
                            Open Truck SA- 24 FT - 9 T
                          </option>
                          <option value="Open Truck SA- 26 FT - 8.1 T">
                            Open Truck SA- 26 FT - 8.1 T
                          </option>
                          <option value="Open Truck SA- 28 FT - 7.9 T">
                            Open Truck SA- 28 FT - 7.9 T
                          </option>
                          <option value="Open Truck SA- 30 FT - 6 T">
                            Open Truck SA- 30 FT - 6 T
                          </option>
                          <option value="Open Truck SA- 32 FT - 5.8 T">
                            Open Truck SA- 32 FT - 5.8 T
                          </option>
                          <option value="Open Truck SA- 17 FT - 5 T">
                            Open Truck SA- 17 FT - 5 T
                          </option>
                          <option value="Open Truck SA- 19 FT - 7 T">
                            Open Truck SA- 19 FT - 7 T
                          </option>
                          <option value="Open Truck 24 FT MA - 16 T">
                            Open Truck 24 FT MA - 16 T
                          </option>
                          <option value="Open Truck 26 FT MA - 15 T">
                            Open Truck 26 FT MA - 15 T
                          </option>
                          <option value="Open Truck 28 FT MA - 14.5 T">
                            Open Truck 28 FT MA - 14.5 T
                          </option>
                          <option value="Open Truck 30 FT MA - 14.5 T">
                            Open Truck 30 FT MA - 14.5 T
                          </option>
                          <option value="Open Truck 32 FT MA - 15 T">
                            Open Truck 32 FT MA - 15 T
                          </option>
                          <option value="Open Truck 24 FT MA - 21 T">
                            Open Truck 24 FT MA - 21 T
                          </option>
                          <option value="Open Truck 24 FT MA - 18 T">
                            Open Truck 24 FT MA - 18 T
                          </option>
                          <option value="Open Truck 22 FT MA - 16 T">
                            Open Truck 22 FT MA - 16 T
                          </option>
                          <option value="Cont SA - 18 FT - 9 T">Cont SA - 18 FT - 9 T</option>
                          <option value="Cont SA - 20 FT - 7 T">Cont SA - 20 FT - 7 T</option>
                          <option value="Cont SA - 22 FT - 8.5 T">Cont SA - 22 FT - 8.5 T</option>
                          <option value="Cont SA - 24 FT - 9 T">Cont SA - 24 FT - 9 T</option>
                          <option value="Cont SA - 26 FT - 8.1 T">Cont SA - 26 FT - 8.1 T</option>
                          <option value="Cont SA - 28 FT - 7.9 T">Cont SA - 28 FT - 7.9 T</option>
                          <option value="Cont SA - 30 FT - 6 T">Cont SA - 30 FT - 6 T</option>
                          <option value="Cont SA - 32 FT - 7 T">Cont SA - 32 FT - 7 T</option>
                          <option value="Cont SA - 14 FT - 3 T">Cont SA - 14 FT - 3 T</option>
                          <option value="TAT Ace - 0.7 T">TAT Ace - 0.7 T</option>
                          <option value="Force - 0.8 T">Force - 0.8 T</option>
                          <option value="TATA 709 - 6 T">TATA 709 - 6 T</option>
                          <option value="TAT 409 - 4.5 T">TAT 409 - 4.5 T</option>
                          <option value="TATA 407 - 2.5 T">TATA 407 - 2.5 T</option>
                          <option value="Pick Up - 0.8 T">Pick Up - 0.8 T</option>
                          <option value="Open Truck SA- 19 FT - 9 T">
                            Open Truck SA- 19 FT - 9 T
                          </option>
                          <option value="Cont 1109-5MT(Close Body)">
                            Cont 1109-5MT(Close Body)
                          </option>
                          <option value="BOLERO-PICKUP-1.5T">BOLERO-PICKUP-1.5T</option>
                          <option value="Reefer Van 1MT">Reefer Van 1MT</option>
                          <option value="TATA-Ace EV">TATA-Ace EV</option>
                          <option value="Prima Double Decker-32MT">Prima Double Decker-32MT</option>
                          <option value="PTL">PTL</option>
                        </select>
                      </div>
                    )}
                    {selectedTransportation === 'PTL' && (
                    <div>
                      <label>Capacity</label>
                      <input
                        value={selectedAmount}
                        type="text"
                        onChange={(e) => setSelectedAmount(e.target.value)}
                      />
                    </div>
                    )}

                    <div className="orderform-checkbox-input">
                      <label htmlFor="">Loading Scope:</label>
                      <div className="radio-box">
                        <div className="radio-container">
                          <input
                            type="checkbox"
                            value={loadingCharges}
                            name="APML"
                            id="APML"
                            onClick={handleLoading}
                            style={{
                              backgroundColor: loadingCharges === "APML" ? "green" : "white",
                            }}
                          />
                          <label className="radio-label">APML</label>
                        </div>
                      </div>
                    </div>

                    <div className="orderform-checkbox-input">
                      <label htmlFor="">UnLoading Scope:</label>
                      <div className="radio-box">
                        <div className="radio-container">
                          <input
                            type="checkbox"
                            value={unloadingCharges}
                            name="APML"
                            id="APML"
                            onClick={handleUnloading}
                            style={{
                              backgroundColor: unloadingCharges === "APML" ? "green" : "white",
                            }}
                          />
                          <label className="radio-label">APML</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ flexDirection: "column", margin: "1rem" }}>
                    <div>
                      <label>Order By</label>
                      <select
                        name="orderby"
                        id="orderby"
                        onChange={handleChanges}
                        required
                      >
                        <option value="">--Select--</option>
                        <option value="Adinath Tajne">Adinath Tajne</option>
                        <option value="Aditya Kandharkar">Aditya Kandharkar</option>
                        <option value="Chintamani Mayeka">Chintamani Mayeka</option>
                        <option value="Jayesh Uniyal">Jayesh Uniyal</option>
                        <option value="Sujoy Dey">Sujoy Dey</option>
                        <option value="Mrirani Das">Mrirani Das</option>
                        <option value="Vijay Mahtre">Vijay Mahtre</option>
                        <option value="Sagar kadam">Sagar kadam</option>
                        <option value="Surekha Ghamare">Surekha Ghamare</option>
                        <option value="Arti Rajput">Arti Rajput</option>
                        <option value="Dayanand Naik">Dayanand Naik</option>
                        <option value="Narayanan E">Narayanan E</option>
                        <option value="Urvish Jain">Urvish Jain</option>
                        <option value="Amit Patekar">Amit Patekar</option>
                        <option value="Swati Nandi">Swati Nandi</option>
                        <option value="APML TEST">APML TEST</option>
                      </select>
                    </div>

                    <div>
                      <label>Pickup Date:</label>
                      <input
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                          alignItems: "center",
                        }}
                        type="datetime-local"
                        name="pickupdate"
                        id="pickupdate"
                        value={mypickupdate}
                        onChange={(e) => {
                          setpickupdate(e.target.value);
                          handleChanges(e);
                        }}
                        required
                        className="dark-theme"
                      />
                    </div>

                    <div>
                      <label>Ship to Party</label>
                      <input
                        type="text"
                        name="shiptoparty"
                        id="shiptoparty"
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div>
                      <label>Ship to Address</label>
                      <input
                        type="text"
                        name="shiptoaddress"
                        id="shiptoaddress"
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div>
                      <label>Pincode</label>
                      <input
                        type="number"
                        name="pincode"
                        id="pincode"
                        onChange={handleChanges}
                        required
                      />
                    </div>

                    <div style={{ marginBottom: "34px" }}>
                      <label>City</label>
                      {/* <input
                      type="text"
                      name="city"
                      id="city"
                      onInput={showRoute}
                      option={Suggestions}
                      onChange={(e) => {
                        handleChanges(e)
                        setDestination((values) => ({ ...values, [e.target.name]: e.target.value }))
                        handlePlaceSelect(e.target.value)
                        Autocomplete = "on"
                      }}
                      required
                    /> */}

                      <Autocomplete
                        disablePortal
                        style={{ outline: "none !important", border: "0px !important" }}
                        className="orderform-destination-input-1 autocomplete-destination"
                        id="autocompleteinput"
                        name="autocompleteinput"
                        options={city}
                        onInput={showRoute}
                        value={selectedCity?.label}
                        // value="pune"
                        onChange={(event, value) => {
                          handlePlaceSelect(value);
                          handleChanges(event);
                          setDestination((values) => ({ ...values, [event.target.name]: value }));
                        }}
                        sx={{ minWidth: 300, margin: 0, padding: 0 }}
                        renderInput={(params) => (
                          // console.log(params,"paramsparams")
                          <TextField
                            sx={{ minWidth: 300, margin: 0, padding: 0 }}
                            {...params}
                            style={{
                              outline: "none",
                              border: "0px",
                              minWidth: "300px",
                              maxWidth: "300px",
                              minHeight: "45px",
                              maxHeight: "45px",
                              padding: "0px !important",
                            }}
                            id="city"
                            name="city"
                            value={selectedCity?.label}
                            // value="pune"
                            onChange={(e) => {
                              handleChanges(e);
                              setDestination((values) => ({
                                ...values,
                                [e.target.name]: e.target.value,
                              }));
                            }}
                            required
                            className="orderform-destination-input-2"
                          />
                        )}
                        required
                      />
                      {console.log(destination, "destinationdestination")}
                    </div>

                    {/* <div>
                        <label>S.O Number/PO:</label>
                        <input
                          type="text"
                          name="sonumber"
                          id="sonumber"
                          onChange={handleChanges}
                          required
                        />
                      </div>
                      <div>
                        <label>WBS/COST:</label>
                        <input
                          type="text"
                          name="wbscost"
                          id="wbscost"
                          onChange={handleChanges}
                          required
                        />
                      </div> */}
                  </div>
                  <div style={{ flexDirection: "row", margin: "1rem" }}>
                    <div>
                      <label>Material</label>
                      <select
                        name="material"
                        onChange={(e) => {
                          handleChanges(e);
                          // onMaterialChange(e);
                        }}
                        required
                      >
                        <option value="">--Select--</option>
                        <option value="Drum/ Barell">Drum/ Barell</option>
                        <option value="Bags">Bags</option>
                        <option value="Box">Box</option>
                        <option value="Carboy">Carboy</option>
                        <option value="Bucket">Bucket</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    {inputs.material === "Others" && (
                      <div>
                        <label htmlFor="othermaterial">Other Material</label>
                        <input
                          type="text"
                          id="othermaterial"
                          name="othermaterial"
                          onChange={handleChanges}
                          required
                        />
                      </div>
                    )}

                    <div>
                      <label>Expected Delivery Date:</label>
                      <input
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                          alignItems: "center",
                        }}
                        type="datetime-local"
                        name="expecteddeliverydate"
                        id="expecteddeliverydate"
                        value={myexpecteddeliverydate}
                        onChange={(e) => {
                          setexpecteddeliverydate(e.target.value);
                          handleChanges(e);
                        }}
                        required
                        className="dark-theme"
                      />
                    </div>

                    {/* <div>
                        <label>PM Name</label>
                        <input
                          type="text"
                          name="pmname"
                          id="pmname"
                          onChange={handleChanges}
                          required
                        />
                      </div> */}

                    {/* <div>
                        <label>PM Number</label>
                        <input
                          type="text"
                          name="pmnumber"
                          id="pmnumber"
                          onChange={handleChanges}
                          required
                          maxLength="10"
                        />
                      </div>

                      <div>
                        <label htmlFor="rpmname">RPM Name</label>
                        <input type="text" id="rpmname" name="rpmname" onChange={handleChanges} required />
                      </div>

                      <div>
                        <label htmlFor="rpmnumber">RPM Number</label>
                        <input type="text" id="rpmnumber" name="rpmnumber" onChange={handleChanges} required maxLength="10" />
                      </div>

                      <div>
                        <label htmlFor="kamname">KAM Name</label>
                        <input type="text" id="kamname" name="kamname" onChange={handleChanges} required />
                      </div>

                      <div>
                        <label htmlFor="kamnumber">KAM Number</label>
                        <input type="text" id="kamnumber" name="kamnumber" onChange={handleChanges} required maxLength="10" />
                      </div> */}
                  </div>

                  <div style={{ flexDirection: "row", margin: "1rem" }}>
                    <div>
                      <label>Number of CC numbers:</label>
                      <select
                        name="noofcc"
                        id="noofcc"
                        onChange={handleChanges}
                        required
                      >
                        <option value="">--Select--</option>
                        {/* <option>-- Select --</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                    {inputs.noofcc >= 1 && (
                      <div>
                        <label htmlFor="cc1">CC no.1</label>
                        <input
                          type="text"
                          name="cc1"
                          id="cc1"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 2 && (
                      <div>
                        <label htmlFor="cc2">CC no.2</label>
                        <input
                          type="text"
                          name="cc2"
                          id="cc2"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 3 && (
                      <div>
                        <label htmlFor="cc3">CC no.3</label>
                        <input
                          type="text"
                          name="cc3"
                          id="cc3"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 4 && (
                      <div>
                        <label htmlFor="cc4">CC no.4</label>
                        <input
                          type="text"
                          name="cc4"
                          id="cc4"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 5 && (
                      <div>
                        <label htmlFor="cc5">CC no.5</label>
                        <input
                          type="text"
                          name="cc5"
                          id="cc5"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 6 && (
                      <div>
                        <label htmlFor="cc6">CC no.6</label>
                        <input
                          type="text"
                          name="cc6"
                          id="cc6"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 7 && (
                      <div>
                        <label htmlFor="cc7">CC no.7</label>
                        <input
                          type="text"
                          name="cc7"
                          id="cc7"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                    {inputs.noofcc >= 8 && (
                      <div>
                        <label htmlFor="cc8">CC no.8</label>
                        <input
                          type="text"
                          name="cc8"
                          id="cc8"
                          onChange={handleCcNumberChange}
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="submit-class">
                    {/* {isLoading && (
                    <div style={{ minWidth: "100%", maxWidth: "100%" }}>
                      <div className="Tq_msg" style={{ position: "relative" }}>
                        <h1>THANK YOU</h1>
                      </div>
                      <div className="celebration" style={{ position: "" }}>
                        <svg
                          width="100%"
                          height="90"
                          viewBox="0 0 600 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="42" y="0" width="10" height="20" />
                          <rect x="84" y="0" width="10" height="20" />
                          <rect x="126" y="0" width="10" height="23" />
                          <rect x="168" y="0" width="10" height="23" />
                          <rect x="210" y="0" width="10" height="20" />
                          <rect x="252" y="0" width="10" height="23" />
                          <rect x="294" y="0" width="10" height="20" />
                          <rect x="336" y="0" width="10" height="23" />
                          <rect x="378" y="0" width="10" height="23" />
                          <rect x="420" y="0" width="10" height="20" />
                          <rect x="462" y="0" width="10" height="20" />
                          <rect x="504" y="0" width="10" height="23" />
                          <rect x="546" y="0" width="10" height="20" />
                        </svg>
                      </div>
                    </div>
                  )} */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
