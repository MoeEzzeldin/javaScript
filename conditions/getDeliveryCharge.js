/*Create the function getDeliveryCharge, which accepts these parameters:
orderPostalCode: a string for the requested delivery location
deliveryPostalCodes: an array of strings containing all the zip codes to which Caelin's Pizza delivers
getDeliveryCharge returns the delivery charge in dollars:
10 if the orderPostalCode is one of the deliveryPostalCodes
null if it's not, meaning no delivery is available*/
function getDeliveryCharge (orderCode, currentCode){
    let deliveryCost = 10;
    if(currentCode.indexOf(orderCode) !== -1){
        return deliveryCost;
    } else {
        return null;
    }
}