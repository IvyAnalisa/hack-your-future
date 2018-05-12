//2.1 Rewrite the below program
/*const numbers = [1, 2, 3, 4];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log('The doubled numbers are', newNumbers);//// ==> [2, 6]
*/
const numbers=[1,2,3,4];
const newNumbers=[];

// Filter out even number
const newNumbers= numbers.filters((number)=>number%2!==0);
newNumbers= newNumbers.map((number)=>number*2);
console.log(newNumbers);

//2.2
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
 var task_times=[];
 for (var i=0, max=task.length;i<max;i+=1){
   task_times.push(task[i].duration);
 }
 // Map the tasks to durations in hours.
const tasksinHours=task.map(time=>time.duration/60);

//Filter out everything that took less than two hours
let taskLessInTwoHours= hours.filter(time)=>time>=2);
//Multiply the each duration by a per-hour rate for billing
let perHourRate=taskLessInTwoHours.map(time>=time.hours*25.00);
let payment= perHourRate.reduce(total,rate)=>total+rate);
let paymentInEuros=payment.toLocalstring('en-US',{style:'currency',currency:'EUR'});
console.log("My salary is :"+paymentInEuros);
