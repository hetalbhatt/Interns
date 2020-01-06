/*
    text : Must be of length 18 chs or less
    subText : Must be of length 40 chs or less

    if not ".." will be appended
*/
const CoffeeData = [
    {text: "Coffee1", subText : "Additional info", id:"10",image:"https://picsum.photos/500/500"},
    {text: "Coffee2", subText : "Additional info", id:"30",image:"https://picsum.photos/500/500"},
    {text: "Coffee3", subText : "Additional info", id:"40",image:"https://picsum.photos/500/500"},
    {text: "Coffee4", subText : "Additional info", id:"50",image:"https://picsum.photos/500/500"},
    {text: "Coffee5", subText : "Additional info", id:"60",image:"https://picsum.photos/500/500"},
    {text: "Coffee6", subText : "Additional info", id:"20",image:"https://picsum.photos/500/500"},
]

window.onload = (e) => {
    const coffeeWrapper = document.querySelector(".coffee-items");
    CoffeeData.map(e => {
        const coffeeItem = document.createElement("div");
        coffeeItem.innerHTML = createCoffee(e)
        coffeeWrapper.appendChild(coffeeItem)
    })
}

function createCoffee(e){
    return `
        <div class="coffee-item">
                <article>
                    <img src=${e.image+"?image="+e.id} alt="Sample photo">
                    <div class="text">
                      <h3>${e.text.length > 20 ? e.text.slice(0,18) + ".." : e.text}</h3>
                      <p>${e.subText.length > 40 ? e.subText.slice(0,38) + ".." : e.subText}</p>
                      <a href="nextPage.html${"?id="+e.id+"&text="+e.text+"&subText="+e.subText}" class="btn">View me</a>
                    </div>
                  </article>
        </div>
    `
}

