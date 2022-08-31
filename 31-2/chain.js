//                          31-2 Access Value, nested object Optional chaining  
const users = [
    {id: 1, name: 'fahad', job: 'WP-Developer'}
];
// console.log(users[0].name);

const data= {
    count: 5000,
    company: 'FaazizPRO',
    data: [
        {id: 2, name: 'Abdul Aziz', salary: 35000, location: 'Banasree'},
        {id: 4, name: 'Karim Ahmed', salary: 45000, location: 'Gulshan'}
    ]
}
const salaryAmount = data.data[0].salary;
// console.log(salaryAmount);

const userInfo = {
    id: 234,
    name: 'Salman Farsi',
    address: {
        street: {
            first: 'Rampura Banasree',
            second: 'House 38, Road-5',
            third: '2nd floor left side'
        },
        postoffice: 'Khilgaon',
        city: 'Dhaka'
    }
}
const userFlat = userInfo.address.stret?.second;
console.log(userFlat);
//এভাবে একটা একটা অব্জেক্ট এর পর ডট দেওয়াকে চেইনিং বলে। আর ? দেওয়াকে অপশনাল চেইনিং বলে।
//? দিলে ওই অব্জেক্ট এর পরে মান না থাক্লে সামনে যাবে না।