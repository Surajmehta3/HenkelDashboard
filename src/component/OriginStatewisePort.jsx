import React from 'react'
import { useState } from 'react';

const OriginStatewisePort = () => {
  const [isOneMonth, setIsOneMonth] = useState(true);
  const [isTwoMonth, setIsTwoMonth] = useState(true);
  const [isThreeMonth, setIsThreeMonth] = useState(true);

  const mbrTable1 = [
    {
      months: "JULY'23",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: "AUG'23",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: "SEP'23",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    }
  ]

  const mbrTable2 = [
    {
      months: ["JULY'23", "AUG'23", "SEP'23"],
      modality: "Cathlab",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: [""],
      modality: "CT",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: [""],
      modality: "LBO",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: [""],
      modality: "MI",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: [""],
      modality: "MI/MRI",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: [""],
      modality: "OTHERS",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      months: [""],
      modality: "XP",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
  ]

  const Central = [
    {
      destination: "Central",
      state: "Chattisgarh",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Madhya Pradesh",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
  ];

  const East = [
    {
      destination: "East",
      state: "Assam",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Bihar",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Jharkhand",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Odisha",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "West Bengal",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
  ];

  const North = [
    {
      destination: "North",
      state: "J & K",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Delhi",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Haryana",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Nepal",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Punjab",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Rajasthan",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Uttar Pradesh",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Uttarakhand",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
  ]

  const South = [
    {
      destination: "South",
      state: "Andhra Pradesh",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Karnataka",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Kerala",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Tamilnadu",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Telangana",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    }
  ]

  const West = [
    {
      destination: "West",
      state: "Goa",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Gujarat",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Maharastra",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
    {
      destination: "",
      state: "Rajasthan",
      port: Math.floor(Math.random() * 100),
      wh: Math.floor(Math.random() * 100),
      grandtotal: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <div className='mbrcontainer'>
      <div className="">
        <div className="">
          <h1>
            SHIPEMENT SUMMARY - ORIGIN STATEWISE / (PORT / WAREHOUSE)- JULY'23 TO SEP'23
          </h1>
        </div>
      </div>

      {/* <div className='mbrfilter'>
        <select name='months' id='months' onChange={handleMonth}>
          <option value="MONTHS">FILTER BY MONTHS</option>
          <option value="ONE MONTH">ONE MONTH</option>
          <option value="TWO MONTH">TWO MONTH</option>
          <option value="THREE MONTH">THREE MONTH</option>
        </select>
        <SlArrowDown />
      </div> */}

      <div className='mbrtablebox'>
        <table className='mbrtable'>
          <thead>
            <tr>
              <th>MONTHS</th>
              <th>PORT</th>
              <th>WH</th>
              <th>GRAND TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                mbrTable1.map((mbr, index) => {
                  return <tr>
                    <td>{mbr.months}</td>
                    <td>{mbr.port}</td>
                    <td>{mbr.wh}</td>
                    <td>{mbr.grandtotal}</td>
                  </tr>
                })
              }
              <tr  className='mbrtotal'>
                <td>Grand Total</td>
                <td>131</td>
                <td>406</td>
                <td>537</td>
              </tr>
            </>
          </tbody>
        </table>

        <table className='mbrtable'>
          <thead>
            <tr>
              <th>Months</th>
              <th>MODALITY</th>
              <th>PORT</th>
              <th>WH</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                mbrTable2.map((mbr, index) => {
                  return (
                    <tr key={index} className={`mbrtbodytr${index}`}>
                      <td className='mbrmonthbox'>{mbr.months[0]}</td>
                      <td>{mbr.modality}</td>
                      <td>{mbr.port}</td>
                      <td>{mbr.wh}</td>
                      <td>{mbr.grandtotal}</td>
                    </tr>
                  )
                })
              }
              <tr className='mbrtotal'>
                <td>JULY'23 TOTAL</td>
                <td></td>
                <td>131</td>
                <td>406</td>
                <td>1040</td>
              </tr>

              {
                mbrTable2.map((mbr, index) => {
                  return (
                    <tr key={index} className={`mbrtbodytr${index}`}>
                      <td className='mbrmonthbox'>{mbr.months[1]}</td>
                      <td>{mbr.modality}</td>
                      <td>{mbr.port}</td>
                      <td>{mbr.wh}</td>
                      <td>{mbr.grandtotal}</td>
                    </tr>
                  )
                })
              }
              <tr className='mbrtotal'>
                <td>AUG'23 TOTAL</td>
                <td></td>
                <td>131</td>
                <td>406</td>
                <td>1040</td>
              </tr>

              {
                mbrTable2.map((mbr, index) => {
                  return (
                    <tr key={index} className={`mbrtbodytr${index}`}>
                      <td className='mbrmonthbox'>{mbr.months[2]}</td>
                      <td>{mbr.modality}</td>
                      <td>{mbr.port}</td>
                      <td>{mbr.wh}</td>
                      <td>{mbr.grandtotal}</td>
                    </tr>
                  )
                })
              }
              <tr className='mbrtotal'>
                <td>SEP'23 TOTAL</td>
                <td></td>
                <td>131</td>
                <td>406</td>
                <td>1040</td>
              </tr>
            </>
          </tbody>
        </table>

        <table className='mbrtable'>
          <thead>
            <tr>
              <th>DESTINATION REGION</th>
              <th>DESTINATION STATE</th>
              <th>PORT</th>
              <th>WH</th>
              <th>GRAND TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <>
              {Central.map((data, index) => {
                return (
                  <tr key={index} className={`mbrtbodytr${index}`}>
                    <td className='mbrmonthbox'>{data.destination}</td>
                    <td>{data.state}</td>
                    <td>{data.port}</td>
                    <td>{data.wh}</td>
                    <td>{data.grandtotal}</td>
                  </tr>
                )
              })}
              <tr className='mbrtotal'>
                <td>CENTRAL TOTAL</td>
                <td></td>
                <td>134</td>
                <td>13</td>
                <td>112</td>
              </tr>
              {East.map((data, index) => {
                return (
                  <tr key={index} className={`mbrtbodytr${index}`}>
                    <td className='mbrmonthbox'>{data.destination}</td>
                    <td>{data.state}</td>
                    <td>{data.port}</td>
                    <td>{data.wh}</td>
                    <td>{data.grandtotal}</td>
                  </tr>
                )
              })}
              <tr className='mbrtotal'>
                <td>EAST TOTAL</td>
                <td></td>
                <td>134</td>
                <td>13</td>
                <td>112</td>
              </tr>
              {North.map((data, index) => {
                return (
                  <tr key={index} className={`mbrtbodytr${index}`}>
                    <td className='mbrmonthbox'>{data.destination}</td>
                    <td>{data.state}</td>
                    <td>{data.port}</td>
                    <td>{data.wh}</td>
                    <td>{data.grandtotal}</td>
                  </tr>
                )
              })}
              <tr className='mbrtotal'>
                <td>NORTH TOTAL</td>
                <td></td>
                <td>134</td>
                <td>13</td>
                <td>112</td>
              </tr>
              {South.map((data, index) => {
                return (
                  <tr key={index} className={`mbrtbodytr${index}`}>
                    <td className='mbrmonthbox'>{data.destination}</td>
                    <td>{data.state}</td>
                    <td>{data.port}</td>
                    <td>{data.wh}</td>
                    <td>{data.grandtotal}</td>
                  </tr>
                )
              })}
              <tr className='mbrtotal'>
                <td>SOUTH TOTAL</td>
                <td></td>
                <td>134</td>
                <td>13</td>
                <td>112</td>
              </tr>
              {West.map((data, index) => {
                return (
                  <tr key={index} className={`mbrtbodytr${index}`}>
                    <td className='mbrmonthbox'>{data.destination}</td>
                    <td>{data.state}</td>
                    <td>{data.port}</td>
                    <td>{data.wh}</td>
                    <td>{data.grandtotal}</td>
                  </tr>
                )
              })}
              <tr className='mbrtotal'>
                <td>WEST TOTAL</td>
                <td></td>
                <td>134</td>
                <td>13</td>
                <td>112</td>
              </tr>
            </>
          </tbody>
        </table>

      </div >
    </div >
  )
}

export default OriginStatewisePort