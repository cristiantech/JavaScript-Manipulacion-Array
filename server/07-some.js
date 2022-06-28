const number = [1,7,3,9]
// let isValid = false;
// for (let index = 0; index < number.length; index++) {
//     const element = number[index];
//     if(element % 2 === 0) {
//         isValid = true;
//         break; 
//     }
// }

const isTrue = number.some((item) => item % 2 === 0)
console.log(isTrue);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newFecah = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21)
  }

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isValid = (newDate) =>{
    return dates.some(date =>{
      return areIntervalsOverlapping(
        {
        start:date.startDate, end: date.endDate
        },
        {
        start: newDate.startDate, end: newDate.endDate
        }
      )
    })
  }

  console.log(isValid(newFecah));


  function solution(numbers) {
    // Tu código aquí 👈 
   return numbers.some(num => num % 2 === 0 )
 }; 
 const number1 = [1, 3, 5, 7, , 10,11]
 console.log( solution(number1))