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

export {Temperature, Capitalize}

