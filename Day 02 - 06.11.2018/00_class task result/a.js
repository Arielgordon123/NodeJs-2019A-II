function getCurrentYear(){
    var myDate=new Date();
    return myDate.getFullYear();
}


module.exports={
    "getYearFunction": getCurrentYear
};
