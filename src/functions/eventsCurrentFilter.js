const eventsCurrentFilter = (events, bool) => {
    let currArr =[];
    let pastArr =[];
    events.map((event) => {
    let now = Date.now();
    let dateEvent = event.date_end || event.date_start;
    let eventYear = +(dateEvent.match(/\/(\d\d\d\d)$/)[1]);
    let eventMonth = +(dateEvent.match(/^(\d\d)\//)[1]);
    let eventDay = +(dateEvent.match(/\/(\d\d)\//)[1]);
    let eventTime = eventYear + '-' + eventMonth + '-' + eventDay;
    let timeStamp = Date.parse(eventTime);
    if(
        (timeStamp - now) >= 0
    ){
        currArr.push(event);
    }else{
        pastArr.push(event);
    }
    return event;
})
        if(!bool){
            return currArr;
        }else{
            return pastArr;
        }
};

export {eventsCurrentFilter}