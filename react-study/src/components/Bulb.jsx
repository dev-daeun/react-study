import React, { useState } from "react";


const Bulb = ({light}) => {
    return (
        <div>
            {light == "ON" ? <h1 style={{backgroundColor: "orange"}}>ON</h1> : <h1 style={{backgroundColor: "gray"}}>OFF</h1>}
        </div>
    )
}

const BulbButton = () => {
    const [light, setLight] = useState("OFF");
    
    return (
        <div>
            <button onClick={() => {setLight(light == "ON" ? "OFF" : "ON")}}>전구 껐다 켜기</button>
            <Bulb light = {light}/>
        </div>
    )
}
export default BulbButton;