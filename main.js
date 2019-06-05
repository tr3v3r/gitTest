const controlsPanel = document.getElementsByClassName('controls')[0]
const counterElement = document.getElementsByClassName('counter')[0]

let counter = 0;


function updateCouner(newValue) {
  counterElement.innerHTML = newValue
}

updateCouner(counter)

document.addEventListener('click', (event) => {

    if(event.target.closest('.plus')) {
       counter++
    } 

    if(event.target.closest('.reset')) {
       counter = 0
    } 

    if(event.target.closest('.minus')) {
       counter--
    } 

    updateCouner(counter)
})