// LAZİMLİDİ İSTİ İCKİLER

const isti_ickiler=[
    {
        id:1,
        name:"Çay qara - ədviyyatlı",
        price:"3 / 3.5 ",
    },
    {
        id:2,
        name:"Çay yaşıl",
        price:4.00,
    },
    {
        id:3,
        name:"Çay fincan",
        price:4.00,
    },
    {
        id:4,
        name:"Coffee qara",
        price:2.00,
    },
    {
        id:5,
        name:"Cappuccino",
        price:3.00,
    },
    
]

const isti_ickilerDiv = document.getElementById("isti-ickiler");
var isti_ickilerSetData = "";

isti_ickiler.map((item)=>{
    isti_ickilerSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

isti_ickilerDiv.innerHTML = isti_ickilerSetData;