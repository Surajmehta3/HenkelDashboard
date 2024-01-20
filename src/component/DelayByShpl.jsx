import React, { useState } from 'react'

const DelayByShpl = () => {
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
    currentstatus:"Delivered",
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
    currentstatus:"Delivered",
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
    currentstatus:"Delivered",
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
    currentstatus:"Delivered",
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
    currentstatus:"Delivered",
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
    currentstatus:"Delivered",
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
    currentstatus:"Delivered",
      remark: "in transit delay"
    
    }
  ]


  return (
    <div className='mbrcontainer'>
      <div className="mbrhead" style={{ gap: "20rem" }}>
        <div className="">
          <h1>
            DELAY BY SHPL / JULY'23 TO SEP'23
          </h1>
        </div>

      
      </div>
      <div className='mbrtablebox' style={{ gap: "0" }}>
        <table className='mbrtable' style={{ minWidth: "100%",minHeight:"400px",maxHeight:"400px" }}>

          <thead>
            <tr>
              <th>GC/LR DATE</th>
              <th>CONTACT PERSON</th>
              <th>PICKUP</th>
              <th>DESTINATION</th>
              <th>MODALITY</th>
              <th>ETA AS PER TAT</th>
              <th>Current Status</th>
              <th>DELIVERY DATE</th>
              <th>DELAY/BEFORE IN DAYS</th>
              <th>CONSIGNEE NAME</th>
              <th>REMARK</th>
            </tr>
          </thead>
          <tbody>
          <>
          {
            augData.map((aug, index)=>{
          return    <tr>
                <td>{aug.gclrdate}</td>
                <td>{aug.contactperson}</td>
                <td>{aug.pickup}</td>
                <td>{aug.destination}</td>
                <td>{aug.modality}</td>
                <td>{aug.eta}</td>
                <td>{aug.currentstatus}</td>
                <td>{aug.deliverydate}</td>
                <td>{aug.delayday}</td>
                <td>{aug.consignee}</td>
                <td>{aug.remark}</td>
              </tr>
            })
          }
           {
            aug.map((aug, index)=>{
          return    <tr>
                <td>{aug.gclrdate}</td>
                <td>{aug.contactperson}</td>
                <td>{aug.pickup}</td>
                <td>{aug.destination}</td>
                <td>{aug.modality}</td>
                <td>{aug.eta}</td>
                <td>{aug.currentstatus  }</td>
                <td>{aug.deliverydate}</td>
                <td>{aug.delayday}</td>
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

export default DelayByShpl