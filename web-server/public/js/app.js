console.log('client side javascript');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  messageOne.textContent = 'Loading ...';
  messageTwo.textContent = '';
  e.preventDefault();
  const location = searchElement.value;
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return messageOne.textContent = data.error;
      }
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecastData;
    });
  })
  console.log(location);
})
