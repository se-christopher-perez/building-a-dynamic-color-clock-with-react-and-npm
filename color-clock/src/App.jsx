
import React, { useState, useEffect } from "react"
import { format } from "date-fns"
import "./App.css"

function App() {

  const [realTime, setRealTime] = useState(new Date())
  const [textColor, setTextColor] = useState("#000000")
  const [containerColor, setContainerColor] = useState("#ffffff")

  const randomColor = () => {

    const hex = "0123456789ABCDEF"
    let code = "#"

    for (let i = 0; i < 6; i++) {

      code += hex[Math.floor(Math.random() * 16)]

    }

    return code

  }

  useEffect(() => {

    const clock = setInterval(() => {

      setRealTime(new Date())
      setTextColor(randomColor())
      setContainerColor(randomColor())

    }, 1000)

    return () => clearInterval(clock)

  }, [])

  return (

    <>
      <div id="clock-container" style={{ color: textColor, backgroundColor: containerColor, borderColor: textColor }}>

        <p className="clock-day-time">{format(realTime, "eeee, MMMM do, yyyy")}</p>
        <p className="clock-day-time">{format(realTime, "HH:mm:ss")}</p>

      </div>

    </>

  )
}

export default App
