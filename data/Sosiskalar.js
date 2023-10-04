// LAZİMLİDİ SOSİSLER (SOSİSKALAR)

const sosiskalar=[
    {
        id:1,
        name:"Manqalüstü",
        price:3.50,
    },
    {
        id:2,
        name:"İveriya gürcü",
        price:4.00,
    },
    {
        id:3,
        name:"Sardelka gürcü",
        price:5.00,
    },
    {
        id:4,
        name:"Vinçester",
        price:"5",
    },
    {
        id:5,
        name:"Südlü",
        price:"2.50",
    },
    {
        id:6,
        name:"Krakov",
        price:"5.00",
    },
    {
        id:7,
        name:"Sosis assorti",
        price:"15.00",
    },
]

const sosiskalarDiv = document.getElementById("sosiskalar");
var sosiskalarSetData = "";

sosiskalar.map((item)=>{
    sosiskalarSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

sosiskalarDiv.innerHTML = sosiskalarSetData;