// LAZİMLİDİ PİVELER

const pive_cellek = [
    {
        id: 1,
        name: "NZS bakal",
        price: 1.50,
    },
    {
        id: 2,
        name: "NZS fuje",
        price: 1.80,
    },
    {
        id: 3,
        name: "Xırdalan sadə",
        price: 2.30,
    },
    {
        id: 4,
        name: "Xırdalan filtirsiz",
        price: "2.50",
    },
    {
        id: 5,
        name: "Efes zero",
        price: "3.50",
    },
    {
        id: 6,
        name: "Efes Draf",
        price: 4.50,
    },
    {
        id: 7,
        name: "Kuller",
        price: 4.00,
    },
    {
        id: 8,
        name: "Corona",
        price: 5.00,
    },
]

const piveCellekDiv = document.getElementById("pive-cellek");
var piveCellekSetData = "";

pive_cellek.map((item)=>{
    piveCellekSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p> 
    <p class="food-price">${item.price} azn</p>
</div>`
})

piveCellekDiv.innerHTML = piveCellekSetData;
