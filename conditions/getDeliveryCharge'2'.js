/*Due to the success of the initial delivery model, Caelin's is expanding its delivery. 
They'll deliver to nearby locations for $5. They call this Express Delivery. 
They'll also offer Reach Delivery to an extended area for $15.
Create the function getDeliveryCharge, which accepts these parameters:
orderPostalCode: a string for the requested delivery location.
deliveryPostalCodes: An object which contains two arrays of zip codes:
express: an array of strings containing all the zip codes for which Express Delivery is available.
reach: an array of strings containing all the zip codes for which Reach Delivery is available.
getDeliveryCharge returns the delivery charge in dollars:
$5 for Express Delivery
$15 for Reach Delivery
null if no delivery is available*/
function getDeliveryCharge (orderCode, currentCode){
    const EXPRESS_COST = 5;
    const REACH_COST = 15;
    if(currentCode.express.indexOf(orderCode) !== -1){
        return EXPRESS_COST;
    } else if(currentCode.reach.indexOf(orderCode) !== -1){
        return REACH_COST;
    }else{
        return null;
    }
}
