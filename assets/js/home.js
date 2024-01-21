const apidiv = document.getElementById('apidiv')

function getproducts () {
    page = 1
    limit = 3
     axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}`)
    .then(res=>{
        products = res.data
       products.map(item=>{
            let box = document.createElement('div')
            box.className = 'box col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'
        box.innerHTML = `
        <img src="${item.image}" alt="">
<p>${item.name}</p>
<p>${item.price}</p>
<div class="buttons"><button onclick="addtobasket(${item.id})">Add to<i class="fa-solid fa-cart-shopping"></i></button>
<button onclick="addtowishlist(${item.id})">Add to<i class="fa-solid fa-heart"></i></button></div>

        `
        apidiv.appendChild(box)
        })
        page++
    })
}
getproducts()

function addtobasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let productsItem = cart.find(item => item.id == id)
    if(productsItem){
        productsItem.count = (productsItem.count || 1)+1
    }
    else{
        let newItem = {...products.find(item=>item.id == id),count:1}
        cart.push(newItem)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}

function addtowishlist(id){
    let wishlist= JSON.parse(localStorage.getItem('wishlist')) || []
    let productsItem = wishlist.find(item => item.id == id)
    if(productsItem){
        alert('mehsul artiq var')
    }
    else{
       wishlist.push(products.find(item=>item.id == id))
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }
}