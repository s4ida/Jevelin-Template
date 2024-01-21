const table = document.getElementById('table')
const postform = document.getElementById('postform')
const nameinput = document.getElementById('nameinput')
const priceinput = document.getElementById('priceinput')





function getproducts(){
    table.innerHTML = ''
     axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
       products.map(item=>{
            let tr = document.createElement('tr')
        tr.innerHTML = `
         <td><img src="${item.image}" alt=""></td>
<td>${item.name}</td>
<td>${item.price}</td>
<td><button onclick="deletefunc(${item.id})">Remove<i class="fa-solid fa-heart"></i></button></td>
        `
        table.appendChild(tr)
        })
    
    })
}
getproducts()

const filterdata = document.getElementById('filterdata')
function sortdefault (){
    table.innerHTML = '';
    let selectvalue = filterdata.value;
if (selectvalue === '1'){
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
       products.map(item=>{
            let tr = document.createElement('tr')
        tr.innerHTML = `
         <td><img src="${item.image}" alt=""></td>
<td>${item.name}</td>
<td>${item.price}</td>
<td><button onclick="Remove(${item.id})">Remove<i class="fa-solid fa-heart"></i></button></td>
        `
        table.appendChild(tr)
        })
    
    })
}

}
filterdata.addEventListener('change',sortdefault)

function sortaz(){
    table.innerHTML = '';
    let selectvalue = filterdata.value;
if (selectvalue === '2'){
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
        let sortdataaz = products.sort((a,b)=>a.name.localeCompare(b.name))
        sortdataaz.map(item=>{
            let tr = document.createElement('tr')
        tr.innerHTML = `
         <td><img src="${item.image}" alt=""></td>
<td>${item.name}</td>
<td>${item.price}</td>
<td><button onclick="Remove(${item.id})">Remove<i class="fa-solid fa-heart"></i></button></td>
        `
        table.appendChild(tr)
        })
    
    })
}

}
filterdata.addEventListener('change',sortaz)


function sortza(){
    table.innerHTML = '';
    let selectvalue = filterdata.value;
if (selectvalue === '3'){
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
        let sortdataza = products.sort((a,b)=>b.name.localeCompare(a.name))
        sortdataza.map(item=>{
            let tr = document.createElement('tr')
        tr.innerHTML = `
         <td><img src="${item.image}" alt=""></td>
<td>${item.name}</td>
<td>${item.price}</td>
<td><button onclick="Remove(${item.id})">Remove<i class="fa-solid fa-heart"></i></button></td>
        `
        table.appendChild(tr)
        })
    
    })
}

}
filterdata.addEventListener('change',sortza)


const searchform =  document.getElementById('searchform');
const searchinput = document.getElementById('searchinput');
function searchbyname(e){
    e.preventDefault()
    table.innerHTML = ''
    axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`)
    .then(res=>{
        products = res.data
        const searchname = products.filter((item)=>item.name.toLowerCase().startsWith(searchinput.value.toLowerCase()))
     searchname.map(item=>{
            let tr = document.createElement('tr')
        tr.innerHTML = `
         <td><img src="${item.image}" alt=""></td>
<td>${item.name}</td>
<td>${item.price}</td>
<td><button onclick="Remove(${item.id})">Remove<i class="fa-solid fa-heart"></i></button></td>
        `
        table.appendChild(tr)
        })
    searchinput.value = ''
    })
}
searchform.addEventListener('submit',searchbyname)


function postdata(e){
    e.preventDefault()
    axios.post(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products`,{
        name:nameinput.value,
        price:priceinput.value

    })
    .then(res=>{
        getproducts()
        postform.reset()
    })
}
postform.addEventListener('submit',postdata)

 function deletefunc(id){
axios.delete(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products/${id}`)
.then(res=>{
    getproducts()
})
 }

  
   
