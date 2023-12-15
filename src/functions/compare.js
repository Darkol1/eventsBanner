function compare(a, b) {
    let dateA = Date.parse(a['date_end'] || a['date_start']);
    let dateB = Date.parse(b['date_end'] || b['date_start']);
   
    return dateB - dateA;
  }


export {compare}