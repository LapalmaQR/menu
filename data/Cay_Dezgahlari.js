// LAZİMLİDİ CAY DEZGAHLARİ

const caydezgahlari=[
    {
        id:1,
        name:"Çay Dəzgahı 15",
        desc:"Çay,mürəbbə,plitka şokolad,rulet,kurabiye",
        price:15.00,
    },
    {
        id:2,
        name:"Çay Dəzgahı 15",
        desc:"2 ədəd Çay,mürəbbə,plitka şokolad,çərəz",
        price:20.00,
    },
    {
        id:3,
        name:"Çay Dəzgahı 25",
        desc:"3 ədəd Çay,mürəbbə,plitka şokolad,rulet </br> ,qarışıq çərəz,  quru meyvə + qəlyan",
        price:25.00,
    },
    
]

const caydezgahlariDiv = document.getElementById("caydezgahlari");
var caydezgahlariSetData = "";

caydezgahlari.map((item)=>{
    caydezgahlariSetData+= `
    <div class="price-food-desc-part">
    <div class="food-desc" >
        <p class="food-name">${item.name}</p>
        <p class="food-desc">${item.desc}</p>
    </div>
    <p class="food-price">${item.price} azn</p>
</div>`
})

caydezgahlariDiv.innerHTML = caydezgahlariSetData;