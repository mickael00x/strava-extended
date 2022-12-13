import { useEffect, useState, useCallback } from "react"; 
import Activity from "./Activity";
import polyline from "../toolbox/polylineDecoder"; 
import Settings from "./Settings";

const ActivitiesData = () => {
    const [accessToken, setAccessToken] = useState("");
    const [activities, setActivities] = useState([]);

    const generateAccessToken = () => {
        fetch("https://www.strava.com/oauth/token", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client_id: '71911',
                client_secret: '51a4006b0d57df03f843e3bc1b5cefc31f28e8ba',
                refresh_token: '23a5bfae16baafe79a021f4e9e246ee50a844199',
                grant_type: 'refresh_token'	
            })
        })
            .then(res => res.json() )
            .then(res => {
                return setAccessToken(res.access_token);
            }).catch(error => { console.log(error); })
    }

    const decodePolyline = (string) => {
        let decodedPolyline = polyline.decode(string);
        return decodedPolyline;
    }
    

    useEffect(() => {
        generateAccessToken();
        if(!accessToken) return;
        fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`)
            .then(response => response.json())
            .then( (data) => {
                let formatedData = [...data];
                formatedData.forEach((activity) => {

                    activity.coordinates = decodePolyline(activity.map.summary_polyline);
                    activity.average_speed = (activity.average_speed * 3.6).toFixed(1);
                    activity.distance = (activity.distance / 1000).toFixed(2);
                }) 
                setActivities([...data]);
            }).catch((error) => {
                console.log(error);
            }); 
    }, [accessToken]);

    

    const [map, setMap] = useState(true);
    const [rows, setRows] = useState(2);
    const [type, setType] = useState(true);
    const [heartRate, setHeartRate] = useState(true);

    const handleMap = useCallback(() => {
        return setMap(!map);
    }, [map]);

    const handleRows = useCallback((e) => {
        return setRows(Number(e.target.value));
    }, []);

    const handleType = useCallback(() => {
        return setType(!type);
    }, [type]);
    const handleHeartRate = useCallback(() => {
        return setHeartRate(!heartRate);
    }, [heartRate]);

    return (
        <div className="activites">
            <Settings 
                handleMap={handleMap} 
                map={map}
                handleRows={handleRows} 
                rows={rows}
                type={type}
                handleType={handleType}
                heartrate={heartRate}
                handleHeartRate={handleHeartRate}
                />
            <div className={"inline-grid gap-10 grid-cols-" + rows + " transition-all"}>
                {activities && activities.map((activity, index) => (
                    <Activity 
                        key={activity.id} 
                        activity={activity} 
                        mapEnabled={map}
                        typeEnabled={type}
                        heartRateEnabled={heartRate}
                    />
                ))}
            </div>
        </div>
    )
}

export default ActivitiesData;