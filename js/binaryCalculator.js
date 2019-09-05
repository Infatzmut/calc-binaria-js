var res= document.getElementById("res");
var signo="",result=0;
document.getElementById("btns").addEventListener("click",function(e){
   //e.preventDefault;
   //console.log(e.target.id)
   let texto= e.target.textContent
   if(e.target.id!="btnClr" && e.target.id!="btnEql" ){
      res.innerHTML+=texto;
      let option=e.target.textContent;
      switch(option){
         case "+":
         case "-":
         case "*":
         case "/":signo=option;break;
      }
   }  
   if(e.target.id=="btnEql" && res.innerHTML.length!=0){
    let ar = res.textContent.split("")
    const index = ar.findIndex(a => a==signo)
    //console.log(index);
    let x2 =ar.slice(index+1,ar.length).join("");
    let x1 =ar.slice(0,index).join("");
    switch(signo){
      case "+":result=parseInt(x1,2) + parseInt(x2,2)
               console.log(parseInt(x1,2),parseInt(x2,2),result)
               res.innerHTML=result.toString(2)
               break;
      case "-":result=parseInt(x1,2) - parseInt(x2,2)
               res.innerHTML=result.toString(2)
               break;
      case "*":result=parseInt(x1,2) * parseInt(x2,2)
               res.innerHTML=result.toString(2)
               break;
      case "/":result=parseInt(x1,2) / parseInt(x2,2)
               res.innerHTML=result.toString(2)
               break;
    }
    
   
   }
   

   if(e.target.id=="btnClr") res.innerHTML="";
  
})