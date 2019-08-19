function validateForm() {
    var DD = document.getElementById("day").value;
    var MM = document.getElementById("month").value;
    var YY = document.getElementById("year").value;
  
    if( DD <= 0 || DD >31 || DD === ""){

        alert("Invalid date");

        return false;
    
    }
    else if( MM <= 0 || MM > 12 || MM ===  ""){
        alert("Invalid month");
        return false;
    
    }
    else if( YY <1900 || YY == "" || YY > 2019){
        alert("Invalid year");
       return false;
    }

  var week =  Math.round(
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 *(MM + 1)) / 10 + DD)%7
  );
}
var maleList = {

    Sunday : "Kwasi",
    Monday : "Kwadwo",
    Tuesday : "Kwabena",
    Wednesday : "Kwaku",
    Thursday : "Yaw",
    Friday :"Kofi",
    Saturday : "Kwame"

};

var femyList = {
    Sunday : "Akosua",
    Monday : "Adwoa",
    Tuesday : "Abenaa",
    Wednesday : "Akua",
    Thursday : "Yaa",
    Friday : "Afua",
    Saturday : "Ama"

}








