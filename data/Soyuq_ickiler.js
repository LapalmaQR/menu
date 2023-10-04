// LAZİMLİDİ İCKİLER (SOYUQ İCKİLER)

const soyuq_ickiler=[
    {
        id:1,
        name:"Banka coca-cola",
        price:2.50,
    },
    {
        id:2,
        name:"Banka sprite",
        price:2.50,
    },
    {
        id:3,
        name:"Banka fanta",
        price:2.50,
    },
    {
        id:4,
        name:"Fuce tea",
        price:2.50,
    },
    {
        id:5,
        name:"Hell",
        price:2.50,
    },
    {
        id:6,
        name:"Sirab (qazlı/qazsız) ",
        price:2.50,
    },
    {
        id:7,
        name:"Meyvə şirəsi",
        price:4.50,
    },
    {
        id:8,
        name:"Redbull",
        price:5.00,
    },
    {
        id:9,
        name:"Fresh",
        price:6.50,
    },
    {
        id:9,
        name:"Maxito",
        price:8.00,
    },
    {
        id:10,
        name:"Ev sayağı limonat",
        price:3.00,
    },
]

const soyuqIckilerDiv = document.getElementById("soyuq-ickiler");
var soyuqIckilerSetData = "";

soyuq_ickiler.map((item)=>{
    soyuqIckilerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

soyuqIckilerDiv.innerHTML = soyuqIckilerSetData;