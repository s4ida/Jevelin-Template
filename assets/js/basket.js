const basketdiv = document.getElementById('basketdiv')

function getproducts(){
    basketdiv.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
 cart.map((item,index)=>{
        let box = document.createElement('div')
        box.className = 'box col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'
    box.innerHTML = `
    <img src="${item.image}" alt="">
<p>${item.name}</p>
<p>${item.price}</p>
<p>${item.count}</p>
<button onclick="removefrombasket(${index})">Remove<i class="fa-solid fa-heart"></i></button></div>

    `
    basketdiv.appendChild(box)
    })
}
getproducts()

function removefrombasket (index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getproducts()
}
