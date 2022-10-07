const toys = [
    {
        id: 1,
        name: 'Wooden Car',
        ageGroup: '3-10',
        batteriesRequired: false,
        batteriesIncluded: false,
        color: 'red',
        modelNumber: 'A2BC3D4',
        price: 6.99,
        theme: 'N/A'
    },

    //A-Z Wooden letter blocks
    {
        id: 2,
        name: 'Wooden A-Z Blocks',
        ageGroup: '2-5',
        batteriesRequired: false,
        batteriesIncluded: false,
        color: 'red, blue, green, and yellow',
        modelNumber: 'F8B7D4J9',
        price: 9.99,
        theme: 'N/A'
    },

    // Wooden cup with string at base and a ball in the middle
    {
        id: 3, 
        name: 'Ball Cup',
        ageGroup: '12+',
        batteriesRequired: false,
        batteriesIncluded: false,
        color: 'red ball, white string',
        modelNumber: 'N2C8D0Q5',
        price: 4.99,
        theme: 'N/A'
    },
];

const legoSetOne = {
    id: 4,
    name: 'Death Star LEGO set',
    ageGroup: '4+',
    batteriesRequired: false,
    batteriesIncluded: false,
    color: 'multi-colored',
    modelNumber: 'H8G2F8D0',
    price: 29.99,
    theme: 'Deathstar'
};

const legoSetTwo = {
    id: 5,
    name: 'Hogwarts LEGO set',
    ageGroup: '4+',
    batteriesRequired: false,
    batteriesIncluded: false,
    color: 'multi-colored',
    modelNumber: 'A9V7B2K4',
    price: 39.99,
    theme: 'Hogwarts'
};
toys.push(legoSetOne);
toys.push(legoSetTwo);

/*

For the sake of readability, I'm decribing data types down here:

-id: number/integer
-ageGroup: string
-batteriesRequired: boolean
-batteriesIncluded: boolean
-color: string
-modelNumber: string
-price: number/float
-theme: string

*/
const phoneToFind = 2;

for (const toy of toys) {
    console.log(toy.price);
};
for (const toy of toys) {
    console.log(`The ${toy.color} ${toy.name} costs $${toy.price}.`);
};
for (const toy of toys) {
    if (phoneToFind === toy.id) {
        toy.price += (toy.price * 0.05);
        console.log(toy.price);
        break;
    }
}

//------------------------MAP LESSON-------------------------

for (const toy of toys) {
    delete toy.price;
}
const prices = new Map();
const addPhoneToInventory = (phoneObject, price) => {
    prices.set(phoneObject, price);
}

// Add the first phone in the array to the Map and set its price
addPhoneToInventory("Samsung:", 899.99);
addPhoneToInventory("Apple:", 1399.99);
console.log(prices);

//------------------------SET LESSON-------------------------

const toySet = new Set();

toys.forEach(toy => toySet.add(toy));
console.log(toySet)