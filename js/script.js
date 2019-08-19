
function validateForm () {
    var DD=parseInt(document.getElementById("day"));
    var MM=parseInt(document.getElementById("month"));
    var YY =parseInt(document.getElementById("year"));
    var CC=(YY-1)/ 100 + 1
    var weekDays=(CC/4-2*CC-1+5*YY/4+26*(MM+1)/10+DD)% 7

      console.log(weekDays);
      document.getElementById('correct').innerHTML=Math.round(weekDays);


     var maleList=[ 

     Sunday="Kwasi",
     Monday="Kwadwo",
     Tuesday="Kwabena",
     Wednesday="Kwaku",
     Thursday="Yaw",
     Friday="Kofi",
     Saturday="Kwame"

     ];

     var femyList=[
         Sunday="Akosua",
         Monday="Adwoa",
         Tuesday="Abenaa",
         Wednesday="Akua",
         Thursday="Yaa",
         Friday="Afua",
         Saturday="Ama"

     ]

    if (DD <=0 || DD > 31){
        alert("Invalid day of birth");
        return false;
    }
   else if (MM <=0 || MM > 12){
        alert("Invalid month of birth");
        return false;
    }
    else if (YY<=0 || YY > 2019){
        alert("Invalid year");
    }
 var pick =document.querySelector('input[name="gender"]:checked').Value;

  if(select==="male"){
      alert(maleList[Math.round(weekdays)]);
  }

  else if(select==="female"){
      alert(femyList[Math.round(weekDays)]);
  }
  else{
      alert("INVALID! Please enter correct details");
  }
}
   



