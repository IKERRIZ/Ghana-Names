
var maleList = [
    {
        Sunday: "Kwasi",
        Monday: "Kwadwo",
        Tuesday: "Kwabena",
        Wednesday: "Kwaku",
        Thursday: "Yaw",
        Friday: "Kofi",
        Saturday: "Kwame"
    }
];
var femyList = [
    {
        Sunday: "Akosua",
        Monday: "Adwoa",
        Tuesday: "Abenaa",
        Wednesday: "Akua",
        Thursday: "Yaa",
        Friday: "Afua",
        Saturday: "Ama"

    }
];

function validateForm () {
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");

    if (day <=0 || day > 31){
        alert("Invalid day");
        
    }

   
}




