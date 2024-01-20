import React, { useEffect, useState } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { SlArrowDown } from 'react-icons/sl'
import axios from 'axios';
import Loader from './Loader';

const OriginStatewise = () => {
  const [isOneMonth, setIsOneMonth] = useState(true);
  const [isTwoMonth, setIsTwoMonth] = useState(true);
  const [isThreeMonth, setIsThreeMonth] = useState(true);
  const [loader, setLoader] = useState(false)
  const [isError, setIsError] = useState(false)
  const [mbrOct, setMbrOct] = useState([]);
  const [mbrAug, setMbrAug] = useState([])
  const [mbrSep, setMbrSep] = useState([])
  const [mbrOriginOct, setMbrOriginOct] = useState([]);
  const [mbrOriginAug, setMbrOriginAug] = useState([])
  const [mbrOriginSep, setMbrOriginSep] = useState([])


  const GetMbrMonthly = async () => {
    setLoader(true);
    let promise1 = axios.get(`http://localhost:3500/api/v1/get/mbr/material?startDate=${1690828200000}&endDate=${1693420200000}`)
    let promise2 = axios.get(`http://localhost:3500/api/v1/get/mbr/material?startDate=${1693506600000}&endDate=${1696012200000}`)
    let promise3 = axios.get(`http://localhost:3500/api/v1/get/mbr/material?startDate=${1696098600000}&endDate=${1698690600000}`)

    let promise4 = axios.get(`http://localhost:3500/api/v1/get/mbr/materialbyorigin?startDate=${1690828200000}&endDate=${1693420200000}`)
    let promise5 = axios.get(`http://localhost:3500/api/v1/get/mbr/materialbyorigin?startDate=${1693506600000}&endDate=${1696012200000}`)
    let promise6 = axios.get(`http://localhost:3500/api/v1/get/mbr/materialbyorigin?startDate=${1696098600000}&endDate=${1698690600000}`)

    Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then((message) => {
      console.log(message)
      setMbrAug(message[0].data);
      setMbrSep(message[1].data);
      setMbrOct(message[2].data)
      setMbrOriginAug(message[3].data)
      setMbrOriginSep(message[4].data)
      setMbrOriginOct(message[5].data)
      setLoader(false);
      setIsError(false);
    })
  }

  let augTotalEquip = mbrOriginAug?.gurgaonEqiup + mbrOriginAug?.mumbaiEquip + mbrOriginAug?.kolkataEquip + mbrOriginAug?.chennaiEqui + mbrOriginAug?.delhiEquip + mbrOriginAug?.bhiwandiEquip + mbrOriginAug?.bangloreEquip + mbrOriginAug?.navimumbaiEquip + mbrOriginAug?.vasaiEquip + mbrOriginAug?.parelEquip
  let sepTotalEquip = mbrOriginSep?.gurgaonEqiup + mbrOriginSep?.mumbaiEquip + mbrOriginSep?.kolkataEquip + mbrOriginSep?.chennaiEqui + mbrOriginSep?.delhiEquip + mbrOriginSep?.bhiwandiEquip + mbrOriginSep?.bangloreEquip + mbrOriginSep?.navimumbaiEquip + mbrOriginSep?.vasaiEquip + mbrOriginSep?.parelEquip
  let octTotalEquip = mbrOriginOct?.gurgaonEqiup + mbrOriginOct?.mumbaiEquip + mbrOriginOct?.kolkataEquip + mbrOriginOct?.chennaiEqui + mbrOriginOct?.delhiEquip + mbrOriginOct?.bhiwandiEquip + mbrOriginOct?.bangloreEquip + mbrOriginOct?.navimumbaiEquip + mbrOriginOct?.vasaiEquip + mbrOriginOct?.parelEquip

  let augTotalLbo = mbrOriginAug?.gurgaonLbo + mbrOriginAug?.mumbaiLbo + mbrOriginAug?.kolkataLbo + mbrOriginAug?.chennaiEqui + mbrOriginAug?.delhiLbo + mbrOriginAug?.bhiwandiLbo + mbrOriginAug?.bangloreLbo + mbrOriginAug?.navimumbaiLbo + mbrOriginAug?.vasaiLbo + mbrOriginAug?.parelLbo
  let sepTotalLbo = mbrOriginSep?.gurgaonLbo + mbrOriginSep?.mumbaiLbo + mbrOriginSep?.kolkataLbo + mbrOriginSep?.chennaiEqui + mbrOriginSep?.delhiLbo + mbrOriginSep?.bhiwandiLbo + mbrOriginSep?.bangloreLbo + mbrOriginSep?.navimumbaiLbo + mbrOriginSep?.vasaiLbo + mbrOriginSep?.parelLbo
  let octTotalLbo = mbrOriginOct?.gurgaonLbo + mbrOriginOct?.mumbaiLbo + mbrOriginOct?.kolkataLbo + mbrOriginOct?.chennaiEqui + mbrOriginOct?.delhiLbo + mbrOriginOct?.bhiwandiLbo + mbrOriginOct?.bangloreLbo + mbrOriginOct?.navimumbaiLbo + mbrOriginOct?.vasaiLbo + mbrOriginOct?.parelLbo

  let gcGrandTotal = mbrAug?.totalCount + mbrSep?.totalCount + mbrOct?.totalCount

  let equipmentGrandTotal = augTotalEquip + sepTotalEquip + octTotalEquip
  let lboGrandTotal = augTotalLbo + sepTotalLbo + octTotalLbo

  let augGrandTotal = augTotalEquip + augTotalLbo
  let sepGrandTotal = sepTotalEquip + sepTotalLbo
  let octGrandTotal = octTotalEquip + octTotalLbo

  let grandTotalEquiLbo = equipmentGrandTotal + lboGrandTotal
  const tableData11 = [
    {
      Month: ["OCT' 23", "AUG' 23", "SEP' 23"],
      Modality: "MRI",
      Gc: mbrOct?.mriGc?.length,
      Product: mbrOct?.mri,
    },
    {
      Month: "",
      Modality: "RF",
      Gc: mbrOct?.rfGc?.length,
      Product: mbrOct?.rf,
    },
    {
      Month: "",
      Modality: "BIOGRAPH HORIZON",
      Gc: mbrOct?.biographGc?.length,
      Product: mbrOct?.biograph,
    },
    {
      Month: "",
      Modality: "SYMBIA",
      Gc: mbrOct?.symbiaGc?.length,
      Product: mbrOct?.symbia,
    },
    {
      Month: "",
      Modality: "ARTIS",
      Gc: mbrOct?.artisGc?.length,
      Product: mbrOct?.artis,
    },
    {
      Month: "",
      Modality: "CIOS FIT",
      Gc: mbrOct?.ciosGc?.length,
      Product: mbrOct?.cios,
    },
    {
      Month: "",
      Modality: "LUMINOS",
      Gc: mbrOct?.luminosGc?.length,
      Product: mbrOct?.luminos,
    },
    {
      Month: "",
      Modality: "Mammomat",
      Gc: mbrOct?.mammomatGc?.length,
      Product: mbrOct?.mammomat,
    },
    {
      Month: "",
      Modality: "MULTIX",
      Gc: mbrOct?.multixGc?.length,
      Product: mbrOct?.multix,
    },
    {
      Month: "",
      Modality: "MOBILETT ELARA MAX",
      Gc: mbrOct?.MobilettGc?.legnth,
      Product: mbrOct?.Mobilett,
    },
    {
      Month: "",
      Modality: "YASIO MAX",
      Gc: mbrOct?.YasioGc?.length,
      Product: mbrOct?.Yasio,
    },
    {
      Month: "",
      Modality: "CT",
      Gc: mbrOct?.ctGc?.length,
      Product: mbrOct?.ct,
    },
    {
      Month: "",
      Modality: "LBO",
      Gc: mbrOct?.lboGc?.length,
      Product: mbrOct?.lbo,
    },
    {
      Month: "",
      Modality: "MI",
      Gc: mbrOct?.miGc?.length,
      Product: mbrOct?.mi,
    },
    {
      Month: "",
      Modality: "SOMATAM",
      Gc: mbrOct?.somatamGc?.length,
      Product: mbrOct?.somatam,
    },
    {
      Month: "",
      Modality: "EQUIPMENT",
      Gc: mbrOct?.equipGc?.length,
      Product: mbrOct?.equip,
    },
    {
      Month: "",
      Modality: "SYNGO",
      Gc: mbrOct?.syngoGc?.length,
      Product: mbrOct?.syngo,
    },
    {
      Month: "",
      Modality: "OTHERS",
      Gc: mbrOct?.othersGc?.length,
      Product: mbrOct?.others,
    },
  ];

  const tableData12 = [
    {
      Month: ["JULYS' 23", "AUG' 23", "SEP' 23"],
      Modality: "MRI",
      Gc: mbrAug?.mriGc?.length,
      Product: mbrAug?.mri,
    },
    {
      Month: "",
      Modality: "RF",
      Gc: mbrAug?.rfGc?.length,
      Product: mbrAug?.rf,
    },
    {
      Month: "",
      Modality: "BIOGRAPH HORIZON",
      Gc: mbrAug?.biographGc?.length,
      Product: mbrAug?.biograph,
    },
    {
      Month: "",
      Modality: "SYMBIA",
      Gc: mbrAug?.symbiaGc?.length,
      Product: mbrAug?.symbia,
    },
    {
      Month: "",
      Modality: "ARTIS",
      Gc: mbrAug?.artisGc?.length,
      Product: mbrAug?.artis,
    },
    {
      Month: "",
      Modality: "CIOS FIT",
      Gc: mbrAug?.ciosGc?.length,
      Product: mbrAug?.cios,
    },
    {
      Month: "",
      Modality: "LUMINOS",
      Gc: mbrAug?.luminosGc?.length,
      Product: mbrAug?.luminos,
    },
    {
      Month: "",
      Modality: "Mammomat",
      Gc: mbrAug?.mammomatGc?.length,
      Product: mbrAug?.mammomat,
    },
    {
      Month: "",
      Modality: "MULTIX",
      Gc: mbrAug?.multixGc?.length,
      Product: mbrAug?.multix,
    },
    {
      Month: "",
      Modality: "MOBILETT ELARA MAX",
      Gc: mbrAug?.MobilettGc?.length,
      Product: mbrAug?.Mobilett,
    },
    {
      Month: "",
      Modality: "YASIO MAX",
      Gc: mbrAug?.YasioGc?.length,
      Product: mbrAug?.Yasio,
    },
    {
      Month: "",
      Modality: "CT",
      Gc: mbrAug?.ctGc?.length,
      Product: mbrAug?.ct,
    },
    {
      Month: "",
      Modality: "LBO",
      Gc: mbrAug?.lboGc?.length,
      Product: mbrAug?.lbo,
    },
    {
      Month: "",
      Modality: "MI",
      Gc: mbrAug?.miGc?.length,
      Product: mbrAug?.mi,
    },
    {
      Month: "",
      Modality: "SOMATAM",
      Gc: mbrAug?.somatamGc?.length,
      Product: mbrAug?.somatam,
    },
    {
      Month: "",
      Modality: "EQUIPMENT",
      Gc: mbrAug?.equipGc?.length,
      Product: mbrAug?.equip,
    },
    {
      Month: "",
      Modality: "SYNGO",
      Gc: mbrAug?.syngoGc?.length,
      Product: mbrAug?.syngo,
    },
    {
      Month: "",
      Modality: "OTHERS",
      Gc: mbrAug?.othersGc?.length,
      Product: mbrAug?.others,
    },
  ];

  const tableData13 = [
    {
      Month: ["JULYS' 23", "AUG' 23", "SEP' 23"],
      Modality: "MRI",
      Gc: mbrSep?.mriGc?.length,
      Product: mbrSep?.mri,
    },
    {
      Month: "",
      Modality: "RF",
      Gc: mbrSep?.rfGc?.length,
      Product: mbrSep?.rf,
    },
    {
      Month: "",
      Modality: "BIOGRAPH HORIZON",
      Gc: mbrSep?.biographGc?.length,
      Product: mbrSep?.biograph,
    },
    {
      Month: "",
      Modality: "SYMBIA",
      Gc: mbrSep?.symbiaGc?.length,
      Product: mbrSep?.symbia,
    },
    {
      Month: "",
      Modality: "ARTIS",
      Gc: mbrSep?.artisGc?.length,
      Product: mbrSep?.artis,
    },
    {
      Month: "",
      Modality: "CIOS FIT",
      Gc: mbrSep?.ciosGc?.length,
      Product: mbrSep?.cios,
    },
    {
      Month: "",
      Modality: "LUMINOS",
      Gc: mbrSep?.luminosGc?.length,
      Product: mbrSep?.luminos,
    },
    {
      Month: "",
      Modality: "Mammomat",
      Gc: mbrSep?.mammomatGc?.length,
      Product: mbrSep?.mammomat,
    },
    {
      Month: "",
      Modality: "MULTIX",
      Gc: mbrSep?.multixGc?.length,
      Product: mbrSep?.multix,
    },
    {
      Month: "",
      Modality: "MOBILETT ELARA MAX",
      Gc: mbrSep?.MobilettGc?.length,
      Product: mbrSep?.Mobilett,
    },
    {
      Month: "",
      Modality: "YASIO MAX",
      Gc: mbrSep?.YasioGc?.length,
      Product: mbrSep?.Yasio,
    },
    {
      Month: "",
      Modality: "CT",
      Gc: mbrSep?.ctGc?.length,
      Product: mbrSep?.ct,
    },
    {
      Month: "",
      Modality: "LBO",
      Gc: mbrSep?.lboGc?.length,
      Product: mbrSep?.lbo,
    },
    {
      Month: "",
      Modality: "MI",
      Gc: mbrSep?.miGc?.length,
      Product: mbrSep?.mi,
    },
    {
      Month: "",
      Modality: "SOMATAM",
      Gc: mbrSep?.somatamGc?.length,
      Product: mbrSep?.somatam,
    },
    {
      Month: "",
      Modality: "EQUIPMENT",
      Gc: mbrSep?.equipGc?.length,
      Product: mbrSep?.equip,
    },
    {
      Month: "",
      Modality: "SYNGO",
      Gc: mbrSep?.syngoGc?.length,
      Product: mbrSep?.syngo,
    },
    {
      Month: "",
      Modality: "OTHERS",
      Gc: mbrSep?.othersGc?.length,
      Product: mbrSep?.others,
    },
  ];

  const tableData21 = [
    {
      Month: ["AUG' 23", "SEP' 23", "OCT' 23"],
      OriginState: "Gurgaon",
      Equipment: mbrOriginAug?.gurgaonEqiup,
      LBO: mbrOriginAug?.gurgaonLbo,
      GrandTotal: mbrOriginAug?.gurgaonEqiup + mbrOriginAug?.gurgaonLbo,
    },
    {
      Month: [""],
      OriginState: "Mumbai",
      Equipment: mbrOriginAug?.mumbaiEquip,
      LBO: mbrOriginAug?.mumbaiLbo,
      GrandTotal: mbrOriginAug?.mumbaiEquip + mbrOriginAug?.mumbaiLbo,
    },
    {
      Month: [""],
      OriginState: "Kolkata",
      Equipment: mbrOriginAug?.kolkataEquip,
      LBO: mbrOriginAug?.kolkataLbo,
      GrandTotal: mbrOriginAug?.kolkataEquip + mbrOriginAug?.kolkataLbo,
    },
    {
      Month: [""],
      OriginState: "Chennai",
      Equipment: mbrOriginAug?.chennaiEqui,
      LBO: mbrOriginAug?.chennaiLbo,
      GrandTotal: mbrOriginAug?.chennaiEqui + mbrOriginAug?.chennaiLbo,
    },
    {
      Month: [""],
      OriginState: "Delhi",
      Equipment: mbrOriginAug?.delhiEquip,
      LBO: mbrOriginAug?.delhiLbo,
      GrandTotal: mbrOriginAug?.delhiEquip + mbrOriginAug?.delhiLbo,
    },
    {
      Month: [""],
      OriginState: "Bhiwandi",
      Equipment: mbrOriginAug?.bhiwandiEquip,
      LBO: mbrOriginAug?.bhiwandiLbo,
      GrandTotal: mbrOriginAug?.bhiwandiEquip + mbrOriginAug?.bhiwandiLbo,
    },
    {
      Month: [""],
      OriginState: "Banglore",
      Equipment: mbrOriginAug?.bangloreEquip,
      LBO: mbrOriginAug?.bangloreLbo,
      GrandTotal: mbrOriginAug?.bangloreEquip + mbrOriginAug?.bangloreLbo,
    },
    {
      Month: [""],
      OriginState: "Navi Mumbai",
      Equipment: mbrOriginAug?.navimumbaiEquip,
      LBO: mbrOriginAug?.navimumbaiLbo,
      GrandTotal: mbrOriginAug?.navimumbaiEquip + mbrOriginAug?.navimumbaiLbo,
    },
    {
      Month: [""],
      OriginState: "Vasai",
      Equipment: mbrOriginAug?.vasaiEquip,
      LBO: mbrOriginAug?.vasaiLbo,
      GrandTotal: mbrOriginAug?.vasaiEquip + mbrOriginAug?.vasaiLbo,
    },
    {
      Month: [""],
      OriginState: "Parel",
      Equipment: mbrOriginAug?.parelEquip,
      LBO: mbrOriginAug?.parelLbo,
      GrandTotal: mbrOriginAug?.parelEquip + mbrOriginAug?.parelLbo,
    },
  ];

  const tableData22 = [
    {
      Month: ["AUG' 23", "SEP' 23", "OCT' 23"],
      OriginState: "Gurgaon",
      Equipment: mbrOriginOct?.gurgaonEqiup,
      LBO: mbrOriginOct?.gurgaonLbo,
      GrandTotal: mbrOriginOct?.gurgaonEqiup + mbrOriginOct?.gurgaonLbo,
    },
    {
      Month: [""],
      OriginState: "Mumbai",
      Equipment: mbrOriginOct?.mumbaiEquip,
      LBO: mbrOriginOct?.mumbaiLbo,
      GrandTotal: mbrOriginOct?.mumbaiEquip + mbrOriginOct?.mumbaiLbo,
    },
    {
      Month: [""],
      OriginState: "Kolkata",
      Equipment: mbrOriginOct?.kolkataEquip,
      LBO: mbrOriginOct?.kolkataLbo,
      GrandTotal: mbrOriginOct?.kolkataEquip + mbrOriginOct?.kolkataLbo,
    },
    {
      Month: [""],
      OriginState: "Chennai",
      Equipment: mbrOriginOct?.chennaiEqui,
      LBO: mbrOriginOct?.chennaiLbo,
      GrandTotal: mbrOriginOct?.chennaiEqui + mbrOriginOct?.chennaiLbo,
    },
    {
      Month: [""],
      OriginState: "Delhi",
      Equipment: mbrOriginOct?.delhiEquip,
      LBO: mbrOriginOct?.delhiLbo,
      GrandTotal: mbrOriginOct?.delhiEquip + mbrOriginOct?.delhiLbo,
    },
    {
      Month: [""],
      OriginState: "Bhiwandi",
      Equipment: mbrOriginOct?.bhiwandiEquip,
      LBO: mbrOriginOct?.bhiwandiLbo,
      GrandTotal: mbrOriginOct?.bhiwandiEquip + mbrOriginOct?.bhiwandiLbo,
    },
    {
      Month: [""],
      OriginState: "Banglore",
      Equipment: mbrOriginOct?.bangloreEquip,
      LBO: mbrOriginOct?.bangloreLbo,
      GrandTotal: mbrOriginOct?.bangloreEquip + mbrOriginOct?.bangloreLbo,
    },
    {
      Month: [""],
      OriginState: "Navi Mumbai",
      Equipment: mbrOriginOct?.navimumbaiEquip,
      LBO: mbrOriginOct?.navimumbaiLbo,
      GrandTotal: mbrOriginOct?.navimumbaiEquip + mbrOriginOct?.navimumbaiLbo,
    },
    {
      Month: [""],
      OriginState: "Vasai",
      Equipment: mbrOriginOct?.vasaiEquip,
      LBO: mbrOriginOct?.vasaiLbo,
      GrandTotal: mbrOriginOct?.vasaiEquip + mbrOriginOct?.vasaiLbo,
    },
    {
      Month: [""],
      OriginState: "Parel",
      Equipment: mbrOriginOct?.parelEquip,
      LBO: mbrOriginOct?.parelLbo,
      GrandTotal: mbrOriginOct?.parelEquip + mbrOriginOct?.parelLbo,
    },
  ];

  const tableData31 = [
    {
      Month: ["JULYS' 23", "AUG' 23", "SEP' 23"],
      OriginState: "Chattisgarh",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Delhi",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Gujrat",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Haryana",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Karnataka",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Kerla",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Maharastra",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
  ];

  const tableData32 = [
    {
      Month: ["JULYS' 23", "AUG' 23", "SEP' 23"],
      OriginState: "Chattisgarh",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Delhi",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Gujrat",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Haryana",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Karnataka",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Kerla",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Maharashtra",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Orissa",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
    {
      Month: [""],
      OriginState: "Tamilnadu",
      Cathlab: Math.floor(Math.random() * 100),
      CT: Math.floor(Math.random() * 100),
      LBO: Math.floor(Math.random() * 100),
      MI: Math.floor(Math.random() * 100),
      MIMRI: Math.floor(Math.random() * 100),
      OTHERS: Math.floor(Math.random() * 100),
      XP: Math.floor(Math.random() * 100),
      GrandTotal: Math.floor(Math.random() * 100),
    },
  ];

  const handleMonth = (e) => {
    switch (e.target.value) {
      case "ONE MONTH":
        setIsOneMonth(true);
        setIsTwoMonth(false);
        setIsThreeMonth(false);
        break;
      case "TWO MONTH":
        setIsOneMonth(true);
        setIsTwoMonth(true);
        setIsThreeMonth(false);
        break;
      case "THREE MONTH":
        setIsOneMonth(true);
        setIsTwoMonth(true);
        setIsThreeMonth(true);
        break;
      default:
        setIsOneMonth(true);
        setIsTwoMonth(true);
        setIsThreeMonth(true);
    }
  }

  useEffect(() => {
    GetMbrMonthly()
    // GetMbrOriginMaterialOct()
  }, [])

  if (isError) {
    return <h1 style={{ display: 'flex', alignSelf: 'center', justifySelf: 'center', color: 'black' }}>Internal Server Error</h1>
  }

  if (loader) {
    return <><Loader /></>
  }


  return (
    <div className='mbrcontainer'>
      <div className="">
        <div className="">
          <h1>
            SHIPEMENT SUMMARY - ORIGIN STATEWISE / MODALITY WISE JULYS'23 TO SEP'23 <br />
            (Others - Spare Parts, Synia, Coils, Tools, Ply, Wood Box, PPE Kit, Mock Up)
          </h1>
        </div>
      </div>

      <div className='mbrfilter'>
        <select name='months' id='months' onChange={handleMonth}>
          <option value="MONTHS">FILTER BY MONTHS</option>
          <option value="ONE MONTH">ONE MONTH</option>
          <option value="TWO MONTH">TWO MONTH</option>
          <option value="THREE MONTH">THREE MONTH</option>
        </select>
        <SlArrowDown />
      </div>

      <div className='mbrtablebox'>
        <table className='mbrtable'>
          <thead>
            <tr>
              <th>Months</th>
              <th>Modality</th>
              <th>Count Of Gc Number</th>
              <th>Count Of Product</th>
            </tr>
          </thead>
          <tbody>
            <>

              {
                isTwoMonth &&
                <>
                  {
                    tableData12.map((data, index) => {
                      return (
                        <tr key={index} style={{ display: data.Product != 0 ? "" : "none" }} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[1]}</td>
                          <td>{data.Modality}</td>
                          <td>{data.Gc}</td>
                          <td>{data.Product}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>AUG'23 TOTAL</td>
                    <td></td>
                    <td>{mbrAug?.totalCount}</td>
                    <td>{mbrAug?.totalCount}</td>
                  </tr>
                </>
              }

              {
                isThreeMonth &&
                <>
                  {
                    tableData13.map((data, index) => {
                      return (
                        <tr key={index} style={{ display: data.Product != 0 ? "" : "none" }} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[2]}</td>
                          <td>{data.Modality}</td>
                          <td>{data.Gc}</td>
                          <td>{data.Product}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>SEP'23 TOTAL</td>
                    <td></td>
                    <td>{mbrSep?.totalCount}</td>
                    <td>{mbrSep?.totalCount}</td>
                  </tr>
                </>
              }

              {
                isOneMonth &&
                <>
                  {
                    tableData11.map((data, index) => {
                      return (
                        <tr key={index} style={{ display: data.Product === 0 ? 'none' : '' }} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[0]}</td>
                          <td>{data.Modality}</td>
                          <td>{data.Gc}</td>
                          <td>{data.Product}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>OCT'23 TOTAL</td>
                    <td></td>
                    <td>{mbrOct?.totalCount} </td>
                    <td>{mbrOct?.totalCount}</td>
                  </tr>
                </>
              }

              <tr className='mbrgrandtotal'>
                <td>Grand total</td>
                <td></td>
                <td>{gcGrandTotal}</td>
                <td>{gcGrandTotal}</td>
              </tr>
            </>
          </tbody>
        </table>

        <table className='mbrtable'>
          <thead>
            <tr>
              <th>Months</th>
              <th>Origin State</th>
              <th>Equipement</th>
              <th>LBO</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                isOneMonth &&
                <>
                  {
                    tableData21.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[0]}</td>
                          <td>{data.OriginState}</td>
                          <td>{data.Equipment}</td>
                          <td>{data.LBO}</td>
                          <td>{data.GrandTotal}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>AUG'23 TOTAL</td>
                    <td></td>
                    <td>{augTotalEquip}</td>
                    <td>{augTotalLbo}</td>
                    <td>{augGrandTotal}</td>
                  </tr>
                </>
              }

              {
                isTwoMonth &&
                <>
                  {
                    tableData22.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[1]}</td>
                          <td>{data.OriginState}</td>
                          <td>{data.Equipment}</td>
                          <td>{data.LBO}</td>
                          <td>{data.GrandTotal}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>SEP'23 TOTAL</td>
                    <td></td>
                    <td>{sepTotalEquip}</td>
                    <td>{sepTotalLbo}</td>
                    <td>{sepGrandTotal}</td>
                  </tr>
                </>
              }

              {
                isThreeMonth &&
                <>
                  {
                    tableData22.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[2]}</td>
                          <td>{data.OriginState}</td>
                          <td>{data.Equipment}</td>
                          <td>{data.LBO}</td>
                          <td>{data.GrandTotal}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>OCT'23 TOTAL</td>
                    <td></td>
                    <td>{octTotalEquip}</td>
                    <td>{octTotalLbo}</td>
                    <td>{octGrandTotal}</td>
                  </tr>
                </>
              }

              <tr className='mbrgrandtotal'>
                <td>Grand total</td>
                <td></td>
                <td>{equipmentGrandTotal}</td>
                <td>{lboGrandTotal}</td>
                <td>{grandTotalEquiLbo}</td>
              </tr>
            </>
          </tbody>
        </table>

        <table className='mbrtable'>
          <thead>
            <tr>
              <th>Months</th>
              <th>Origin State</th>
              <th>Cathlab</th>
              <th>CT</th>
              <th>LBO</th>
              <th>MI</th>
              <th>MI/MRI</th>
              <th>OTHERS</th>
              <th>XP</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                isOneMonth &&
                <>
                  {
                    tableData31.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[0]}</td>
                          <td>{data.OriginState}</td>
                          <td>{data.Cathlab}</td>
                          <td>{data.CT}</td>
                          <td>{data.LBO}</td>
                          <td>{data.MI}</td>
                          <td>{data.MIMRI}</td>
                          <td>{data.OTHERS}</td>
                          <td>{data.XP}</td>
                          <td>{data.GrandTotal}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>JULYS'23 TOTAL</td>
                    <td></td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                  </tr>
                </>
              }

              {
                isTwoMonth &&
                <>
                  {
                    tableData32.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[1]}</td>
                          <td>{data.OriginState}</td>
                          <td>{data.Cathlab}</td>
                          <td>{data.CT}</td>
                          <td>{data.LBO}</td>
                          <td>{data.MI}</td>
                          <td>{data.MIMRI}</td>
                          <td>{data.OTHERS}</td>
                          <td>{data.XP}</td>
                          <td>{data.GrandTotal}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>AUG'23 TOTAL</td>
                    <td></td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                  </tr>
                </>
              }


              {
                isThreeMonth &&
                <>
                  {
                    tableData32.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td className='mbrmonthbox'>{data.Month[2]}</td>
                          <td>{data.OriginState}</td>
                          <td>{data.Cathlab}</td>
                          <td>{data.CT}</td>
                          <td>{data.LBO}</td>
                          <td>{data.MI}</td>
                          <td>{data.MIMRI}</td>
                          <td>{data.OTHERS}</td>
                          <td>{data.XP}</td>
                          <td>{data.GrandTotal}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className='mbrtotal'>
                    <td>SEP'23 TOTAL</td>
                    <td></td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                  </tr>
                </>
              }

              <tr className='mbrgrandtotal'>
                <td>Grand total</td>
                <td></td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>
            </>
          </tbody>
        </table>

      </div >
    </div >
  )
}

export default OriginStatewise