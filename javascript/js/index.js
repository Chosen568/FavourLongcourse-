function checkAdmission(){
    var jambscore = document.getElementById("jambscore").value;

    if(jambscore>=180){
        document.getElementById("message").innerHTML= "congratulation you have gotten admission!";
    }
    else if(jambscore<180 && jambscore>0 ){
        document.getElementById("message").innerHTML="we are sorry you are not eligible for admission";
    }
    else if(jambscore ==""){
        document.getElementById("message").innerHTML="please enter your jamb score";
    }
    if(jambscore>400){
        document.getElementById("message").innerHTML="please enter a valid jamb score";
    }

}