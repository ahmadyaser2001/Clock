setInterval(setClock,1000)

const hourHand= document.querySelector('[data-hour-hand]')
const minuteHand= document.querySelector('[data-minute-hand]')
const secondHand= document.querySelector('[data-second-hand]')

function setClock(){
    const cuurentData = new Date()
    const secondRatio = cuurentData.getSeconds() / 60
    const minuteRatio = (secondRatio + cuurentData.getMinutes()) /60
    const hourRatio = (minuteRatio + cuurentData.getHours()) /12

    setRotation(secondHand,secondRatio)
    setRotation(minuteHand,minuteHand)
    setRotation(hourHand,hourRatio)
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}
setClock()