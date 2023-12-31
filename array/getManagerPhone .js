/*Sample employee object:

{
    name: 'Desi Rodriguez',
    phoneNumber: '987-654-3211'
}
To facilitate the addition of a new call manager feature, write a function getManagerPhone 
that accepts the array of employees, then returns the manager's phoneNumber. 
The manager for the day is always the first employee in the array.*/
    //.declare function 
function getManagerPhone(arr)
    {
    	//.. declare your var to access index [0] inside array
    	let managerAccess = arr[0].phoneNumber;
    	//... return your var
    	return managerAccess;
    }

