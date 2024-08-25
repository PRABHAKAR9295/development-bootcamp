

function calculate_ticket_price(dateTimeStr){
    let finalPrice;
    if (typeof dateTimeStr !== 'string'){
        return
    }
    // Default price
    let ticketprice = 20;
    
    // console.log("dateTime: " + new Date(dateTimeStr).getDay())
    let weekDay = new Date(dateTimeStr).getDay()
    console.log(weekDay)

    switch(weekDay){
        case 0: // sunday
            finalPrice = ticketprice + ticketprice * 10/100;
            break;
        // case 1:// monday
        //     finalPrice = ticketprice;
        //     break;
        case 2: // tuesday
            finalPrice = ticketprice + ticketprice * 20/100;
            break;
        case 3:
            finalPrice = ticketprice + ticketprice * 30/100;
            break;
        case 4:
            finalPrice = ticketprice + ticketprice * 40/100;
            break;
        case 5:
            finalPrice = ticketprice + ticketprice * 50/100;
            break;
        case 6:
            finalPrice = ticketprice + ticketprice * 60/100;
            break;
        default:
            finalPrice = ticketprice;

    }
    return finalPrice
}


let ticketFinalPrice = calculate_ticket_price("2024-08-24");
if (ticketFinalPrice === undefined) {
    console.log("Enter a date in string format eg: 1970-01-01")
}else{
    console.log("Ticket Price: Rs." + ticketFinalPrice);
}


