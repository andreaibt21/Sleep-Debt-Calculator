const getSleepHours = day => {
  switch(day){
    case 'monday' :return 8;
      break;
    case 'tuesday':return 6;
      break;
    case 'wednesday':return 7;
      break;
    case 'thursday':return 5;
      break;
    case 'friday':return 8;
      break;
    case 'saturday':return 6;
      break;
    case 'sunday':return 7;
      break;
  }        
};
const getActualSleepHours = () => {
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')  
};
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7; 
};
console.log(`User sleep hours: ${getActualSleepHours()}` );
console.log(`Ideal sleep hours: ${getIdealSleepHours()}` );

const calculateSleepDebt = () => {
let actualSleepHours = getActualSleepHours();
let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
  console.log('The user has the perfect amount of sleep!!')
} 
else if (actualSleepHours > idealSleepHours){
 console.log(`The user has got more sleep than needed, you sleept ${actualSleepHours - idealSleepHours} more hours.`)
  }
else if (actualSleepHours < idealSleepHours) { console.log(` The user should get some rest, you need to sleep ${idealSleepHours - actualSleepHours} more hours.` )}
};
calculateSleepDebt();





