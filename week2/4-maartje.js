'use strict';
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

let minutesWorked = 0;
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].duration >= 120) {
        minutesWorked += tasks[i].duration;
    }
}
let hoursWorked = minutesWorked / 60;
let hourWages = 20;
let earnings = hoursWorked * hourWages;
console.log('Only paid hours = ', hoursWorked, 'hour');
console.log('wages per hour = ', hourWages, '€');
console.log('Maatrje earnings for Monday and Tuesday is:', earnings.toFixed(0), '€');
