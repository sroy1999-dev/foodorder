import icecream1 from '../img/i1.png';
import fruit1 from '../img/f1.png';
import chicken3 from '../img/c3.png';
import fish1 from '../img/fi1.png';


const heroData = [
    {   id: 1, 
        name: 'Icecream',
        description: 'Chocolate & Vanilla', 
        price: '5.25', 
        imageSrc: icecream1
    },
    {
        id: 2, 
        name: 'Strawberries', 
        description: 'Fresh Strawberries', 
        price: '10.25', 
        imageSrc: fruit1
    },
    {
        id: 3, 
        name: 'Chicken Kebab', 
        description: 'Mixed Kebab Plate', 
        price: '8.25', 
        imageSrc: chicken3
    },
    {
        id: 4, 
        name: 'Fish Kebab', 
        description: 'Mixed Fish Kebab', 
        price: '9.25', 
        imageSrc: fish1
    }
];

export default heroData;

export const categories = [
    {
        id:1,
        name: "Chicken",
        urlParamName: "chicken"
    },
    {
        id: 2,
        name: "Curry",
        urlParamName: "curry"
    },
    {
        id: 3,
        name: "Rice",
        urlParamName: "rice"
    },
    {
        id: 4,
        name: "Fish",
        urlParamName: "fish"
    },
    {
        id: 5,
        name: "Fruits",
        urlParamName: "fruits"
    },
    {
        id: 6,
        name: "Icecreams",
        urlParamName: "icecreams"
    },
    {
        id: 7,
        name: "Soft Drinks",
        urlParamName: "soft drinks"
    }
]
