// const square = function (x) {
//   return x*x;
// };
//
// const arrowSquare = (x) => {
//   return x*x;
// };

// const square = (x) => x*x;
//
// console.log(square(78));

const event = {
  name: 'B-D party',
  guestList: ['Misha', 'Sasha', 'Oleg'],
  printGuestList() {
    console.log('guest list for ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);

    })
  }
};

event.printGuestList();

