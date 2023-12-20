const form = document.querySelector('form');

form.addEventListener('submit', function (events) {
    events.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid Weight ${weight}`;
    }
    else {

        const BMI = (weight / (height / 100)).toFixed(2);
        // to show the result
        results.innerHTML = `<span>${BMI}</span>`
        if (BMI < 19.5)
            results.innerHTML += "<br> -Over Weight";
        else if (BMI >= 19.5 && BMI < 24.6)
            results.innerHTML += "<br> -Normal Range";
        else
            results.innerHTML += "<br> -Over Weight";
    }



})