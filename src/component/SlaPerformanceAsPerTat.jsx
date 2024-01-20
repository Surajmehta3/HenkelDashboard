import React, { useState } from 'react'

const SlaPerformanceAsPerTat = () => {
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
      <div className="mbrhead">
        <div className="">
          <h1>
            SLA SUMMARY-JULY'23 TO SEP'23 <br />
            (SLA PERFORMANCE AS PER TAT-300KM / DAY FOR AIR SUSPENSION VEHICLES<br/>
            400KM / DAY FOR NORMAL VEHICLE)
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>INCLUDING APML DELAY</td>
                <td>100%</td>
                <td>98%</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>INCLUDING ALL DELAY</td>
                <td>98%</td>
                <td>94%</td>
                <td>87%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='mbrtablebox' style={{ gap: "0" }}>
        <table className='mbrtable' style={{ minWidth: "100%" }}>
        
          <thead>
            <tr>
              <th>Destination State</th>
              <th>BEFORE TAT</th>
              <th>DELAY BY APML</th>
              <th>DELAY BY SHPL</th>
              <th>ON TIME</th>
              <th>TOTAL</th>
              <th>SLA %</th>

              <th>BEFORE TAT</th>
              <th>DELAY BY APML</th>
              <th>DELAY BY SHPL</th>
              <th>ON TIME</th>
              <th>TOTAL</th>
              <th>SLA %</th>

              <th>BEFORE TAT</th>
              <th>DELAY BY APML</th>
              <th>DELAY BY SHPL</th>
              <th>DELAY DUE TO FORCE MAJEURE</th>
              <th>HOLD</th>
              <th>ON TIME</th>
              <th>TOTAL</th>
              <th className='mbrgrandtotal'>SLA %</th>
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
                          <td className='mbrtotal'>{data.july.total}</td>

                          <td>{data.aug.cathlab}</td>
                          <td>{data.aug.ct}</td>
                          <td>{data.aug.lbo}</td>
                          <td>{data.aug.mi}</td>
                          <td>{data.aug.mimrihlab}</td>
                          <td className='mbrtotal'>{data.aug.total}</td>

                          <td>{data.sep.cathlab}</td>
                          <td>{data.sep.ct}</td>
                          <td>{data.sep.lbo}</td>
                          <td>{data.sep.mi}</td>
                          <td>{data.sep.mimrihlab}</td>
                          <td>{data.sep.others}</td>
                          <td>{data.sep.xp}</td>
                          <td className='mbrtotal'>{data.sep.total}</td>
                          {/* <td className='mbrgrandtotal'>{data.sep.grandtotal}</td> */}
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
              </tr>
            </>
          </tbody>
        </table>
      </div >
    </div >
  )
}

export default SlaPerformanceAsPerTat