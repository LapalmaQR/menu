// LAZİMLİDİ PİZZALAR

const pizzalar=[
    {
        id:1,
        name:"Margarita",
        price:8.00,
    },
    {
        id:2,
        name:"Toyuqlu",
        price:10.00,
    },
    {
        id:3,
        name:"Qarışıq",
        price:12.00,
    },
    
]

const pizzalarDiv = document.getElementById("pizzalar");
var pizzalarSetData = "";

pizzalar.map((item)=>{
    pizzalarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

pizzalarDiv.innerHTML = pizzalarSetData;