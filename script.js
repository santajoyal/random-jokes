async function foo(){
    try {
       res=await fetch("https://api.chucknorris.io/jokes/random");
       res1=await res.json();
       var div=document.createElement("div")
       div.setAttribute("class","main");
       div.innerHTML=`<div class="card">
       <div class="card-body">
         <p>${res1.value}</p>
       </div>
     </div>`; 
     document.body.append(div); 
    } 
    catch (error) {
    console.log(error);    
    }
}
foo();