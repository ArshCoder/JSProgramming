// UC1
{
const IS_ABSENT = 0

let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IS_ABSENT){
    console.log("UC1 - Employee is ABSENT.  Exiting the Program");
    return;
}else{
    console.log("UC1 - Employee is PESENT");
}
}

// UC2
{
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0; empHrs = 4;
empCheck = Math.floor(Math.random()*10) %3;
switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
            
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
               
        default:
            empHrs = 0;
}
    let empWage = empHrs * WAGE_PER_HOURS;
    console.log("Emp Wage: " * +empWage);
}

// UC3 Function

function getWorkingHours(empCheck){
    switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
           
    default:
        return 0;
    }
}

let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC3 -Emp Wage: " +empWage);


// UC 4 For Loop
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEMpHrs = 0;
    for (let day = 0; day< NUM_OF_WORKING_DAYS; day++){
        let empCheck = Math.floor(Math.random()*10) %3;
        totalEMpHrs += getWorkingHours(empCheck);
    }

    let empWage = totalEMpHrs * WAGE_PER_HOURS;
    console.log("UC4 - Total Hrs: " +totalEMpHrs + "Emp Wage: " * +empWage);
}

// UC 5 While Loop
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEMpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEMpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays ++;
        let empCheck = Math.floor(Math.random()*10)%3;
        totalEMpHrs += getWorkingHours(empCheck);
    }
    
    let empWage = totalEMpHrs * WAGE_PER_HOURS;
    console.log("UC5 - Total Days: " +totalWorkingDays + "Total Hrs: " * +totalEMpHrs +"Emp Wage: " * +empWage);
}

