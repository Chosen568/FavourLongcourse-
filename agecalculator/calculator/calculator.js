    function calculate(){
        var num1 = document.getElementById("num1").value
        var num2 = document.getElementById("num2").value
        var operator = document.getElementById("operator").value

    if (operator == "+"){
        var sum = Number(num1)+Number(num2)
        document.getElementById("answer").innerHTML=sum

    }else if (operator == "-"){
        var sum = Number(num1)-Number(num2)
        document.getElementById("answer").innerHTML=sum

    }else if (operator == "*"){
        var sum = Number(num1)*Number(num2)
        document.getElementById("answer").innerHTML=sum

    }else if (operator =="/"){
        var sum = Number(num1)/Number(num2)
        document.getElementById("answer").innerHTML=sum

    }else if (operator == ""){
        document.getElementById("answer").innerHTML=sum
 
    }
    
    }