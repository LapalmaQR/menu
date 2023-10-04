const isti_qelyanaltilar=[
    {
        id:1,
        name:"Qanad suxarıda / BBQ",
        price:5.00,
    },
    {
        id:2,
        name:"Nuggets",
        price:4.00,
    },
    {
        id:3,
        name:"Free",
        price:3.00,
    },
    {
        id:4,
        name:"Sülotka kartoflar",
        price:7.00,
    },
    {
        id:5,
        name:"Pendir çubuqları",
        price:5.00,
    },
]

const qelyanaltiDiv = document.getElementById('qelyanalti');

var qelyanaltiSetData= "";

isti_qelyanaltilar.map((item)=>{
    qelyanaltiSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})
qelyanaltiDiv.innerHTML= qelyanaltiSetData;

