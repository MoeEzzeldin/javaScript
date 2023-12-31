/*Write a function acceptDelivery that accepts a zip code, and returns whether the shop delivers to that area.
Note that some valid zip codes begin with a zero, so be sure to treat all zip code values as strings.*/
    //.. declare function
function acceptDelivery(STR)
    {
        //... const Valid ZIP CODES
        const VALID_ZIP_CODES = ['94035', '94043', '94085', '94086',
            '94087', '94089', '95051'
        ];
        return VALID_ZIP_CODES.indexOf(STR) >= 0;
    }