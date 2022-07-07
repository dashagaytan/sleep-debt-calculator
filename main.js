// Sleep Debt Calculator
// takes in user parameters and calculates hours that need to be reached or overused.

// using switch statement to identify hours slept each day of the week
getSleepHours = day => {
    switch (day){
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 5;
            break;
        case 'friday':
            return 4;
            break;
        case 'saturday':
            return 3;
            break;           
        case 'sunday':
            return 2;
            break;
        default:
            return 'Error!';
    }
};

// get actual hours slept 
const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') + getSleepHours('wednesday')+ 
    getSleepHours('thursday')+ getsleepHours('friday')+
    getSleepHours('saturday')+ getSleepHours('sunday');

    console.log(getSleepHours('friday'));
    console.log(getActualSleepHours());

// get ideal hours of sleep 
const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
};

// calculate the sleep debt, if any.
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        console.log('You slept the recomended hours of sleep!');
    } 
    else if (actualSleepHours < idealSleepHours){
        console.log('You got '+ (idealSleepHours - actualSleepHours)+ ' hours less sleep than you needed this week. Get some rest.');
    }
    else if(actualSleepHours > idealSleepHours){
        console.log('You got '+(idealSleepHours - actualSleepHours)+ ' hours more than you needed this week. You must feel rested!');
    } 
    else {
        console.log('Error! Something went wront.');
    }
};