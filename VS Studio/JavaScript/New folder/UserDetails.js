
const v = document.getElementById("viewdetail");
async function fetchUserDetails(){
    const response = await axios(`https://dummyjson.com/users/${sessionStorage.getItem("ID")}`);
    console.log(response);
    return response;
}
async function displayUserDetails(){
    const response = await fetchUserDetails();
    const data = response.data;
    const details = {       
        id : data.id,
        image : data.image,
        firstName :data.firstName,
        lastName : data.lastName,
        email : data.email,
        userName : data.username,
        phone : data.phone,
        age : data.age,
        address : data.address.address +","+ data.address.city +","+ data.address.state,
        pinCode : data.address.postalCode,
        compnayAddress : data.company.address.address+","+data.address.city,
        department : data.company.department,
        title : data.company.title,
        companyName : data.company.name,
        cardExpire : data.bank.cardExpire,
        cardNumber : data.bank.cardNumber,
        cardType : data.bank.cardType,
        currency : data.bank.currency,
        iban : data.bank.iban,
        birthDate : data.birthDate,
        bloodGroup : data.bloodGroup,
        gender : data.gender,
        height : data.height,
        weight : data.weight
    }
    viewUsersDetails(details);
}
displayUserDetails();
function viewUsersDetails(x){
    console.log(x);
    const xHTMLString =`
    <div class = "container">
        <div class = "abc">
            <div class = "basicheader">
                <h3 id="firstHeader">Basic Details</h3>
            </div>
            <div class ="imagebaiscdetail">
                <div class ="imagedetails">
                    <img id="image" src = "${x.image}"/>
                </div>
                <div class = "basicdetails">
                    <h3 class="name">Name : ${x.firstName} ${x.lastName}</h3>
                    <h3 class = "name">Email : ${x.email}</h3>
                    <h3 class = "name">userName : ${x.userName}</h3>
                    <h3 class = "name">Phone : ${x.phone}</h3>
                    <h3 class = "name">Age : ${x.age}</h3>
                    <h3 class = "name">Address : ${x.address}</h3>
                    <h3 class = "name">Pincode :${x.pinCode}</h3>
                </div>
            </div>
        </div>
        <div class ="moredetails">
                <div class ="headername">
                    <h4 class = "heardernameEach">Bank Details</h4>
                    <h4 class = "heardernameEach">Company Details</h4>
                    <h4 class = "heardernameEach">Biodata</h4>
                </div> 
                <div class ="details">
                    <div class = "bankdetails detailseach">
                        <h4 class = "moredetail">cardExpire : ${x.cardExpire}</h4>
                        <h4 class = "moredetail">cardNumber : ${x.cardNumber}</h4>
                        <h4 class = "moredetail">cardType : ${x.cardType}</h4>
                        <h4 class = "moredetail">currency : ${x.currency}</h4>
                        <h4 class = "moredetail">iban : ${x.iban}</h4>
                    </div>
                    <div class = "companydetails detailseach">
                        <h4 class = "moredetail">companyName : ${x.companyName}</h4>
                        <h4 class = "moredetail">department : ${x.department}</h4>
                        <h4 class = "moredetail">title : ${x.title}</h4>
                        <h4 class = "moredetail">compnayAddress : ${x.compnayAddress}</h4>
                    </div>
                    <div class = "biodata detailseach">
                        <h4 class = "moredetail">birthDate : ${x.birthDate}</h4>
                        <h4 class = "moredetail">bloodGroup : ${x.bloodGroup}</h4>
                        <h4 class = "moredetail">gender : ${x.gender}</h4>
                        <h4 class = "moredetail">height : ${x.height}</h4>
                        <h4 class = "moredetail">weight : ${x.weight}</h4>
                    </div>
                </div>
        </div>
  </div>
    `;
    v.innerHTML = xHTMLString
}
