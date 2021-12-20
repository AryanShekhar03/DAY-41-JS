//UC 1
const IS_ABSENT =0
let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck==IS_ABSENT){
    console.log("Employee is Absent ");

}else{
     console.log("Employee is present");
} 
//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
{
    let empHrs=0;
    let empcheck=Math.floor(Math.random()*10)%3;
    switch(empcheck){
        case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
            default:
                empHrs=0;
    }
    
    let empwage=empHrs*WAGE_PER_HOUR;
    console.log("UC2 - Employee wage: "+ empwage);
}    
//UC3
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
function getWorkingHours(empcheck)
{
    
    switch(empcheck){
        case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
            default:
                empHrs=0;
    }
    
    let empcheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empcheck);
    let empwage=empHrs*WAGE_PER_HOUR;
    console.log("UC3 - Employee wage: "+ empwage);

    //UC4
    const NUM_OF_WORKING_DAYS=2;
    let empHrs1=0;
    for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
        let empcheck=Math.floor(Math.random()*10)%3;
        empHrs1 += getWorkingHours(empcheck);

    }
    let empWage=empHrs1*WAGE_PER_HOUR;
    console.log("UC4 -Total Hours " + Totalempwage);
    
    //UC5
    const MAX_HRS_IN_MONTH=100;
    let TotalempHrs1=0;
    let totalWorkingDays=0;
    while(TotalempHrs <=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empcheck=Math.floor(Math.random()*10)%3;
        TotalempHrs1+=getWorkingHours(empcheck);
    }
     let empWage2=TotalempHrs1*WAGE_PER_HOUR;
     console.log("UC5 -Total Days :" + totalWorkingDays+"Total Hours "+ TotalempHrs1+ "Emp wage :"+empwage2);

     //UC6
     function calDailyWage(empHrs){
         return empHrs*WAGE_PER_HOUR;
        } 
     const MAX_HRS_IN_MONTH=100;
     let TotalempHrs1=0;
     let totalWorkingDays=0;
     let empDailyWageArr=new Array();
     while(TotalempHrs <=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
     {
         totalWorkingDays++;
         let empcheck=Math.floor(Math.random()*10)%3;
         let TotalempHrs1 =getWorkingHours(empcheck);
         TotalempHrs1+=empHrs1;
         empDailyWageArr.push(calDailyWage(empHrs1));

     }
      let empWage2=calDailyWage(TotalempHrs1);
      console.log("UC6 -Total Days :" + totalWorkingDays+"Total Hours "+ TotalempHrs1+ "Emp wage :"+empwage2);

      //UC8
      function calDailyWage(empHrs){
        return empHrs*WAGE_PER_HOUR;
       } 
    const MAX_HRS_IN_MONTH=100;
    let TotalempHrs1=0;
    let totalWorkingDays=0;
    let empDailyWageArr=new Array();
    let empDailyWageMap=newMap
    while(TotalempHrs <=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empcheck=Math.floor(Math.random()*10)%3;
        let TotalempHrs1 =getWorkingHours(empcheck);
        TotalempHrs1+=empHrs1;
        empDailyWageArr.push(calDailyWage(empHrs1));

    }
     let empWage2=calDailyWage(TotalempHrs1);
     console.log("UC8 -Total Days :" + totalWorkingDays+"Total Hours "+ TotalempHrs1+ "Emp wage :"+empwage2);
 