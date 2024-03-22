let card = document.querySelectorAll(".card");
let submit =document.getElementById("submit")
let num =0;
document.querySelector(".cartItems").style.display="none";
card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);
        document.querySelector(".cartItems").style.display="block"
        num++;
        document.querySelector("#cartnum").innerHTML=num;
        let div = document.createElement("div")
        div.classList.add("cartList");
        div.innerHTML=`
        <ion-icon name="close" onclick="remove()"></ion-icon>
        <img src=${cards.firstElementChild.src}>
        <p>$199</p>
        `
        document.querySelector(".cartItems").appendChild(div)
    })
})


function remove(){
    num--;
      let cartList = document.querySelectorAll(".cartList");
      cartList.forEach(function(currentItem){
        currentItem.addEventListener("click", function(){
            if(num==0){
                document.querySelector(".cartItems").style.display="none"
            }
            currentItem.style.display="none"
            document.querySelector("#cartnum").innerHTML=num;
        })
      })
}
submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value =="" || password.value==""){
        alert("Enter email and password")
    }
    else{
        alert("You logged in")
        
    }
})

