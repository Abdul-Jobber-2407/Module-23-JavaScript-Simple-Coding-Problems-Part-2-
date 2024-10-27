const  phones = [
    {name: 'samsung', price:20000, camera:'12mp', color:'black'},
    {name: 'Xoami', price : 15000, camera:'12mp', color:'black'},
    {name: 'Oppo', price : 30000, camera:'12mp', color:'black'},
    {name: 'Walton', price : 28000, camera:'12mp', color:'black'},
    {name: 'HTC', price:29000, camera:'12mp', color:'black'},
]

function getcheapestPhone (phones){
   let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}
const cheap = getcheapestPhone (phones);
console.log('Cheapest phone is:',cheap);