/*Write a function findTopServers which accepts an array of objects,
then returns an array containing the names of the top three servers for the week.
The input array is sorted from lowest to highest number of extras sold. Each object has name and count properties,
and a minimum of three servers work each week.*/

    //. declare function :\
function findTopServers(arr)
        {
//.. declare my push location
            let topServers = [];
//... push arr length from lowest to higest starting with -3 into your empty arr
            topServers.push(arr[arr.length-3].name)
            topServers.push(arr[arr.length-2].name)
            topServers.push(arr[arr.length-1].name)
            return topServers
        }