// LAZİMLİDİ SPİRTLİ İCKİLER

const araq =[
    {
        id: 1,
        name:"Organic",
        price:"12 / 13.50 / 15 azn"
    },
    {
        id: 2,
        name:"Olmega",
        price:"39 / 54 / 66 azn"
    },
    {
        id: 3,
        name:"Jameson",
        price:"55 / 65 / 70 azn"
    },
    {
        id: 4,
        name:"Chivas 12",
        price:"60 / 75 / 90 azn"
    },
    {
        id: 5,
        name:"Jagermaster",
        price:"44 / 54 / 66 azn"
    },
    {
        id: 6,
        name:"Azgranat",
        price:"13 /  /    azn"
    },
]

const araqlarDiv = document.getElementById("araqlar");
var araqlarSetData = "";

araq.map((item)=>{
    araqlarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price}</p>
</div>`
})

araqlarDiv.innerHTML = araqlarSetData;