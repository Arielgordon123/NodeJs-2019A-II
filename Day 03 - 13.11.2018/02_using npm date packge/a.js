
var hebrewDate = require("hebrew-date");

function getCurrentHebrewDate(){
    var date=new Date();
    var currentYear=date.getFullYear();
    var currentMonth=date.getMonth() + 1;
    var currentDay=date.getDate();

    return hebrewDate(currentYear, currentMonth, currentDay);
}


module.exports={
 "getCurrentHebrewDate":getCurrentHebrewDate
};
