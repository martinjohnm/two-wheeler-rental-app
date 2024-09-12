

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