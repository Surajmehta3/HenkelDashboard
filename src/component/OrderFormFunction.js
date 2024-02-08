import axios from "axios";

const mydate = new Date()
console.log(mydate, "mydate")
export async function submitForm(inputs, loadingCharges, unloadingCharges, ...temp) {

  let dateTime = inputs.Pickup_Date;
  let date = new Date(dateTime).toString();
  let formattedDate = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  let dateTime1 = inputs.expected_Date;
  let date1 = new Date(dateTime1);
  let formattedDate1 = date1.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  let orderNumber = await genOrderNumber();
 
  var orders = [];
  for (let i = 0; i < temp[4]; i++) {
    var order = {
      Origin: temp[0],
      Destination: null,
      "Order Number": orderNumber,
      "Item Number": `${i}`,
      "Vehicle Type": temp[3][i],
      "Transportation Service": "FTL",
      "Customer(*)": "SIEMENS HEALTHCARE PRIVATE LIMITED",
      "Consignor(*)": inputs.Origin,
      "Consignee(*)": "Unknown",
      "Pickup Date(DD-MM-YYYY)": "16-02-2023",
      "Booking Branch": "Mumbai",
      "Contract Number": null,
      Freight: "100",
      "Measurement Type(*)": "weight",
      "Quantity(*)": "1",
      "Quantity UOM(*)": "Units",
      "cf_Order By": inputs.OrderBy,
      "cf_Vehicle-type": null,
      "cf_S.O Number/PO": inputs.SOnumber,
      "cf_WBS/COST": inputs.WBS,
      "cf_Consignee Name": inputs.ConsigneeName,
      "cf_Consignee Address": inputs.ConsigneeAddress,
      "cf_Consignee Pincode": inputs.ConsigneePincode,
      "cf_PM Name": inputs.PMHeadName,
      "cf_PM Number": inputs.PMHeadNumber,
      "cf_RPM Name": inputs.RPMName,
      "cf_RPM Number": inputs.RPMNumber,
      "cf_KAM Name": inputs.KAMName,
      "cf_KAM Number": inputs.KAMNumber,
      "cf_SHPL instructions": inputs.SHPL_instructions,
      "cf_APML Remarks": "",
      cf_MATERIAL:inputs.Material === "Others" ? inputs.othermaterial : inputs.Material,
      "cf_expected pickup date and time": formattedDate,
      "cf_EXPECTED TARGET DATE:": formattedDate1,
      "cf_Number of CC Email": unloadingCharges,
      "cf_CC Email Id 1": temp[2].cc1,
      "cf_CC Email Id 2": temp[2].cc2,
      "cf_CC Email Id 3": temp[2].cc3,
      "cf_CC Email Id 4": temp[2].cc4,
      "cf_CC Email Id 5": temp[2].cc5,
      "cf_CC Email Id 6": temp[2].cc6,
      "cf_CC Email Id 7": temp[2].cc7,
      "cf_CC Email Id 8": temp[2].cc8,
      "cf_CC loading Charges": temp[0],
      "cf_CC unloading Charges": temp[1],
      cf_User: sessionStorage.getItem("user"),
      "mydate":mydate
    };
    orders.push(order);
  }
  console.log(orders,"orders")

 
  return orders
}

export function onOriginChange(sO) {
  let data = [];
  let selectedLocation = "";

  switch (sO) {
   
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
    default:
      break;
  }

  data[0] = "HENKEL";
  data[1] = selectedLocation;
  data[2] = sO;
  data[3] = "Mumbai";
  return data;
}

async function genOrderNumber() {
  var getConfig = {
    method: "get",
    url: "https://script.google.com/macros/s/AKfycbwBRCXo0d0WLTZfKJyNe833t1Caqmh3_CGfi4E7hTGPuLyjyqDQFhS3E2f9b3WybaI/exec?action=getUser",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const sheetRes = await axios(getConfig);
  const sheetData = sheetRes.data;

  let prev = sheetData[sheetData.length - 1];

  let prevOrd = prev.data.split("_")[1];

  let num = parseInt(prevOrd) + 1;
  let newOrd = "SHPL_" + num.toString().padStart(7, "0");

  return newOrd;
}
