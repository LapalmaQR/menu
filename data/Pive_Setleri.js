// LAZİMLİDİ PİVE SETLERİ

const pivesetleri=[
    {
        id:1,
        name:"6 bakal pivə + 7 məzə ",
        desc:"Pendir saçaq </br> Noxud </br>Tum </br>Cips </br>Suxarik </br>Pətənə </br> Düşbərə </br>",
        price:14.40,
    },
    {
        id:2,
        name:"8 bakal pivə + 10 məzə",
        desc:"Pendir saçaq </br> Cips </br> Suxarik </br> Pendir Qızartma </br> Tum </br> Noxud </br> Hisə verilmiş boğaz </br> Pətənə </br> Düşbərə </br> Kartof Free",
        price:18.80,
    },
    {
        id:3,
        name:"10 bakal pivə + 12 məzə",
        desc:"Pətənə </br> Boğaz </br> Bildirçin </br> Hisə verilmiş boğaz </br> Noxud </br> Düşbərə </br> Qrenki Sadə </br> Cips </br> Araxis </br> Tum </br> Pendir saçaq </br> Saçaq qızartma ",
        price:25.50,
    },
    
]

const pivesetleriDiv = document.getElementById("pivesetleri");
var pivesetleriSetData = "";

pivesetleri.map((item)=>{
    pivesetleriSetData+= `
    <div class="price-food-desc-part">
    <div class="food-desc" >
        <p class="food-name-pive">${item.name}</p>
        <p class="food-desc-pive">${item.desc}</p>
    </div>
    <p class="food-price-pive">${item.price} azn</p>
</div>`
})

pivesetleriDiv.innerHTML = pivesetleriSetData;