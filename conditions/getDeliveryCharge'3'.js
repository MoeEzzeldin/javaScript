/*Create the function getDeliveryCharge, which accepts these parameters:
orderPostalCode: a string for the requested delivery location.
orderTotal: A number representing the order amount, not including delivery charge.
deliveryPostalCodes: An object which contains two arrays of zip codes:
express: an array of strings containing all the zip codes for which Express Delivery is available.
reach: an array of strings containing all the zip codes for which Reach Delivery is available.
getDeliveryCharge returns the delivery charge in dollars:
5 for Express Delivery.
However, if orderTotal is $30 or more, delivery is free, so return 0.
15 for Reach Delivery.
However, if orderTotal is $75 or more, delivery is free, so return 0.
null if no delivery is available*/
function getDeliveryCharge (orderCode, orderTotal, currentCode)
{
    let expressCost = 5;
    let reachCost = 15;
    if (currentCode.express.indexOf(orderCode) !== -1 && orderTotal > 30)
        {
        return expressCost - 5;
        }
    else if (currentCode.express.indexOf(orderCode) !== -1 && orderTotal < 30)
        {
        return expressCost
        }
    else if(currentCode.reach.indexOf(orderCode) !== -1 && orderTotal >= 75)
        {
        return reachCost - 15;
        } 
    else if (currentCode.reach.indexOf(orderCode) !== -1 && orderTotal <= 75)
        {
        return reachCost;
        }
    else{
        return null
        }
}
