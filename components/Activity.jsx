import dynamic from 'next/dynamic'
import format from '../toolbox/format';
const Activity = ({activity}) => {
    
    const Map = dynamic(
        () => import('./Map'), { 
          loading: () => <p>A map is loading</p>,
          ssr: false // allows "window" not to be undefined 
        }
    )

    return (
        <div className="activity flex flex-col h-full m-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded relative w-80">
            <Map coordinates={activity.coordinates} limeOptions={{color: 'red'}} />
            <div className="p-4">
                <div className="absolute z-20 shadow-inner top-2 right-2 bg-orange-500 rounded-full px-2 py-0.5 text-lg">{format.formatActivityType(activity.sport_type)}</div>
                <div className="absolute z-20 shadow-inner top-2 right-12 bg-orange-600 rounded-full px-2 py-1">{format.formatActivityDate(activity.start_date)}</div>
                <div className="font-extrabold text-lg">{activity.name}</div>
                <div>Average speed: {activity.average_speed}km/h</div>
                <div>Distance: {(activity.distance / 1).toFixed(2)}km</div>
                <div>Moving time: {format.formatMovingTime(activity.moving_time)}</div>
                <div>{activity.has_heartrate && "⌚️ : " + activity.average_heartrate + "BPM"} </div>
            </div>
        </div>
    )
}

export default Activity;
