







export const TimeDiff = (startTime : any, endTime : any) => {


    let DiffString : string = String((Math.abs(endTime - startTime) / 86400000));

    let DiffNumArr : number[] = []

    const DiffNumber = Number(DiffString)

    const timeSplit = DiffString.toString()

    const timeArrsplited = timeSplit.split(".")

    console.log(timeArrsplited);
    

    if (timeArrsplited[0] == "0" ) {
        

        DiffString = String(Number( "." + timeArrsplited[1]) * 24) + " Hour"

        DiffNumArr.push(0)
        DiffNumArr.push(Math.round( Number("." + timeArrsplited[1]) * 24))


    } else if (timeArrsplited[0] == "1" && !timeArrsplited[1]) {
        
        DiffString = (timeArrsplited[0]) + " Day"
        DiffNumArr.push(1)
        DiffNumArr.push(0)
    } else if (timeArrsplited[0] != "0" && !timeArrsplited[1]){
        DiffString = (timeArrsplited[0]) + " Days"
        DiffNumArr.push(Number(timeArrsplited[0]))
        DiffNumArr.push(0)
    }else {

        let hours = String(Math.round(Number( "." + timeArrsplited[1]) * 24))
        const hour = hours.split(".")[0]
        DiffString = (timeArrsplited[0]) + " Day & " + String(hour) + " Hour"

        DiffNumArr.push(Number(timeArrsplited[0]))
        DiffNumArr.push(Number(hour))
    }
    
    let totalHours = DiffNumArr[0] * 24 + DiffNumArr[1]
    
    return {DiffString, DiffNumber, DiffNumArr, totalHours}
}