/*Sample menu object:

let menu = {
appetizers: ['Garlic bread', 'Mozzarella sticks', 'Onion rings' ], 
desserts: ['Cannoli', 'Tiramisu', 'Chocolate Cake', 'Raspberry Cheesecake'], 
pizzas: ['Cheese', 'Pepperoni', 'Supreme', 'Veggie', 'Thai Curry']
}
Write a function removeSpecials that accepts a menu object, removes the last item from the pizzas,
appetizers, and desserts arrays, and returns an array containing the removed specials.*/
    //. declare function
    function removeSpecials(menu) {
        //.. declare empty arr  
        let removedSpecials = [];
        //... pop and push into the Empty arr. use comma between each pop.
        removedSpecials.push(menu.appetizers.pop(),
            menu.desserts.pop(),
            menu.pizzas.pop());
        //.... return the value stored in arr removedSpecials
        return removedSpecials;
    }
