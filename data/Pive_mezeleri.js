//LAZIMLIDI PIVE MEZELERIDI BU

 const pive_mezeleri=[
    {
        id:1,
        name:"Pətənə",
        price:3.50,
    },
    {
        id:2,
        name:"Pətənə zoğal turşusu",
        price:4.00,
    },
    {
        id:3,
        name:"Boğaz qızartma",
        price:3.00,
    },
    {
        id:4,
        name:"Hisə verilmiş bildirçin",
        price:3.00,
    },
    {
        id:5,
        name:"Hisə verilmiş boğaz",
        price:2.00,
    },
    {
        id:6,
        name:"Pendir saçaq",
        price:3.00,
    },
    {
        id:7,
        name:"Pendir saçaq qızartma",
        price:4.00,
    },
    {
        id:8,
        name:"Qrenki sadə",
        price:3.00,
    },
    {
        id:9,
        name:"Qrenki pendirli",
        price:4.00,
    },
    {
        id:10,
        name:"Femi",
        price:5.00,
    },
    {
        id:11,
        name:"Noxud",
        price:2.00,
    },
    {
        id:12,
        name:"Noxud qızartma",
        price:3.00,
    },
    {
        id:13,
        name:"Tum",
        price:2.00,
    },
    {
        id:14,
        name:"Suxarik",
        price:2.00,
    },
    {
        id:15,
        name:"Cips",
        price:2.50,
    },
    {
        id:16,
        name:"Ət basdırma",
        price:4.00,
    },
    {
        id:17,
        name:"Araxis qızartma",
        price:3.00,
    },
    {
        id:18,
        name:"Antep püstə",
        price:6.00,
    },
    {
        id:19,
        name:"Düşbərə",
        price:3.50,
    },
    {
        id:20,
        name:"Gürzə qızartma",
        price:3.50,
    },
    {
        id:21,
        name:"Gürcü xəngəli qızartma",
        price:5.00,
    },
    {
        id:22,
        name:"Toyuq popkorn",
        price:4.00,
    },
    {
        id:23,
        name:"Göbələk suxari",
        price:4.00,
    },
    {
        id:24,
        name:"Kilkə suxarik",
        price:5.00,
    },
    {
        id:25,
        name:"Çay krivet",
        price:10.00,
    },
    {
        id:26,
        name:"Dəniz krivet",
        price:8.00,
    },
    {
        id:27,
        name:"Tempura",
        price:12.00,
    },
    {
        id:28,
        name:"Grenki sadə",
        price:2.50,
    },
    {
        id:29,
        name:"Qızardılmış kilkə",
        price:4.00,
    },
]

const pive_mezeleriDiv = document.getElementById("pive-mezeleri");
var pive_mezeleriSetData = "";

pive_mezeleri.map((item)=>{
    pive_mezeleriSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

pive_mezeleriDiv.innerHTML = pive_mezeleriSetData;