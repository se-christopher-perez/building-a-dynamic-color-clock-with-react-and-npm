
import React, { useState, useEffect } from "react"
import { format } from "date-fns"
import "./App.css"

function App() {

  const [realTime, setRealTime] = useState(new Date())

  useEffect(() => {

    const clock = setInterval(() => {

      setRealTime(new Date())

    }, 1000)

    return () => clearInterval(clock)

  }, [])

  return (

    <>
      <div id="clock-container">

        <p className="clock-day-time">{format(realTime, "eeee, MMMM do, yyyy")}</p>
        <p className="clock-day-time">{format(realTime, "HH:mm:ss")}</p>

      </div>

    </>

  )
}

export default App
