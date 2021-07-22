let user = document.getElementById("user");
let pwd = document.getElementById("pass");
let form = document.getElementById("form");
form.addEventListener('submit', (e)=>{
    if (user.value=="admin" && pwd.value=="12345") {
        e.eventPhase();       
    }
e.preventDefault();
})

// json data retrieve

function ajax(){
    // new XHR OBJECT CREATION STEP 1
var xhttp = new XMLHttpRequest();
// EVENT LISTNER CREATION STEP 4
xhttp.onreadystatechange = function(){
    // READYSTATE FUNCTION CHECKING STEP 5
    if(this.readyState==4 && this.status==200){
        // RESPONSES THROUGH DOM ELEMENT EXECUTED STEP 6
        var response = JSON.parse(this.responseText);
          var output="";
        //  for( var i=0;i<response.length; i++)               
         for(let j=0;j<response.length;j++){
            let y = (response[j].completed);
            if(y==true){
                output +="<ol>"+"<input type = checkbox checked disabled>" + response[j].title + "</ol>";
                document.getElementById("demo").innerHTML = output;
           }else{
                output += "<ol>"+"<input type = checkbox>" + response[j].title + "</ol>";
               var outpu = output;
                document.getElementById("demo").innerHTML = outpu;
            
            }
        
         }
    }
}
// INSTANTING STEP 2
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// SENDING REQUEST STEP 3
xhttp.send();
}


//using promise function

// function checked(){
//    var s = document.getElementsByTagName("input");
//  console.log(s);
//   for(i=0;i<200;i++){
//       let v = s[i].checked;
//   q=true;
//   if(q==v>=95){
//       alert("congrats you have completed 5 task");
//   }

//       }      

//     }
  
