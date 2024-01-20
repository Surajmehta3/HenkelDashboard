import React, { useState } from 'react'

const DestinationStatewiseModality = () => {
  const [isOneMonth, setIsOneMonth] = useState(true);
  const [isTwoMonth, setIsTwoMonth] = useState(true);
  const [isThreeMonth, setIsThreeMonth] = useState(true);


  const tableData1 = [
    {
      destinationstate: "J & K",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Andhra Pradesh",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Assam",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Bihar",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Chattisgarh",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Delhi",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Goa",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Gujarat",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Haryana",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Jharkhand",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Karnataka",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Kerla",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Madhya Pradesh",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Maharashtra",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Nepal",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Odisa",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Punjab",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Rajasthan",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Tamilnadu",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Telanagana",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Uttar Pradesh",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "Uttarakhand",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
    {
      destinationstate: "West Bangal",
      july: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      aug: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
      },
      sep: {
        cathlab: Math.floor(Math.random() * 100),
        ct: Math.floor(Math.random() * 100),
        lbo: Math.floor(Math.random() * 100),
        mi: Math.floor(Math.random() * 100),
        mimrihlab: Math.floor(Math.random() * 100),
        others: Math.floor(Math.random() * 100),
        xp: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 100),
        grandtotal: Math.floor(Math.random() * 100),
      }
    },
  ];

  return (
    <div className='mbrcontainer'>
      <div className="">
        <div className="">
          <h1>
            SHIPEMENT SUMMARY - DESTINATION STATEWISE / (MODALITY) JULY'23 TO SEP'23 <br />
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

      <div className='mbrtablebox' style={{ gap: "0" }}>
        <table className='mbrtable' style={{ minWidth: "100%" }}>
        
          <thead>
            <tr>
              <th>Destination State</th>
              <th>Cathlab</th>
              <th>CT</th>
              <th>LBO</th>
              <th>MI</th>
              <th>MI/MRI</th>
              <th>OTHERS</th>
              <th>XP</th>
              <th>JULY'23 TOTAL</th>

              <th>Cathlab</th>
              <th>CT</th>
              <th>LBO</th>
              <th>MI</th>
              <th>MI/MRI</th>
              <th>OTHERS</th>
              <th>XP</th>
              <th>AUG'23 TOTAL</th>

              <th>Cathlab</th>
              <th>CT</th>
              <th>LBO</th>
              <th>MI</th>
              <th>MI/MRI</th>
              <th>OTHERS</th>
              <th>XP</th>
              <th>SEP'23 TOTAL</th>
              <th className='mbrgrandtotal'>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                isOneMonth &&
                <>
                  {
                    tableData1.map((data, index) => {
                      return (
                        <tr key={index} className={`mbrtbodytr${index}`}>
                          <td >{data.destinationstate}</td>
                          <td>{data.july.cathlab}</td>
                          <td>{data.july.ct}</td>
                          <td>{data.july.lbo}</td>
                          <td>{data.july.mi}</td>
                          <td>{data.july.mimrihlab}</td>
                          <td>{data.july.others}</td>
                          <td>{data.july.xp}</td>
                          <td className='mbrtotal'>{data.july.total}</td>

                          <td>{data.aug.cathlab}</td>
                          <td>{data.aug.ct}</td>
                          <td>{data.aug.lbo}</td>
                          <td>{data.aug.mi}</td>
                          <td>{data.aug.mimrihlab}</td>
                          <td>{data.aug.others}</td>
                          <td>{data.aug.xp}</td>
                          <td className='mbrtotal'>{data.aug.total}</td>

                          <td>{data.sep.cathlab}</td>
                          <td>{data.sep.ct}</td>
                          <td>{data.sep.lbo}</td>
                          <td>{data.sep.mi}</td>
                          <td>{data.sep.mimrihlab}</td>
                          <td>{data.sep.others}</td>
                          <td>{data.sep.xp}</td>
                          <td className='mbrtotal'>{data.sep.total}</td>
                          <td className='mbrgrandtotal'>{data.sep.grandtotal}</td>
                        </tr>
                      )
                    })
                  }
                </>
              }

              <tr className='mbrgrandtotal'>
                <td>Grand total</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
                <td>{Math.floor(Math.random()*100)}</td>
              </tr>
            </>
          </tbody>
        </table>

        {/* <table className='mbrtable'>
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
                    <td>JULYS'23 TOTAL</td>
                    <td></td>
                    <td>134</td>
                    <td>10</td>
                    <td>112</td>
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
                    <td>AUG'23 TOTAL</td>
                    <td></td>
                    <td>134</td>
                    <td>13</td>
                    <td>112</td>
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
                    <td>SEP'23 TOTAL</td>
                    <td></td>
                    <td>134</td>
                    <td>154</td>
                    <td>112</td>
                  </tr>
                </>
              }

              <tr className='mbrgrandtotal'>
                <td>Grand total</td>
                <td></td>
                <td>640</td>
                <td>640</td>
                <td>1000</td>
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
        </table> */}

      </div >
    </div >
  )
}

export default DestinationStatewiseModality