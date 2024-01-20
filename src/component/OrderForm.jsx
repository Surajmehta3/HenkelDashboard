import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { FaWpforms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Button.scss'
import { useAlert } from 'react-alert';
import { Autocomplete, TextField } from "@mui/material";
import Loader from './Loader'


export default function OrderForm() {
  const alert = useAlert()
  const form = useRef()
  const date = new Date()
  const miliseconds = date.getTime(date)
  const nagivate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [totalVeh, setTotalVeh] = useState(0);
  const [veh, setVeh] = useState([]);
  const [selectLocation, setSelectLocation] = useState('')
  const [selectOrigin, setSelectOrigin] = useState("")
  const [loadingCharges, setLoadingCharges] = useState('shpl')
  const [unloadingCharges, setUnloadingCharges] = useState('shpl')
  const [loader, setloader] = useState(false)
  const [orderNumberLoader, setOrderNumberLoader] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false);
  const [myexpecteddeliverydate, setexpecteddeliverydate] = useState("")
  const [mypickupdate, setpickupdate] = useState("")
  const [orderNumberCount, setOrderNumberCount] = useState([])
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
  const [originLocation, setOriginLocation] = useState('')
  const [destination, setDestination] = useState('')
  const [froms, setFrom] = useState('')
  const [tos, setTo] = useState('')
  const [vehicleIndex, setVehicleIndex] = useState({
    vehicle1Index: "",
    vehicle2Index: "",
    vehicle3Index: ""
  })
  const [selectedCity, setSelectedCity] = useState('')
  const [Suggestions, setSuggestions] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    lat: 0,
    long: 0,
  });

  let timeoutId;

  const getDatas = async () => {
    setOrderNumberLoader(true)
    const res = await axios.get('https://apml-api-b1.glitch.me/api/v1/get/OrderCount')
    console.log(res)
    setOrderNumberCount(res.data.data)
    setOrderNumberLoader(false)
  }


  const handleLoading = (e) => {
    // Destructuring
    const { name, checked } = e.target;
    if (checked) {
      setLoadingCharges("APML")
    } else {
      setLoadingCharges("SHPL")
    }
  }

  const handleUnloading = (e) => {
    // Destructuring
    const { name, checked } = e.target;
    if (checked) {
      setUnloadingCharges("APML")
    } else {
      setUnloadingCharges("SHPL")
    }
  }
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

    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedDateTime
  }

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
          url: `https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf624833f8055ba65e4ca0b09b4e056e4ca312&text=${Value}`,
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
    console.log(Suggestions, "Suggestions")

  };
  const handlePlaceSelect = (selectedValue) => {
    if (selectedValue && selectedValue.coordinates) {
      setSelectedCoordinates({
        lat: selectedValue.coordinates[1],
        long: selectedValue.coordinates[0],
      });
      setSelectedCity(selectedValue)
    }
  };

  console.log(selectedCity, "selectedCityselectedCityselectedCity")


  const handleSubmit = async (e) => {
    setloader(true)
    e.preventDefault()

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

    var from = ''
    var to = ''
    console.log(inputs, "inputs")
    if ((selectedCity.label && originLocation) || (selectedCity.label && inputs.otherlocation)) {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248ed357b29603f4e119a8055322e0e3ae5&text=${originLocation || inputs.otherlocation}&sources=openstreetmap&layers=address&boundary.country=IND`,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
        }
      };

      let config1 = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248ed357b29603f4e119a8055322e0e3ae5&text=${selectedCity.label}&sources=openstreetmap&layers=address&boundary.country=IND`,
        headers: {}
      };


      let latlong = await axios.request(config).then((response) => {
        setFrom(response.data.features[0].geometry.coordinates[0] + "," + response.data.features[0].geometry.coordinates[1])
        from = (response.data.features[0].geometry.coordinates[0] + "," + response.data.features[0].geometry.coordinates[1])
        axios.request(config1).then(async (res) => {
          setTo(res.data.features[0].geometry.coordinates[0] + "," + res.data.features[0].geometry.coordinates[1])
          to = (res.data.features[0].geometry.coordinates[0] + "," + res.data.features[0].geometry.coordinates[1])
          // console.log(from, to, "from to")
          // console.log(froms, tos, "froms tos")
          console.log(from, to, "after openroute api")
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf624833f8055ba65e4ca0b09b4e056e4ca312&start=${from}&end=${to}`,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }
          };
          console.log("after the openroute api")
          console.log(orderNumberCount, "orderNumberCount")

          if (orderNumberCount > 0) {
            let char = ["a", "b", "c"]
            for (let i = 0; i < totalVeh; i++) {
              let orders = []
              let orderNumber = `APML000${orderNumberCount}`;
              if (totalVeh > 1) {
                const charIndex = i < char.length ? i : i % char.length;
                orderNumber += `(${char[charIndex]})`;
              }
              var datas = {
                "orderNumber": orderNumber,
                "origin": selectOrigin,
                "from": from,
                "to": to,
                "location": inputs.Origin === "SHPL-Others" ? inputs.otherlocation : selectLocation || "null",
                "vehicletype": veh[i],
                "totalvehicle": totalVeh,
                "transportationservice": inputs.tranportationservice,
                "loadingscope": loadingCharges,
                "unloadingscope": unloadingCharges,
                "orderby": inputs.orderby,
                "pickupdate": new Date(inputs.pickupdate).getTime(),
                "shiptoparty": inputs.shiptoparty,
                "shiptoaddress": inputs.shiptoaddress,
                "destination": selectedCity.label,
                "pincode": inputs.pincode,
                "sonumber": inputs.sonumber,
                "wbscost": inputs.wbscost,
                "shplinstructions": inputs.shplinstructions,
                "material": inputs.material === "Others" ? inputs.othermaterial : inputs.material,
                "expecteddeliverydate": new Date(inputs.expecteddeliverydate).getTime(),
                // "pmname": inputs.pmname,
                // "pmnumber": inputs.pmnumber,
                // "rpmname": inputs.rpmname,
                // "rpmnumber": inputs.rpmnumber,
                // "kamname": inputs.kamname,
                "kamnumber": inputs.kamnumber,
                "remark": inputs.remark,
                "cc1": ccNumbers.cc1 || null,
                "cc2": ccNumbers.cc2 || null,
                "cc3": ccNumbers.cc3 || null,
                "cc4": ccNumbers.cc4 || null,
                "cc5": ccNumbers.cc5 || null,
                "cc6": ccNumbers.cc6 || null,
                "cc7": ccNumbers.cc7 || null,
                "cc8": ccNumbers.cc8 || null,
                "customer": "Henkel",
                "mydate": miliseconds,
              }

              orders.push(datas)

              console.log(orders)

              var obj = {
                Order: datas,
                "vehicleStatus": "Pending Order",
                OrderStatus: "Active"
              };

              var updatedObject = { ...obj };

              console.log(updatedObject)

              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://apml-api-b1.glitch.me/api/v1/henkel/new',
                headers: {
                  'Content-Type': 'application/json'
                },
                data: updatedObject

              };

              setloader(true)
              console.log(updatedObject, "updatedObjectupdatedObject")
              axios.request(config)
                .then((response) => {
                  alert.success("order send successfully")
                  setloader(false)

                  setInterval(() => {
                    window.location.reload()
                  }, 7000);
                })
                .catch((error) => {
                  setloader(false)
                  alert.error('order have not placed')
                });
            }

            let mailConfig = {
              method: 'post',
              maxBodyLength: Infinity,
              // url: 'http://localhost:8000/sendMail',
              url: 'https://apml-api-b1.glitch.me/api/v1/sendMail',
              headers: {
                'Content-Type': 'application/json'
              },
              data: {
                sonumber: inputs.sonumber,
                origin: inputs.Origin,
                shiptoparty: inputs.shiptoparty,
                city: selectedCity?.label,
                material: inputs.material,
                ordernumber: 'APML000' + orderNumberCount,
                orderby: inputs.orderby,
                pmname: inputs.pmname,
                veh: veh,
                expecteddate: inputs.expecteddeliverydate,
                wbsnumber: inputs.wbscost,
                orderdate: convertmilisecond(miliseconds),
                totalvehicle: totalVeh,
                location: selectLocation,
                cc: ccNumbers
              }
            }
            axios.request(mailConfig).then((response) => {
              console.log('mail send successfully')
            }).catch((error) => {
              console.log(error)
            })
          } else {
            alert.error('Please Try Again')
          }


          axios.request(config)
            .then((response) => {
              // setAllResponse(response.data.features)
            })
            .catch((error) => {
              // console.log(error);
            });

        })
          .catch((error) => {
            // console.log(error);
            alert.error('order have not placed, please enter city correctly')
          });
      })
        .catch((error) => {
          // console.log(error);
        });
    }
  }

  // switch case for origin location select
  const SelectOrigin = (so) => {
    let data = []
    let selectedLocation = ""

    switch (so) {
      case "SHPL-GURGAON HARIYANA-SEIMENS HEALTHCARE PVT. LTD.":
        selectedLocation = "Gurgaon"
        break;
      case "SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "KOLKATA AIRPORT"
        break;
      case "SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Chennai Port"
        break;
      case "SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Delhi"
        break;
      case "SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Bhiwandi"
        break;
      case "SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Bangalore"
        break;
      case "SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Chennai"
        break;
      case "SHPL- Hyderabad - SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Hyderabad"
        break;
      case "SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Kolkata"
        break;
      case "SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Bangalore"
        break;
      case "SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Chennai"
        break;
      case "SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Delhi"
        break;
      case "SHPL - NHAVA SHEVA- SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Navi Mumbai"
        break;
      case "SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Kolkata"
        break;
      case "SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD":
        selectedLocation = "Chennai"
        break;
      case "SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD":
        selectedLocation = "Bhiwandi"
        break;
      case "SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Bangalore"
        break;
      case "SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Navi Mumbai"
        break;
      case "SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Mumbai"
        break;
      case "SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.":
        selectedLocation = "Vasai"
        break;
      case "SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD":
        selectedLocation = "Bhiwandi"
        break;

      case "SHPL-Banglore-Factory-SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Banglore"
        break;

      case "shpl-Mumbai-Parel-Siemens Healthcare Pvt Ltd":
        selectedLocation = "Parel"
        break;

      case "SHPL-Guwahati- SIEMENS HEALTHCARE PVT.LTD.":
        selectedLocation = "Guwahati"
        break;

      default:
        break;
    };
    // setOriginLocation(selectLocation)

    data[0] = "Henkel";
    data[1] = so;
    data[2] = "Mumbai";
    data[3] = selectedLocation

    return data;
  }

  const onMaterialChange = (e) => {
    const material = e.target.value;
    console.log(material, "material");

    // switch case to check the material and set the nth vehicle
    switch (material) {
      case "MRI":
        setTotalVeh(3);
        setVeh([
          "SHPL - 20FT AIR SUSPENSION",
          "SHPL - 20 FT ODC",
          "SHPL - 20 FT ODC",
        ]);
        break;
      case "RF":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
      case "cios fit":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
      case "CT":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
      case "LBO":
        setTotalVeh(3);
        setVeh(["SHPL - PICK UP", "SHPL - PICK UP", "SHPL - 17ft VEHICLE"]);
        break;
      case "MI":
        setTotalVeh(3);
        setVeh([
          "SHPL - 20FT AIR SUSPENSION",
          "SHPL - 20 FT ODC",
          "SHPL - 20 FT ODC",
        ]);
        break;
      case "Biograph Horizon":
        setTotalVeh(3);
        setVeh([
          "SHPL - 20FT AIR SUSPENSION",
          "SHPL - 20 FT ODC",
          "SHPL - 20 FT ODC",
        ]);
        break;
      case "Symbia":
        setTotalVeh(3);
        setVeh([
          "SHPL - 20FT AIR SUSPENSION",
          "SHPL - 20 FT ODC",
          "SHPL - 20 FT ODC",
        ]);
        break;
      case "Artis":
        setTotalVeh(2);
        setVeh(["SHPL - 20 FT ODC", "SHPL - 20 FT ODC"]);
        break;
      case "Mammomat":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
      case "Multix":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
      case "Mobilett elara max":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
      case "Yasio max":
        setTotalVeh(1);
        setVeh(["SHPL - 20 FT ODC"]);
        break;
    }
  };

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10000);
    }
  };
  // 
  console.log(veh, "vehvehvehveh")
  var arr = [veh[0], veh[1], veh[2]]


  const handleVeh1Index = (e) => {
    setVehicleIndex((prevState) => ({
      ...prevState, vehicle1Index: true
    }))
  }

  const handleVeh2Index = (e) => {
    setVehicleIndex((prevState) => ({
      ...prevState, vehicle2Index: true
    }))
  }
  const handleVeh3Index = (e) => {
    setVehicleIndex((prevState) => ({
      ...prevState, vehicle3Index: true
    }))
  }
  useEffect(() => {
    var token = sessionStorage.getItem("id")
    if (token) {
      getDatas()
    } else {
      nagivate("/login")
    }

  }, []);

  console.log(orderNumberCount, "orderNumberCountorderNumberCountdd")

  return (
    <>
      {
        orderNumberLoader ?
          <Loader />
          :

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
                  <FaWpforms
                    style={{ fill: "white", height: "2rem", width: "2rem" }}
                  />
                  <h1>ORDER FORM </h1>
                </div>
                <form
                  onSubmit={handleSubmit}
                  ref={form}
                >
                  <div className='order-form-button'>
                    <button className={isAnimating ? 'animate order' : 'order'}
                      onClick={handleClick}><span className="default">Complete Order</span><span className="success">Order Placed
                        <svg viewBox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg></span>
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
                            setSelectOrigin(e.target.value)
                            handleChanges(e)
                            setOriginLocation(data[3])
                          }}
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="SHPL-GURGAON HARIYANA-SEIMENS HEALTHCARE PVT. LTD.">
                            SHPL-GURGAON HARIYANA-SEIMENS HEALTHCARE PVT. LTD.
                          </option>
                          <option value="SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD">
                            SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD
                          </option>
                          <option value="SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD">
                            SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD
                          </option>
                          <option value="SHPL- Hyderabad - SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL- Hyderabad - SIEMENS HEALTHCARE PVT.LTD.
                          </option>

                          <option value="SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD">
                            SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD
                          </option>
                          <option value="SHPL - NHAVA SHEVA- SIEMENS HEALTHCARE PVT LTD">
                            SHPL - NHAVA SHEVA- SIEMENS HEALTHCARE PVT LTD
                          </option>
                          <option value="SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD">
                            SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD.
                          </option>
                          <option value="SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.">
                            SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT.
                            LTD.
                          </option>
                          <option value="SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD">
                            SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT
                            LTD
                          </option>
                          <option value="SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD">
                            SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD
                          </option>
                          <option value="SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.
                          </option>

                          <option value="SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.
                          </option>
                          <option value="SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.
                          </option>

                          <option value="SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.
                          </option>

                          <option value="SHPL-Banglore-Factory-SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-Banglore-Factory-SIEMENS HEALTHCARE PVT.LTD.
                          </option>

                          <option value="shpl-Mumbai-Parel-Siemens Healthcare Pvt Ltd">
                            shpl-Mumbai-Parel-Siemens Healthcare Pvt Ltd
                          </option>

                          <option value="SHPL-Guwahati- SIEMENS HEALTHCARE PVT.LTD.">
                            SHPL-Guwahati- SIEMENS HEALTHCARE PVT.LTD.
                          </option>

                          <option value="SHPL-Others">
                            SHPL-Others
                          </option>

                          <option disabled value="Others">
                            Others
                          </option>
                        </select>
                      </div>

                      {inputs.Origin === "SHPL-Others" && (
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
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>

                      {totalVeh >= 1 && (
                        <div>
                          <label>Vehicle Type:</label>

                          <div style={{ display: "none" }}>
                            {vehicleIndex.vehicle1Index ? veh[0] = inputs.v1 : veh[0] = veh[0]}
                          </div>

                          <select
                            name="v1"
                            value={veh[0]}
                            onChange={(e) => {
                              // setVeh([...veh, e.target.value])
                              handleChanges(e)
                              // handleVeh1Change()
                              setVehicleIndex((prevState) => ({ ...prevState, vehicle1Index: true }))
                            }}
                            required
                          >
                            <option value="">--select--</option>
                            <option value="SHPL - 20 FT ODC">20 FT ODC</option>
                            <option value="SHPL - 20FT AIR SUSPENSION">
                              20FT AIR SUSPENSION
                            </option>
                            <option value="SHPL - 17ft VEHICLE">
                              17ft VEHICLE
                            </option>
                            <option value="SHPL - PICK UP">PICK UP</option>
                            <option value="SHPL - 24 FT PLATFORM">
                              24 FT PLATFORM
                            </option>
                            <option value="SHPL - 32 FT PLATFORM">
                              32 FT PLATFORM
                            </option>
                            <option value="SHPL - 40 FT TRAILER">
                              40 FT TRAILER
                            </option>
                            <option value="SHPL - 50 FT TRAILER">
                              50 FT TRAILER
                            </option>
                            <option value="SHPL - 20 FT TRAILER">
                              20 FT TRAILER
                            </option>
                            <option value="SHPL - 40 FT AIR SUSPENSION">
                              40 FT AIR SUSPENSION
                            </option>
                            <option value="14 FT/CONTAINER REGULAR/SA">
                              14 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="16 FT/CONTAINER REGULAR/SA">
                              16 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="16 FT/OPEN BODY/SA">
                              16 FT/OPEN BODY/SA
                            </option>
                            <option value="16 FT/PLATFORM REGULAR/SA">
                              16 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="18 FT/CONTAINER REGULAR/SA/LPT 1613">
                              18 FT/CONTAINER REGULAR/SA/LPT 1613
                            </option>
                            <option value="19 FT/CONTAINER REGULAR/SA">
                              19 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="19 FT/OPEN BODY/SA">
                              19 FT/OPEN BODY/SA
                            </option>
                            <option value="20 FT/CAR CARRIER /SA">
                              20 FT/CAR CARRIER /SA
                            </option>
                            <option value="20 FT/CONTAINER REGULAR/SA">
                              20 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="20 FT/PLATFORM REGULAR/SA">
                              20 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="22 FT/OPEN TAURAS/DA">
                              22 FT/OPEN TAURAS/DA
                            </option>
                            <option value="24 FT/CAR CARRIER /SA">
                              24 FT/CAR CARRIER /SA
                            </option>
                            <option value="24 FT/CONTAINER REGULAR/DA">
                              24 FT/CONTAINER REGULAR/DA
                            </option>
                            <option value="24 FT/CONTAINER REGULAR/SA">
                              24 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="24 FT/OPEN BODY/DA">
                              24 FT/OPEN BODY/DA
                            </option>
                            <option value="24 FT/OPEN TAURAS/DA">
                              24 FT/OPEN TAURAS/DA
                            </option>
                            <option value="24 FT/PLATFORM REGULAR/SA">
                              24 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="24Ft SXL (P) Air Suspension">
                              24Ft SXL (P) Air Suspension
                            </option>
                            <option value="28 FT/PLATFORM REGULAR/DA">
                              28 FT/PLATFORM REGULAR/DA
                            </option>
                            <option value="28 FT/PLATFORM REGULAR/SA">
                              28 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="32 FT/ PLATFORM / SA">
                              32 FT/ PLATFORM / SA
                            </option>
                            <option value="32 FT/CAR CARRIER TK-5/SA">
                              32 FT/CAR CARRIER TK-5/SA
                            </option>
                            <option value="32 FT/CONTAINER REGULAR/DA">
                              32 FT/CONTAINER REGULAR/DA
                            </option>
                            <option value="32 FT/CONTAINER REGULAR/SA">
                              32 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="32 FT/PLATFORM REGULAR/DA">
                              32 FT/PLATFORM REGULAR/DA
                            </option>
                            <option value="32 FT/PLATFORM REGULAR/DA/FOUZI SCHEME">
                              32 FT/PLATFORM REGULAR/DA/FOUZI SCHEME
                            </option>
                            <option value="40 FT/TRAILER FLAT BED/DA">
                              40 FT/TRAILER FLAT BED/DA
                            </option>
                            <option value="40 FT/TRAILER FLAT BED/TA">
                              40 FT/TRAILER FLAT BED/TA
                            </option>
                            <option value="40 FT/TRAILER SEMI BED">
                              40 FT/TRAILER SEMI BED
                            </option>
                            <option value="40FT HB">40FT HB</option>
                            <option value="40FT SB">40FT SB</option>
                            <option value="40FT SXL (C)">40FT SXL (C)</option>
                            <option value="48FT HB">48FT HB</option>
                          </select>
                        </div>
                      )}
                      {totalVeh >= 2 && (
                        <div>
                          <label>Vehicle Type:</label>

                          <div style={{ display: "none" }}>
                            {vehicleIndex.vehicle2Index ? veh[1] = inputs.v2 : veh[1] = veh[1]}
                          </div>

                          <select
                            name="v2"
                            value={veh[1]}
                            onChange={(e) => {
                              setVehicleIndex((prevState) => ({ ...prevState, vehicle2Index: true }))
                              handleChanges(e)
                            }}
                            required
                          >
                            <option value="SHPL - 20 FT ODC">20 FT ODC</option>
                            <option value="SHPL - 20FT AIR SUSPENSION">
                              20FT AIR SUSPENSION
                            </option>
                            <option value="SHPL - 17ft VEHICLE">
                              17ft VEHICLE
                            </option>
                            <option value="SHPL - PICK UP">PICK UP</option>
                            <option value="SHPL - 24 FT PLATFORM">
                              24 FT PLATFORM
                            </option>
                            <option value="SHPL - 32 FT PLATFORM">
                              32 FT PLATFORM
                            </option>
                            <option value="SHPL - 40 FT TRAILER">
                              40 FT TRAILER
                            </option>
                            <option value="SHPL - 20 FT TRAILER">
                              20 FT TRAILER
                            </option>
                            <option value="SHPL - 40 FT AIR SUSPENSION">
                              40 FT AIR SUSPENSION
                            </option>
                            <option value="SHPL - 50 FT TRAILER">
                              50 FT TRAILER
                            </option>
                            <option value="14 FT/CONTAINER REGULAR/SA">
                              14 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="16 FT/CONTAINER REGULAR/SA">
                              16 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="16 FT/OPEN BODY/SA">
                              16 FT/OPEN BODY/SA
                            </option>
                            <option value="16 FT/PLATFORM REGULAR/SA">
                              16 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="18 FT/CONTAINER REGULAR/SA/LPT 1613">
                              18 FT/CONTAINER REGULAR/SA/LPT 1613
                            </option>
                            <option value="19 FT/CONTAINER REGULAR/SA">
                              19 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="19 FT/OPEN BODY/SA">
                              19 FT/OPEN BODY/SA
                            </option>
                            <option value="20 FT/CAR CARRIER /SA">
                              20 FT/CAR CARRIER /SA
                            </option>
                            <option value="20 FT/CONTAINER REGULAR/SA">
                              20 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="20 FT/PLATFORM REGULAR/SA">
                              20 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="22 FT/OPEN TAURAS/DA">
                              22 FT/OPEN TAURAS/DA
                            </option>
                            <option value="24 FT/CAR CARRIER /SA">
                              24 FT/CAR CARRIER /SA
                            </option>
                            <option value="24 FT/CONTAINER REGULAR/DA">
                              24 FT/CONTAINER REGULAR/DA
                            </option>
                            <option value="24 FT/CONTAINER REGULAR/SA">
                              24 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="24 FT/OPEN BODY/DA">
                              24 FT/OPEN BODY/DA
                            </option>
                            <option value="24 FT/OPEN TAURAS/DA">
                              24 FT/OPEN TAURAS/DA
                            </option>
                            <option value="24 FT/PLATFORM REGULAR/SA">
                              24 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="24Ft SXL (P) Air Suspension">
                              24Ft SXL (P) Air Suspension
                            </option>
                            <option value="28 FT/PLATFORM REGULAR/DA">
                              28 FT/PLATFORM REGULAR/DA
                            </option>
                            <option value="28 FT/PLATFORM REGULAR/SA">
                              28 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="32 FT/ PLATFORM / SA">
                              32 FT/ PLATFORM / SA
                            </option>
                            <option value="32 FT/CAR CARRIER TK-5/SA">
                              32 FT/CAR CARRIER TK-5/SA
                            </option>
                            <option value="32 FT/CONTAINER REGULAR/DA">
                              32 FT/CONTAINER REGULAR/DA
                            </option>
                            <option value="32 FT/CONTAINER REGULAR/SA">
                              32 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="32 FT/PLATFORM REGULAR/DA">
                              32 FT/PLATFORM REGULAR/DA
                            </option>
                            <option value="32 FT/PLATFORM REGULAR/DA/FOUZI SCHEME">
                              32 FT/PLATFORM REGULAR/DA/FOUZI SCHEME
                            </option>
                            <option value="40 FT/TRAILER FLAT BED/DA">
                              40 FT/TRAILER FLAT BED/DA
                            </option>
                            <option value="40 FT/TRAILER FLAT BED/TA">
                              40 FT/TRAILER FLAT BED/TA
                            </option>
                            <option value="40 FT/TRAILER SEMI BED">
                              40 FT/TRAILER SEMI BED
                            </option>
                            <option value="40FT HB">40FT HB</option>
                            <option value="40FT SB">40FT SB</option>
                            <option value="40FT SXL (C)">40FT SXL (C)</option>
                            <option value="48FT HB">48FT HB</option>
                          </select>
                        </div>
                      )}
                      {totalVeh >= 3 && (
                        <div>
                          <label>Vehicle Type:</label>

                          <div style={{ display: "none" }}>
                            {vehicleIndex.vehicle3Index ? veh[2] = inputs.v3 : veh[2] = veh[2]}
                          </div>

                          <select
                            name="v3"
                            value={veh[2]}
                            onChange={(e) => {
                              setVehicleIndex((prevState) => ({ ...prevState, vehicle3Index: true }))
                              handleChanges(e)
                            }}
                            required
                          >
                            <option value="">--select--</option>
                            <option value="SHPL - 20 FT ODC">20 FT ODC</option>
                            <option value="SHPL - 20FT AIR SUSPENSION">
                              20FT AIR SUSPENSION
                            </option>
                            <option value="SHPL - 17ft VEHICLE">
                              17ft VEHICLE
                            </option>
                            <option value="SHPL - PICK UP">PICK UP</option>
                            <option value="SHPL - 24 FT PLATFORM">
                              24 FT PLATFORM
                            </option>
                            <option value="SHPL - 32 FT PLATFORM">
                              32 FT PLATFORM
                            </option>
                            <option value="SHPL - 40 FT TRAILER">
                              40 FT TRAILER
                            </option>
                            <option value="SHPL - 20 FT TRAILER">
                              20 FT TRAILER
                            </option>
                            <option value="SHPL - 40 FT AIR SUSPENSION">
                              40 FT AIR SUSPENSION
                            </option>
                            <option value="SHPL - 50 FT TRAILER">
                              50 FT TRAILER
                            </option>
                            <option value="14 FT/CONTAINER REGULAR/SA">
                              14 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="16 FT/CONTAINER REGULAR/SA">
                              16 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="16 FT/OPEN BODY/SA">
                              16 FT/OPEN BODY/SA
                            </option>
                            <option value="16 FT/PLATFORM REGULAR/SA">
                              16 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="18 FT/CONTAINER REGULAR/SA/LPT 1613">
                              18 FT/CONTAINER REGULAR/SA/LPT 1613
                            </option>
                            <option value="19 FT/CONTAINER REGULAR/SA">
                              19 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="19 FT/OPEN BODY/SA">
                              19 FT/OPEN BODY/SA
                            </option>
                            <option value="20 FT/CAR CARRIER /SA">
                              20 FT/CAR CARRIER /SA
                            </option>
                            <option value="20 FT/CONTAINER REGULAR/SA">
                              20 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="20 FT/PLATFORM REGULAR/SA">
                              20 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="22 FT/OPEN TAURAS/DA">
                              22 FT/OPEN TAURAS/DA
                            </option>
                            <option value="24 FT/CAR CARRIER /SA">
                              24 FT/CAR CARRIER /SA
                            </option>
                            <option value="24 FT/CONTAINER REGULAR/DA">
                              24 FT/CONTAINER REGULAR/DA
                            </option>
                            <option value="24 FT/CONTAINER REGULAR/SA">
                              24 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="24 FT/OPEN BODY/DA">
                              24 FT/OPEN BODY/DA
                            </option>
                            <option value="24 FT/OPEN TAURAS/DA">
                              24 FT/OPEN TAURAS/DA
                            </option>
                            <option value="24 FT/PLATFORM REGULAR/SA">
                              24 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="24Ft SXL (P) Air Suspension">
                              24Ft SXL (P) Air Suspension
                            </option>
                            <option value="28 FT/PLATFORM REGULAR/DA">
                              28 FT/PLATFORM REGULAR/DA
                            </option>
                            <option value="28 FT/PLATFORM REGULAR/SA">
                              28 FT/PLATFORM REGULAR/SA
                            </option>
                            <option value="32 FT/ PLATFORM / SA">
                              32 FT/ PLATFORM / SA
                            </option>
                            <option value="32 FT/CAR CARRIER TK-5/SA">
                              32 FT/CAR CARRIER TK-5/SA
                            </option>
                            <option value="32 FT/CONTAINER REGULAR/DA">
                              32 FT/CONTAINER REGULAR/DA
                            </option>
                            <option value="32 FT/CONTAINER REGULAR/SA">
                              32 FT/CONTAINER REGULAR/SA
                            </option>
                            <option value="32 FT/PLATFORM REGULAR/DA">
                              32 FT/PLATFORM REGULAR/DA
                            </option>
                            <option value="32 FT/PLATFORM REGULAR/DA/FOUZI SCHEME">
                              32 FT/PLATFORM REGULAR/DA/FOUZI SCHEME
                            </option>
                            <option value="40 FT/TRAILER FLAT BED/DA">
                              40 FT/TRAILER FLAT BED/DA
                            </option>
                            <option value="40 FT/TRAILER FLAT BED/TA">
                              40 FT/TRAILER FLAT BED/TA
                            </option>
                            <option value="40 FT/TRAILER SEMI BED">
                              40 FT/TRAILER SEMI BED
                            </option>
                            <option value="40FT HB">40FT HB</option>
                            <option value="40FT SB">40FT SB</option>
                            <option value="40FT SXL (C)">40FT SXL (C)</option>
                            <option value="48FT HB">48FT HB</option>
                          </select>
                        </div>
                      )}

                      <div>
                        <label>Transportation Service:</label>
                        <select
                          name="tranportationservice"
                          id="tranportationservice"
                          onChange={handleChanges}
                          required
                        >
                          <option value="">--Select--</option>
                          <option value="FTL">FTL</option>
                          <option value="PTL">PTL</option>
                          <option value="Express">Express</option>
                        </select>
                      </div>

                      <div className="orderform-checkbox-input">
                        <label htmlFor="">Loading Scope:</label>
                        <div className="radio-box">
                          <div className="radio-container">
                            <input type="checkbox" value={loadingCharges} name="APML" id="APML" onClick={handleLoading} style={{
                              backgroundColor: loadingCharges ===
                                "APML" ? "green" : "white"
                            }} />
                            <label className="radio-label">
                              APML
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="orderform-checkbox-input">
                        <label htmlFor="">UnLoading Scope:</label>
                        <div className="radio-box">
                          <div className="radio-container">
                            <input type="checkbox" value={unloadingCharges} name="APML" id="APML" onClick={handleUnloading} style={{
                              backgroundColor: unloadingCharges ===
                                "APML" ? "green" : "white"
                            }} />
                            <label className="radio-label">
                              APML
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label>SHPL instructions</label>
                        <input
                          type="text"
                          name="shplinstructions"
                          id="shplinstructionss"
                          onChange={handleChanges}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ flexDirection: "column", margin: "1rem" }}>
                      <div>
                        <label>Order By</label>
                        <select name="orderby" id="orderby" onChange={handleChanges} required>
                          <option value="">--Select--</option>
                          <option value="Adinath Tajne">Adinath Tajne</option>
                          <option value="Aditya Kandharkar">
                            Aditya Kandharkar
                          </option>
                          <option value="Chintamani Mayeka">
                            Chintamani Mayeka
                          </option>
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
                            setpickupdate(e.target.value)
                            handleChanges(e)
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
                          options={Suggestions}
                          onInput={showRoute}
                          value={selectedCity?.label}

                          // value="pune" 
                          onChange={(event, value) => {
                            handlePlaceSelect(value)
                            handleChanges(event)
                            setDestination((values) => ({ ...values, [event.target.name]: value }))
                          }}
                          sx={{ minWidth: 300, margin: 0, padding: 0 }}
                          renderInput={(params) => (
                            // console.log(params,"paramsparams")
                            <TextField
                              sx={{ minWidth: 300, margin: 0, padding: 0 }}
                              {...params}
                              style={{ outline: "none", border: "0px", minWidth: "300px", maxWidth: "300px", minHeight: "45px", maxHeight: "45px", padding: "0px !important" }}
                              id="city"
                              name="city"
                              value={selectedCity?.label}
                              // value="pune"
                              onChange={(e) => {
                                handleChanges(e)
                                setDestination((values) => ({ ...values, [e.target.name]: e.target.value }))

                              }}
                              required
                              className="orderform-destination-input-2"
                            />
                          )}
                          required
                        />
                        {console.log(destination, "destinationdestination")}

                      </div>

                      <div>
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
                      </div>

                    </div>
                    <div style={{ flexDirection: "row", margin: "1rem" }}>
                      <div>
                        <label>Material</label>
                        <select
                          name="material"
                          onChange={(e) => {
                            handleChanges(e);
                            onMaterialChange(e);
                          }}
                          required
                        >
                          <option value="">--Select--</option>
                          <option value="MRI">MRI</option>
                          <option value="RF">RF Cabin</option>
                          {/* <!-- EXTRA --> */}
                          <option value="Biograph Horizon">Biograph Horizon</option>
                          <option value="Symbia">Symbia</option>
                          <option value="Artis">Artis</option>
                          <option value="cios fit">Cios</option>
                          <option value="Luminos">Luminos</option>
                          <option value="Mammomat">Mammomat</option>
                          <option value="Multix">Multix</option>
                          <option value="Mobilett elara max">
                            Mobilett elara max
                          </option>
                          <option value="Yasio max">Yasio max</option>
                          {/* <!-- EXTRA END --> */}
                          <option value="CT">CT</option>
                          <option value="LBO">LBO</option>
                          <option value="MI">MI</option>
                          {/* <option value="XP">XP</option> */}
                          <option value="somatam">somatam</option>{" "}
                          {/*<!-- REMAINING --> */}
                          <option value="Equipment">Tools</option>
                          <option value="Syngo">Syngo</option>
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
                            setexpecteddeliverydate(e.target.value)
                            handleChanges(e)
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
      }

    </>
  );
}