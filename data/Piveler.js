 const piveler=[
    {
        id:1,
        name:"NZS sadə",
        price:1.50,
    },
    {
        id:2,
        name:"Xırdalan",
        price:2.00,
    },
    {
        id:3,
        name:"Xırdalan N-F",
        price:2.50,
    },
    {
        id:4,
        name:"Carisberg",
        price:4.50,
    },
    {
        id:5,
        name:"Alivariya",
        price:4.00,
    },
    {
        id:6,
        name:"Baltika 0",
        price:3.00,
    },
    {
        id:7,
        name:"Heineken butulka",
        price:4.50,
    },
]

const pivelerDiv = document.getElementById("piveler");
var pivelerSetData = "";

piveler.map((item)=>{
    pivelerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

pivelerDiv.innerHTML = pivelerSetData;