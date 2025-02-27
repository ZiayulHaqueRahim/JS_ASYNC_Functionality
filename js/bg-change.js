// Generate a Random color from HEX value:::

const randomColor = function(){
    const hexValue = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID;

const startChangingColor = function(){
    if(!intervalID){            // checking
        intervalID =  setInterval(changeBackgroundColor, 1000);
    }
    function changeBackgroundColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;              // release space or free space after var work done[optimization]
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor)