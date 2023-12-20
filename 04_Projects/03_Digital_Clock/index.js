const clock = document.getElementById('clock');
// const clock =  document.querySelector('#clock') // or using this 


setInterval(function () {  // timer hai delay  
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

     