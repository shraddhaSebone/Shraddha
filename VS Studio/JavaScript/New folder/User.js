const p = document.getElementById("User");
async function fetchUsers(){
    const response = await axios(`https://dummyjson.com/users`);
    console.log(response);
    return response;
}
async function displayUser(){
    const response = await fetchUsers();
    const users = response.data.users.map(data => data);
    const usersdisplay = users.map(data => ({
        id : data.id,
        image : data.image,
        firstName : data.firstName,
        lastName : data.lastName,
        email : data.email,
        phone : data.phone,
        age : data.age
     }));
     viewUsers(usersdisplay);
}
displayUser();
// fetchUsers();

function viewUsers(x){
  //console.log(x);
  const xHTMLString = x.map((x) => `
  <div class="container">
    <div class ="imagedetails">
      <div class="container1">
        <img id="image" src = "${x.image}"/> 
        <h3 class="name">${x.firstName} ${x.lastName}</h3>
      </div>
      <div class = "container2">
        <h6 class = "container2item">Email : </h6>
        <h4 id = "email" class = "container2item text">${x.email}</h4>
        <h6 class = "container2item">Phone : </h6>
        <h4 id= "phone" class = "container2item text">${x.phone}</h4>
        <h6 class = "container2item">Age : </h6>
        <h5 id = "age" class = "container2item text">${x.age}</h5>
      </div>
    </div>
    <div class = "viewdetails">
      <button onClick = "negivateToOtherPage(${x.id})" type="button" class = "viewdetailsButton">View Details</button>
    </div>
  </div>
  `).join("");
  p.innerHTML = xHTMLString
}
function negivateToOtherPage(id){
  sessionStorage.setItem("ID", id);
  window.open("UserDetails.html");
}
