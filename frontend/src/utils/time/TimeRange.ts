

type dateObject = {
    label : string,
    value : number
}


export const TimeRange = (start : number, end : number) => {

    let arr : dateObject[] = []

    for (let i=start; i<=Number(end); i++) {
        if (i===0) {
            arr.push({label : `${String(12) + ":00   AM"} `, value : Number(i)})
        } else if (i >= 13 && i <= 23) {
            arr.push({label : `${String(i-12) + ":00   PM"} `, value : Number(i)})
        } else if (i === 12) {
            arr.push({label : `${String(i) + ":00   PM"} `, value : Number(i)})
        } else {
            arr.push({label : `${String(i) + ":00   AM"} `, value : Number(i)})
        }
        
    }

    return arr

}

export const DateObjConverrer = (date : Date) : String[] => {
    let hour = 0;
    let minute = 0
    let time = ""
    let month = ""
    let year = 0
    let AM_PM = "AM"
    let dateFinal = ""
    if (date.getHours() === 0 ) {
        hour = 12 
        AM_PM = "AM"
        time = String(hour) + ":" + String(minute) + String(minute) + " " + String(AM_PM)
    } else if ((Number(date.getHours()) >= Number(13)) && (Number(date.getHours()) <= 23)) {
        hour = Number(date.getHours()) - 12
        AM_PM = "PM"
        time  = String(hour) + ":" + String(minute) + String(minute) + " " + String(AM_PM)
        
    } else if (date.getHours() === 12) {

        hour = 12
        AM_PM = "PM"
        time  = String(hour) + ":" + String(minute) + String(minute) + " " + String(AM_PM)
        
    } else {
        hour = Number(date.getHours())
        AM_PM = "AM"
        time = String(hour) + ":" + String(minute) + String(minute) + " " + String(AM_PM)
    }

    year = Number(date.getFullYear())

    if (date.getMonth() == 0) {
        month = "Jan"
    }
    if (date.getMonth() == 1) {
        month = "Feb"
    }
    if (date.getMonth() == 2) {
        month = "Mar"
    }
    if (date.getMonth() == 3) {
        month = "Apr"
    }
    if (date.getMonth() == 4) {
        month = "May"
    }
    if (date.getMonth() == 5) {
        month = "Jun"
    }
    if (date.getMonth() == 6) {
        month = "Jul"
    }
    if (date.getMonth() == 7) {
        month = "Aug"
    }
    if (date.getMonth() == 8) {
        month = "Sep"
    }
    if (date.getMonth() == 9) {
        month = "Oct"
    }
    if (date.getMonth() == 10) {
        month = "Nov"
    }
    if (date.getMonth() == 11) {
        month = "Dec"
    }

    dateFinal = String(date.getDate()) + " " + String(month) + " " + String(year)

    return [dateFinal, time]


}