const Temperature = (temp) => {
    const tempFormat = `${temp | 0} °C`
    return tempFormat
}

const Capitalize = (str) => {
    const arr = str.split(" ")

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }

    const capString = arr.join(" ")
    return capString
}

const DateTime = () => {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const dateTime = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`

    return dateTime
}

const DayToWeek = (date) => {
    const objData = new Date(date)
    let day = objData.getDay()

    switch (day) {
        case 0:
            day = "Dom."
            break;
        case 1:
            day = "Seg."
            break;
        case 2:
            day = "Ter."
            break;
        case 3:
            day = "Qua."
            break;
        case 4:
            day = "Qui."
            break;
        case 5:
            day = "Sex."
            break;
        case 6:
            day = "Sáb."
            break;
    }
    
    return day
}

const DayToDay = (date) => {
    const dayTime = date.split(" ")
    const day = dayTime[0].split("-")

    return `${day[2]}/${day[1]}`
}

export {Temperature, Capitalize, DateTime, DayToWeek, DayToDay}

