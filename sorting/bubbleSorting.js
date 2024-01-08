let arr = [9, 8, 0, 3, 1, 6, 7, 2, 4, 5, 10];

do {
    swap = false;
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr.length - 1 - i; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
                swap = true
            }
        }
    }
    } while (swap)
console.log(arr)
