
import { useCallback, useState } from "react";
import { BsFillGearFill, BsXCircle } from "react-icons/bs";

const Settings = ({map, handleMap, rows, handleRows, type, handleType, heartrate, handleHeartRate}) => {
    const [showSettingsMenu, setShowSettingsMenu] = useState(true);
    const handleClick = () => setShowSettingsMenu(!showSettingsMenu);

    return <div className="settings fixed top-8 left-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded p-7 z-50 shadow-xl">
        <div className="flex items-center mb-3">
            <BsFillGearFill className="text-2xl mr-2"/> 
            <h2 className=" text-3xl font-bold">Settings</h2>
            <BsXCircle onClick={handleClick} className="absolute text-xl top-3 right-3 cursor-pointer"/>
        </div>
        <div className="flex items-center justify-between h-full input-field map-field py-2">
            <label>Enable map</label>
            <input onChange={handleMap} type="checkbox" name="map" value="map" checked={map}/>
        </div>
        <div className="flex items-center justify-between h-full input-field map-field border-t border-white-300 py-2">
            <label htmlFor="rows"> {rows} Rows</label>
            <input className="ml-5" onChange={handleRows} type="range" id="rows" name="rows"
                    min="1" max="3"/>
        </div>
        <div className="flex items-center justify-between h-full input-field type-field border-t border-white-300 py-2">
            <label htmlFor="type">{ type ? "Hide" : "Show"} type</label>
            <input onChange={handleType} type="checkbox" name="type" value="type" checked={type}/>
        </div>
        <div className="flex items-center justify-between h-full input-field type-field border-t border-white-300 py-2">
            <label htmlFor="heartrate">{ heartrate ? "Hide" : "Show"} heartrate</label>
            <input onChange={handleHeartRate} type="checkbox" name="heartrate" value="heartrate" checked={heartrate}/>
        </div>
    </div>
}

export default Settings;