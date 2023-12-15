import { compare } from "./compare";

function eventsCurrentFilter(events, bool){
    let currArr =[];
    let pastArr =[];
    let now = Date.now();
    for (let i = 0; i < events.length; i++) {
    let dateEvent = events[i]['date_end'] || events[i]['date_start'] || 'unknown';
    if(dateEvent === 'unknown') continue;
    let timeStamp = Date.parse(dateEvent);

    if(
        (timeStamp - now) > -86400000
    ){
        currArr.push(events[i]);
    }else{
        pastArr.push(events[i]);
    }
}
        if(!bool){
            currArr.sort(compare).reverse();
            return currArr;
        }else{
            pastArr.sort(compare);
            return pastArr;
        }
};

export {eventsCurrentFilter}