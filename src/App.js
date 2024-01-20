import Home from "./component/Home";
import { useState, useEffect } from "react";
import { Navigate, BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PendingOrder from "./component/PendingOrder";
import EnrouteForPickup from "./component/EnrouteForPickup";
import AtPickup from "./component/AtPickup";
import AtUnloading from "./component/AtUnloading";
import Intransit from "./component/Intransit";
import Completed from "./component/Completed";
import Pod from "./component/Pod";
import Billing from "./component/Billing";
import Payment from "./component/Payment";
import Aside from "./component/Aside";
import TrackingUpdates from "./component/TrackingUpdates";
import Escalations from "./component/Escalations";
import Abnormalities from "./component/Abnormalities";
import OrderForm from "./component/OrderForm";
import FirstPage from "./component/FirstPage";
import MBR from "./component/MBR";
import Charts from "./component/Charts";
import LoginForm from "./component/LoginForm/LoginForm";
import TentativeCalculator from "./component/TentativeCalculator";

// mbr dropdown componenets
import OriginStatewisePort from "./component/OriginStatewisePort"
import OriginStatewise from "./component/OriginStatewise"
import DestinationStatewiseModality from "./component/DestinationStatewiseModality"
import SlaPerformanceAsPerTat from "./component/SlaPerformanceAsPerTat"
import DelayByApml from "./component/DelayByApml"
import DelayByShpl from "./component/DelayByShpl"
import CapaMeasure from "./component/CapaMeasure"
import RigData from "./component/RigData"
import DoubleDriverAndMarketSourceData from "./component/DoubleDriverAndMarketSourceData"
import HaltingChargesData from "./component/HaltingChargesData"
import BillSummary from "./component/BillSummary"
import OutstandingSummaryAsOnDate from "./component/OutstandingSummaryAsOnDate"
import OutstandingSummaryDetails from "./component/OutstandingSummaryDetails"


function App() {
  // const navigate = useNavigate()
  // const location = useLocation()
  // const [authenticated, setAuthenticated] = useState(false);
  // useEffect(() => {
  //   const isauthenticate = () => {
  //     const token = sessionStorage.getItem('id');
  //     console.log(token);
  //     if (token != null) {
  //       setAuthenticated(true)
  //     } else {
  //       navigate('/home');
  //     }
  //     return token;
  //   }
  //   // setAuthenticated(isauthenticate());
  //   isauthenticate();
  // }, [location.pathname, navigate]);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/home" />} />

          <Route path="/home" element={[<Aside />, <Home />]} />
          <Route path="/pendingorder" element={[<Aside />, <PendingOrder />]} />
          <Route
            path="/enrouteforpicup"
            element={[<Aside />, <EnrouteForPickup />]}
          />

          <Route path="/atpickup" element={[<Aside />, <AtPickup />]} />
          <Route path="/atunloading" element={[<Aside />, <AtUnloading />]} />
          <Route path="/intransit" element={[<Aside />, <Intransit />]} />
          <Route path="/completed" element={[<Aside />, <Completed />]} />
          <Route path="/tentativecalculator" element={[<Aside />, <TentativeCalculator />]} />
          <Route path="/orderform" element={[<Aside />, <OrderForm />]} />
          {/* <Route path="/pod" element={[<Aside />, <Pod />]} /> */}
          <Route path="/billing" element={[<Aside />, <Billing />]} />
          <Route path="/payment" element={[<Aside />, <Payment />]} />
          <Route path="/charts" element={[<Aside />, <Charts />]} />
          <Route path="/mbr" element={[<Aside />, <MBR />]} />
          <Route path="/trackingupdate" element={[<Aside />, <TrackingUpdates />]}
          />
          <Route path="/escalations" element={[<Aside />, <Escalations />]} />
          <Route path="/abnormalities" element={[<Aside />, <Abnormalities />]} />

          {/* mbr dropdown componenets */}
          <Route path="/originStatewise" element={[<Aside />, <OriginStatewise />]} />
          <Route path="/destinationStatewisePortWarehouse" element={[<Aside />, <OriginStatewisePort />]} />
          <Route path="/destinationStatewiseModality" element={[<Aside />, <DestinationStatewiseModality />]} />
          <Route path="/slaPeformanceAsPerTat" element={[<Aside />, <SlaPerformanceAsPerTat />]} />
          <Route path="/delayByApmlAndForceMajeure" element={[<Aside />, <DelayByApml />]} />
          <Route path="/DelayByShpl" element={[<Aside />, <DelayByShpl />]} />
          <Route path="/CapaMeasure" element={[<Aside />, <CapaMeasure />]} />
          <Route path="/RigData" element={[<Aside />, <RigData />]} />
          <Route path="/DoubleDriverAndMarketSourceData" element={[<Aside />, <DoubleDriverAndMarketSourceData />]} />
          <Route path="/HaltingChargesData" element={[<Aside />, <HaltingChargesData />]} />
          <Route path="/BillSummaryOldCases" element={[<Aside />, <BillSummary />]} />
          <Route path="/outstandingSummaryAsOnDate" element={[<Aside />, <OutstandingSummaryAsOnDate />]} />
          <Route path="/outstandingSummaryDetails" element={[<Aside />, <OutstandingSummaryDetails />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
