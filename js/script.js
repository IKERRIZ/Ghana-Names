function validateForm() {
    var DD = document.getElementById("day").value;
    var MM = document.getElementById("month").value;
    var YY = document.getElementById("year").value;
    var gender= document.getElementsByName("gender");
  
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

    if(gender[0].checked === false && gender[1].checked === false){
        alert("Select your gender");
    }
    else{
        for(var j=0; j< gender.length; j++){
            if(gender[j].checked)
            alert(gender[j].value);
        }
    }
    

    // var a = Math.floor((14 - month) / 12);
    // var y = year - a;
    //  var m = month + 12 * a - 2;
    //  var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
    //  Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
    //  return d;
 
}
function result(){
    validateForm()
 
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








