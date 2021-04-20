//var userName = "nadiataha";

//console.log(userName.length)


//console.log(userName.lastIndexOf("a"))

/*for(var i=0;i<userName.length;i++){
    console.log(userName.charAt(i))
}
*/
/*function test(){ //stat
    alert("hello")
}
//self-invoked function
(function(){
     console.log("self invoked")
 })()
 
 
 
var users=[
{name:"ahmed",age:45,gender:"male"},
{name:"noha",age:23,gender:"female"},
{name:"mai",age:8,gender:"female"},
{name:"taha",age:77,gender:"male"},
{name:"ibrahim",age:24,gender:"male"},
]; 

console.log(document.getElementById("tableBody"))
var temp="";
for(var i=0;i<users.length;i++){
    temp+="<tr><td>"+users[i].name+"</td><td>"+users[i].age+"</td><td>"+users[i].gender+"</td></tr>"
}

document.getElementById("tableBody").innerHTML=temp


*/

var productNameInput=document.getElementById("productName");
var productCompanyInput=document.getElementById("productCompany");
var productPriceInput=document.getElementById("productPrice");
var productDescInput=document.getElementById("productDesc");
var addBtn=document.getElementById("submitBtn")
var productsList=[];

addBtn.onclick=function(){
  
   addProduct();
    displayData();
    resetForm()
}
function addProduct(){
     var product=
       {
           name:productNameInput.value,
           company:productCompanyInput.value,
           price:productPriceInput.value,
           desc:productDescInput.value,
       }
   
   productsList.push(product)
}


function displayData(){
    var cols="";
    for(var i=0;i<productsList.length;i++){
        cols+="<div class='col-md-3'><div class='product'><h3>"+productsList[i].name+"</h3><h3>"+productsList[i].company+"</h3> <h3 class='text-danger'>"+productsList[i].price+"</h3><p class='text-info'>"+productsList[i].desc+"</p><button onclick='deleteProduct("+i+")' class='btn btn-danger'>delete</button></div></div>"
    }
     document.getElementById("rowData").innerHTML=cols;
}
function deleteProduct(id){
 
    productsList.splice(id,1);
    //displayData()
}
function resetForm(){
   var inputs = document.getElementsByClassName("form-control")
   for(var i=0;i<inputs.length;i++){
       inputs[i].value=""
   }
}













 
 
 
 