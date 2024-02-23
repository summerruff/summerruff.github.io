// dynamic welcome assignment
function welcome(){
    const hours = new Date().getHours() // get the current hour
    message = '' //string to be returned

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    if(isMorning){
        message = 'Good Morning!'
    }else if(isAfternoon){
        message = 'Good Afternoon!'
    }else if(isEvening){
        message = 'Good Evening!'
    }

    return message;
}

h1 = document.querySelector('h1')
h1.textContent = welcome()

// secret message assignment
const secretMessage = 'My favorite Zelda game is Breath of the Wild'
localStorage.setItem(`It's a secret to everybody.`, secretMessage)