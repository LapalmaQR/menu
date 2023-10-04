const pive_suse = [
    {
        id: 1,
        name: "EFES zero",
        price: 3.00
    },
    {
        id: 2,
        name: "Baltika 0",
        price: 3.00
    },
    {
        id: 3,
        name: "Miller",
        price: 4.50
    },
    {
        id: 4,
        name: "Heineken",
        price: 4.50
    },
    {
        id: 5,
        name: "Corona",
        price: 5.00
    },

]

const piveSuseDiv = document.getElementById("pive-suse");
var piveSuseSetData = "";

pive_suse.map((item)=>{
    piveSuseSetData+= `
    <div class="price-food-part">
    <p class="food-name">${item.name}</p>
    <p class="food-price">${item.price} azn</p>
</div>`
})

piveSuseDiv.innerHTML = piveSuseSetData;