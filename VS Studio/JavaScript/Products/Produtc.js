const p = document.getElementById("P");
async function fetchProductS(){
    const response = await axios(`https://dummyjson.com/products`);
    console.log(response);
    return response;
}
async function displayProducts(){
    const response = await fetchProductS();
    const products = response.data.products.map(data => data);
    const productsdisplay = products.map(data => ({
        image : data.thumbnail,
        title: data.title,
        description : data.description.slice(0,35),
        price : data.price,
        discountPercentage : data.discountPercentage,
        rating : data.rating
     }));
     viewProducts(productsdisplay);
}
displayProducts();

function viewProducts(x){
  //console.log(x);
  const xHTMLString = x.map((x) => `
  <div class="container">
      <div class="images">
        <img id="image" src = "${x.image}"/> 
      </div>
      <h3 class="container4" id="product-title">${x.title}</h3>
      <h5 class="container4" id >${x.description}...</h5>
      <div class="container2">
        <h3 class = "container4 boldd" id = "price">Rs. ${x.price}</h3> 
        <h3 class = "container4" id = "discountPercentage">${x.discountPercentage}%</h3>
      </div>
      <h5 class = "container4 boldd" class = "rating">${x.rating}</h5>
  </div>
  `).join("");
  p.innerHTML = xHTMLString
}