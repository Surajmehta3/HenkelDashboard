import React, { useState } from 'react'

const CapaMeasure = () => {
  const [isOneMonth, setIsOneMonth] = useState(true);
  const [isTwoMonth, setIsTwoMonth] = useState(true);
  const [isThreeMonth, setIsThreeMonth] = useState(true);


  return (
    <div className='mbrcontainer'>
      <div className="mbrhead" style={{ gap: "20rem" }}>
        <div className="">
          <h1>
            CAPA MEASURE - SEP'23
          </h1>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>CAPA MEASURE TAG</th>
                <th>SEP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BOXES DAMAGED REPAIRED</td>
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
              <th>GC NO</th>
              <th>BOOKING DATE</th>
              <th>ESCALATED BY</th>
              <th>ORIGIN</th>
              <th>DEST</th>
              <th>MODALITY</th>
              <th>C/NEE NAME</th>
              <th>CAPA MEASURE</th>
              <th>ESCALATION</th>
              <th>ROUTE CAUSE</th>
              <th>CORRECTIVE ACTION</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>SEP'23</td>
            <td>GCBHND4545454</td>
            <td>22-09-2023</td>
            <td>MR. Chintamani</td>
            <td>bhiwandi</td>
            <td>patna</td>
            <td>ct</td>
            <td>mahavir cancer sansthan</td>
            <td>Damaged received at unloading point</td>
            <td>boxes damaged received</td>
            <td>  outer boxes damaged at the time of unloading</td>
            <td>ensure proper handling and loading unloading procedure</td>
          </tr>
          <tr>
            <td>SEP'23</td>
            <td>GCBHND4545454</td>
            <td>22-09-2023</td>
            <td>MR. Adinath</td>
            <td>bhiwandi</td>
            <td>patna</td>
            <td>ct</td>
            <td>mahavir cancer sansthan</td>
            <td>Damaged received at unloading point</td>
            <td>boxes damaged received</td>
            <td>  outer boxes damaged at the time of unloading</td>
            <td>ensure proper handling and loading unloading procedure</td>
          </tr>

          </tbody>
        </table>
      </div >
    </div >
  )
}

export default CapaMeasure