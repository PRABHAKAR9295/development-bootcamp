

function calculate_ticket_price(dateTimeStr){
    let finalPrice;
    if (typeof dateTimeStr !== 'string'){
        return
    }
    // Default price
    let ticketprice = 20;
    
    let week = ["sun","mon","tue","wed","thu","fri","sat"]

    let weekDay = new Date(dateTimeStr).getDay()
    // console.log(weekDay, week[weekDay])

    switch(week[weekDay]){
        case "sun":
            finalPrice = ticketprice + ticketprice * 10/100;
            break;
        // case "mon":
        //     finalPrice = ticketprice;
        //     break;
        case "tue":
            finalPrice = ticketprice + ticketprice * 20/100;
            break;
        case "wed":
            finalPrice = ticketprice + ticketprice * 30/100;
            break;
        case "thu":
            finalPrice = ticketprice + ticketprice * 40/100;
            break;
        case "fri":
            finalPrice = ticketprice + ticketprice * 50/100;
            break;
        case "sat":
            finalPrice = ticketprice + ticketprice * 60/100;
            break;
        default:
            finalPrice = ticketprice;

    }
    return finalPrice
}

function submit() {
    // event.preventdefault()
    let name = document.getElementById("name").value;
    let dateTimeInput = document.getElementById("dateTimeInput");
    let ticketFinalPrice = calculate_ticket_price(dateTimeInput.value);
    if (ticketFinalPrice === undefined) {
        console.log("Enter a date in string format eg: 1970-01-01");
    }else{
        // alert(`
        //     Name: ${name} 
        //     Ticket Price: Rs. ${ticketFinalPrice}
        // `);
        console.log(`
            Name: ${name} 
            Ticket Price: Rs. ${ticketFinalPrice}
             Date: ${dateTimeInput.value}
        `);

        document.getElementById("ticket_details").innerHTML = `
            Name: <b>${name}</b> <br />
            Ticket Price: <b>${ticketFinalPrice}</b> <br />
            Date: <b>${dateTimeInput.value}</b>
        `;
    }
}

