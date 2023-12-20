const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');


buttons.forEach((button) => {
    console.log(button);
    // events listner use krenge
    button.addEventListener('click', function (events) {
        console.log(events);
        console.log(events.target);

        if (events.target.id === 'grey') {
            body.style.backgroundColor = events.target.id;
        }

        if (events.target.id === 'white') {
            body.style.backgroundColor = events.target.id;
        }
        if (events.target.id === 'yellow') {
            body.style.backgroundColor = events.target.id;
        }
        if (events.target.id === 'blue') {
            body.style.backgroundColor = events.target.id;
        }

    })
});