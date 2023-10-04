const viski = [
    {
        id: 1,
        name:"Chivas regal 12",
        price: "6   / 110 azn"
    },
    {
        id: 2,
        name:"Ballantine's",
        price: "5   / 80  azn"
    },
    {
        id: 3,
        name:"Jack Daniels",
        price: "6   / 100 azn"
    },
    {
        id: 4,
        name:"Jagermaster",
        price: "5.5 / 90  azn"
    },
    {
        id: 5,
        name:"Redlabel",
        price: "5   / 80  azn"
    },
]

const viskilerDiv = document.getElementById("viskiler");
var viskilerSetData = "";

viski.map((item)=>{
    viskilerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price}</p>
</div>`
})

viskilerDiv.innerHTML = viskilerSetData;