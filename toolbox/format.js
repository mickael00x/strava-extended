var format = {};

format.formatActivityDate = (date) => {
    let formatedDate = date.split("T")[0];
    let year = formatedDate.split("-")[0];
    let month = formatedDate.split("-")[1];
    let day = formatedDate.split("-")[2];
    return `${day + "/" + month + "/" + year}`;
} 

format.formatMovingTime = (moving_time) => {
    let movingTime = Number((moving_time / 60).toFixed(0));
    return movingTime > 60 ? "1h" + (movingTime - 60).toFixed(0) + "m" : movingTime + "min";
}

format.formatActivityType = (type) => {
    const types = {
        "Run"      : "🏃🏻",
        "Ride"     : "🚴🏼",
        "Hike"     : "🥾",
        "TrailRun" : "⛰️"
    }
    
    return types[type];
}

export default format;