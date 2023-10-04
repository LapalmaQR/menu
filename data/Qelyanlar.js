 const qelyanlar=[
    {
        id:1,
        name:"Çaşka",
        price:8.00,
    },
    {
        id:2,
        name:"Meyvə",
        price:12.00,
    },
]

const qelyanlarDiv = document.getElementById("qelyanlar");
var qelyanlarSetData = "";

qelyanlar.map((item)=>{
    qelyanlarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

qelyanlarDiv.innerHTML = qelyanlarSetData;