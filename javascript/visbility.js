document.getElementById("nigeria").style.display = "none"
document.getElementById("america").style.display = "none"
document.getElementById("local government").style.display = "none"
document.getElementById("province").style.display = "none"

function showOrHide(){
    var country = document.getElementById("country").value
   
    if(country == "nigeria"){
        document.getElementById("states").style.display = "block"
        document.getElementById("america").style.display = "none" 

    }
    else if(country == "america"){
        document.getElementById("america").style.display = "block"
        document.getElementById("states").style.display = "none"

    }
    // else if(country == "nigeria && nigeria == local"){
    //     document.getElementById("locals").style.display = "block"
    //     document.getElementById("province").style.display = "none"
       
    // }

    // else if(country == "america && america == province"){
    //     document.getElementById("province").style.display = "block"
    //     document.getElementById("local").style.display = "none"
       
    // }
    
}
function showlga(){
    var states = document.getElementById("states")
    if(states == "benue"){
        document.getElementById("localgovernment").style.display = "block"
    }
    else{
        document.getElementById("localgovernment").style.display = "none"
    }
}
function showfo
