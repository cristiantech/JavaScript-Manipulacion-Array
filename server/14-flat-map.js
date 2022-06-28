const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const res = Object.values(calendars).flatMap(item => item.map( date => date.startDate))
console.log(res);


function solution(lines) {
    // Tu código aquí 👈 
    return lines.flatMap(item => item.split(" ").length)
    .reduce((acc,sum) => acc += sum, 0)
}; 
console.log( solution([
   "Beautiful is better than ugly",
   "Explicit is better than implicit",
   "Simple is better than complex",
   "Complex is better than complicated hola",
]));