import React from 'react'
import { useState } from 'react';

const DelayByApml = () => {
  const [isOneMonth, setIsOneMonth] = useState(true);
  const [isTwoMonth, setIsTwoMonth] = useState(true);
  const [isThreeMonth, setIsThreeMonth] = useState(true);

  const augData = [
    {
      month: "AUG'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    },
    {
      month: "AUG'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    }
  ]

  const aug = [
    {
      month: "SEP'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    },
    {
      month: "SEP'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    },
    {
      month: "SEP'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    },
    {
      month: "SEP'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    },
    {
      month: "SEP'23",
      gclrdate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      contactperson: "Mr.Jayesh",
      pickup: "bhiwandi",
      destination: "goa",
      modality: "xp",
      eta: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      deliverydate: Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100) - 2023,
      delayday: Math.floor(Math.random() * 100),
      ontime:"delay by apml",
      consignee: "Medant awadh",
      remark: "in transit delay"
    }
  ]


  return (
    <div className='mbrcontainer'>
      <div className="mbrhead" style={{ gap: "20rem" }}>
        <div className="">
          <h1>
            DELAY BY APML & FORCE MAJEURE <br />
            JULY'23 TO SEP'23
          </h1>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>MONTH</th>
                <th>JULY</th>
                <th>AUG</th>
                <th>SEP</th>
                <th>GRAND TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DELAY BY APML</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>

              <tr>
                <td>DELAY BY SHPL</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>

              <tr>
                <td>DELAY DUE TO FORCE MAJEURE</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>

              <tr className='mbrgrandtotal'>
                <td>GRAND TOTAL</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
                <td>{Math.floor(Math.random() * 100)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='mbrtablebox' style={{ gap: "0" }}>
        <table className='mbrtable' style={{ minWidth: "100%",minHeight:"400px",maxHeight:"400px" }}>

          <thead>
            <tr>
              <th>MONTH</th>
              <th>GC/LR DATE</th>
              <th>CONTACT PERSON</th>
              <th>PICKUP</th>
              <th>DESTINATION</th>
              <th>MODALITY</th>
              <th>ETA AS PER TAT</th>
              <th>DELIVERY DATE</th>
              <th>DELAY DAYS</th>
              <th>ONTIME/DELAY</th>
              <th>CONSIGNEE NAME</th>
              <th>REMARK</th>
            </tr>
          </thead>
          <tbody>
          <>
          {
            augData.map((aug, index)=>{
          return    <tr>
                <td>{aug.month}</td>
                <td>{aug.gclrdate}</td>
                <td>{aug.contactperson}</td>
                <td>{aug.pickup}</td>
                <td>{aug.destination}</td>
                <td>{aug.modality}</td>
                <td>{aug.eta}</td>
                <td>{aug.deliverydate}</td>
                <td>{aug.delayday}</td>
                <td>{aug.ontime}</td>
                <td>{aug.consignee}</td>
                <td>{aug.remark}</td>
              </tr>
            })
          }
           {
            aug.map((aug, index)=>{
          return    <tr>
                <td>{aug.month}</td>
                <td>{aug.gclrdate}</td>
                <td>{aug.contactperson}</td>
                <td>{aug.pickup}</td>
                <td>{aug.destination}</td>
                <td>{aug.modality}</td>
                <td>{aug.eta}</td>
                <td>{aug.deliverydate}</td>
                <td>{aug.delayday}</td>
                <td>{aug.ontime}</td>
                <td>{aug.consignee}</td>
                <td>{aug.remark}</td>
              </tr>
            })
          }
          </>
          </tbody>
        </table>
      </div >
    </div >
  )
}

export default DelayByApml