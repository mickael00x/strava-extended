
import { useCallback, useState } from "react";
import { BsFillGearFill } from "react-icons/bs";

const Settings = ({map, handleMap, rows, handleRows}) => {
    
    return <>
        <BsFillGearFill /> 
        <div className="input-field map-field">
            <input onChange={handleMap} type="checkbox" name="map" value="map" checked={map}/>
            <label>Enable map</label>
        </div>
        <div className="input-field map-field">
            <input onChange={handleRows} type="range" id="rows" name="rows"
                    min="1" max="3"/>
            <label htmlFor="rows">Rows</label>
        </div>
        
    </>
}

export default Settings;