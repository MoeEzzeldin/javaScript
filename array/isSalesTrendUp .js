/* Write a function isSalesTrendUp which accepts an array containing
the last four weekly sales amounts (from oldest to newest), then returns
a Boolean indicating whether each weekly sales amount is greater than or equal to the previous values.*/
//... declare function
function isSalesTrendUp(sales)
    {
//... return boolean value indicating if the sales trend is up in 4 weeks
        return sales[1] >= sales[0]
            && sales[2] >= sales[1]
            && sales[3] >= sales[2]
    }