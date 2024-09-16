



export const TimewiseUrlCreater = ({startTimeParam, endTimeParam, locationIdParam, companyIdParam, urlParam} : {startTimeParam : string, endTimeParam : string, locationIdParam : number | undefined, companyIdParam : number | undefined, urlParam : string}) => {
    
    
    
    let locationIdParamTosend : string | undefined = undefined

    if (locationIdParam) {
      locationIdParamTosend = String(locationIdParam)
    }

    let companyIdParamTosend : string | undefined = undefined

    if (companyIdParam) {
      companyIdParamTosend = String(companyIdParam)
    }

    let url = ""
    
    if (companyIdParamTosend && locationIdParamTosend) {
        url = urlParam + `/?startTime=${startTimeParam}` + `&endTime=${endTimeParam}` + `&locationId=${locationIdParamTosend}` + `&companyId=${companyIdParamTosend}`
    }

    if (!companyIdParamTosend && locationIdParamTosend) {
      url = urlParam + `/?startTime=${startTimeParam}` + `&endTime=${endTimeParam}` + `&locationId=${locationIdParamTosend}`
    }
    if (companyIdParamTosend && !locationIdParamTosend) {
      url = urlParam + `/?startTime=${startTimeParam}` + `&endTime=${endTimeParam}` + `&companyId=${companyIdParamTosend}`
    }

    if (!companyIdParamTosend && !locationIdParamTosend) {
      url = urlParam + `/?startTime=${startTimeParam}` + `&endTime=${endTimeParam}`
  }
    
  return url
    
}