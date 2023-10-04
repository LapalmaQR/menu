 const sezon_baliqlari=[
    {
        id:1,
        name:"Balıq 10",
        price:10.00,
    },
    {
        id:2,
        name:"Balıq 15",
        price:15.00,
    },
    {
        id:3,
        name:"Balıq 10",
        price:20.00,
    },
]

const sezonBaliqlari = document.getElementById("sezon-baliqlari");
var  sezonBaliqlariSetData= "";

sezon_baliqlari.map((item)=>{
    sezonBaliqlariSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

sezonBaliqlari.innerHTML = sezonBaliqlariSetData;