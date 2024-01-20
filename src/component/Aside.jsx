import img1 from "../assets/logo1.png";
import {
  MdOutlinePendingActions,
  MdOutlinePayment,
  MdSpatialTracking,
  MdOutlineEscalator,
} from "react-icons/md";
import {
  AiOutlineFileDone,
  AiOutlineAreaChart,
  AiOutlineLineChart,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  FaTruckPickup,
  FaTruckLoading,
  FaCreativeCommonsSa,
  FaWpforms,
} from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io'
import { BsMinecartLoaded } from "react-icons/bs";
import { GiTruck } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { RiBilliardsFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo1 from "../assets/henkel-logo-.png";
import { fetchData } from "../features/orderDetailSlice"
import { useSelector, useDispatch } from "react-redux";

const Aside = () => {
  const dispatch = useDispatch();
  const [isDropdown, setIsDropdown] = useState(false);
  const { loader, orders } = useSelector((state) => {
    return state.app
  })

  console.log(orders, "orders")

  var alldata = orders?.data?.filter((res) =>
    res).map((res) => ({
      ...res
    }))

  var mbrDropdown = [
    {
      "dropDownName": "ORIGIN STATEWISE",
      "dropDownAddress": "/originStatewise"
    },
    {
      "dropDownName": "DESTINATION STATEWISE (PORT/WAREHOUSE)",
      "dropDownAddress": "/destinationStatewisePortWarehouse"
    },
    {
      "dropDownName": "DESTINATION STATEWISE (MODALITY)",
      "dropDownAddress": "/destinationStatewiseModality"
    },
    {
      "dropDownName": "SLA PERFORMANCE AS PER TAT",
      "dropDownAddress": "/slaPeformanceAsPerTat"
    },
    {
      "dropDownName": "DELAY BY APML & FORCE MAJEURE",
      "dropDownAddress": "/delayByApmlAndForceMajeure"
    },
    {
      "dropDownName": "DELY BY SHPL",
      "dropDownAddress": "/DelayByShpl"
    },
    {
      "dropDownName": "CAPA MEASURE",
      "dropDownAddress": "/CapaMeasure"
    },
    {
      "dropDownName": "RIG DATA",
      "dropDownAddress": "/RigData"
    },
    {
      "dropDownName": "DOUBLE DRIVER & MARKET SOURCE DATA",
      "dropDownAddress": "/DoubleDriverAndMarketSourceData"
    },
    {
      "dropDownName": "HALTING CHARGES DATA",
      "dropDownAddress": "/HaltingChargesData"
    },
    {
      "dropDownName": "BILL SUMMARY/OLD CASES",
      "dropDownAddress": "/BillSummaryOldCases"
    },
    {
      "dropDownName": "OUTSTANDING SUMMARY-AS ON DATE",
      "dropDownAddress": "/outstandingSummaryAsOnDate"
    },
    {
      "dropDownName": "OUTSTANDING SUMMARY DETAILS",
      "dropDownAddress": "/outstandingSummaryDetails"
    },
  ]


  console.log(alldata, "alldata")
  const navigate = useNavigate();
  // sessionStorage.setItem("user", e.target.value ? e.target.value :"VIEW BY ALL" );
  const userS = sessionStorage.getItem("user");
  const [user, setUser] = useState(userS);


  const handleLogout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("customer");
    navigate("/");
  };

  const handleMbr = () => {
    setIsDropdown(!isDropdown);
  }

  const activeLink = "active navlink";
  const normalLink = "navlink";

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  return (
    <div className="container">
      <div className="back-style">
        <aside>
          <div className="top">
            <div className="logo">
              <img src={img1} alt="" className="img1" />
              <>
                {/* <h5>
                SIEMENS <span>HEALTHINEERS</span>
              </h5> */}
                <img src={logo1} alt="" className="logo1" />
              </>
            </div>
          </div>

          <div className="side-bar">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                <RxDashboard className="custome-svg" />
              </span>
              <h3>DASHBOARD </h3>
            </NavLink>

            <div
              style={{
                borderBottom: "1px solid #2e7d32",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
            <div className="aside_select-main">
              <select
                onChange={(e) => {
                  sessionStorage.setItem("user", e.target.value ? e.target.value : "VIEW BY ALL");
                  setUser(e.target.value);
                  window.location.reload();
                }}
                value={user ? user : "VIEW BY ALL"}
                className="aside-select"
              >
                <option>{user ? user : "VIEW BY ALL"}</option>
                <option value="VIEW BY ALL">VIEW BY ALL</option>
                <option value={null}>Monil Choksi</option>
                <option value="Adinath Tajne">Adinath Tajne</option>
                <option value="Aditya Kandharkar">Aditya Kandharkar</option>
                <option value="Chintamani Mayeka">Chintamani Mayeka</option>
                <option value="Jayesh Uniyal">Jayesh Uniyal</option>
                <option value="Sujoy Dey">Sujoy Dey</option>
                <option value="Pravin Katkar">Pravin Katkar</option>
                <option value="Mrirani Das">Mrirani Das</option>
                <option value="Vijay Mahtre">Vijay Mahtre</option>
                <option value="Sagar kadam">Sagar kadam</option>
                <option value="Arti Rajput">Arti Rajput</option>
                <option value="Surekha Ghamare">Surekha Ghamare</option>
              </select>
            </div>

            <div
              style={{
                borderBottom: "1px solid #2e7d32",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>

            <NavLink
              to="/orderform"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <FaWpforms className="custome-svg" />
              </span>
              <h3>ORDER FORM</h3>
            </NavLink>

            <NavLink
              to="/pendingorder"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                <MdOutlinePendingActions className="custome-svg" />
              </span>
              <h3>PENDING ORDERS </h3>
            </NavLink>

            <NavLink
              to="/enrouteforpicup"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <FaTruckPickup className="custome-svg" />
              </span>
              <h3>ENROUTE FOR PICKUP </h3>
            </NavLink>

            <NavLink
              to="/atpickup"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <FaTruckLoading className="custome-svg" />
              </span>
              <h3>AT PICKUP </h3>
            </NavLink>

            <NavLink
              to="/intransit"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <GiTruck className="custome-svg" />
              </span>
              <h3>INTRANSIT </h3>
            </NavLink>

            <NavLink
              to="/atunloading"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <BsMinecartLoaded className="custome-svg" />
              </span>
              <h3>AT UNLOADING </h3>
            </NavLink>

            <NavLink
              to="/completed"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <AiOutlineFileDone className="custome-svg" />
              </span>
              <h3>COMPLETED </h3>
            </NavLink>

            <NavLink
              to="/tentativecalculator"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <AiOutlineFileDone className="custome-svg" />
              </span>
              <h3>TENTATIVE CALCULATOR</h3>
            </NavLink>

            {/* <NavLink
              to="/pod"
              className={({ isActive }) => (isActive ? activeLink  : normalLink)}
            >
              <span>
                {" "}
                <VscVmRunning className="custome-svg" />
              </span>
              <h3>
                POD{" "}
                <span className="message-count">{completeStatus.length}</span>
              </h3>
            </NavLink> */}

            <NavLink
              to="/billing"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <RiBilliardsFill className="custome-svg" />
              </span>
              <h3>BILLING </h3>
            </NavLink>

            <NavLink
              to="/payment"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <MdOutlinePayment className="custome-svg" />
              </span>
              <h3>PAYMENT</h3>
            </NavLink>

            <NavLink
              to="/charts"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <AiOutlineAreaChart className="custome-svg" />
              </span>
              <h3>CHARTS</h3>
            </NavLink>

            {/* <NavLink
              to="/mbr"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <AiOutlineLineChart className="custome-svg" />
              </span>
              <h3>MBR</h3>
            </NavLink> */}

            <button className="mbr-main"
              onClick={() => handleMbr()}
            // className={({ isActive }) => (isActive ? normalLink : normalLink)}
            >
              <span>
                <AiOutlineLineChart className="custome-svg" />
              </span>
              <h3>MBR</h3>
              <span>
                <IoIosArrowDown className="down-arrow" />
              </span>
            </button>

            {
              isDropdown && (
                mbrDropdown.map((mbr, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={mbr.dropDownAddress}
                      // className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      className="mbr-dropdown"
                    >
                      <span>
                        {" "}
                        {/* <AiOutlineAreaChart className="custome-svg" /> */}
                      </span>
                      <h3>{mbr.dropDownName}</h3>
                    </NavLink>
                  )
                })

              )}

            {/* <NavLink to="/qbr"  className={({isActive}) => isActive ? activeLink : normalLink}>
            <span>
              {" "}
              <SiCodereview className="custome-svg" />
            </span>
            <h3>
              QBR <span className="message-count">{payment.length}</span>
            </h3>
          </NavLink> */}

            <div
              style={{
                borderBottom: "1px solid #2e7d32",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>

            <NavLink
              to="/trackingupdate"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <MdSpatialTracking className="custome-svg" />
              </span>
              <h3>TRACKING UPDATE</h3>
            </NavLink>

            <NavLink
              to="/escalations"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <MdOutlineEscalator className="custome-svg" />
              </span>
              <h3>ESCALATIONS</h3>
            </NavLink>

            <NavLink
              to="/abnormalities"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span>
                {" "}
                <FaCreativeCommonsSa className="custome-svg" />
              </span>
              <h3>ABNORMALITIES</h3>
            </NavLink>

            <div
              style={{
                borderBottom: "1px solid #2e7d32",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
            <div className="logout-main">
              <span>
                <AiOutlineLogout className="custome-svg" />
              </span>
              <button className="button__logout" onClick={handleLogout}>
                LOG OUT
              </button>
            </div>
          </div>
        </aside>
      </div >
    </div >
  );
};

export default Aside;
