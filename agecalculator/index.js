function age (){
    var age=document.getElementById("age").value
    var number= Number(age)

    if(age<= 17 && age>=1){
        document.getElementById("show").innerHTML="You are a Child!"
    }else if(age<=29 && age >=18){
        document.getElementById("show").innerHTML="You are a Teenager!"
    }else if(age<=150 && age >=30){
        document.getElementById("show").innerHTML="You are an Adult!"
    }else{
       document.getElementById("show").innerHTML="Please enter your age!"
    }
}