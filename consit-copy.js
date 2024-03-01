


const age=14;
const price=500;


if (age<=15) {
    console.log('You can eat to free')
}

else if (age<=10) {
    //discount 25%
    const discount = price * 25/100
    const payAmount= price - discount
    console.log("You must pay in TAKA " + payAmount )
}

else if (age<=17) {
    //discount 50%
    const discount= price * 50/100
    const payAmount= price - discount
    console.log("You must pay in Taka " + payAmount)
}

else{
    console.log(price);
}