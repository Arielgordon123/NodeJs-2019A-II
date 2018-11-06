function getCurrentMonth(){
    var myDate=new Date();
    return myDate.getMonth();
}


module.exports={
    "getMonthFunction": getCurrentMonth
};
