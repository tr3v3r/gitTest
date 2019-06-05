
const wrapper = document.getElementsByClassName('wrapper')[0]


function initializeCounterModule() {
   const controlsPanel = document.getElementsByClassName('controls')[0]
   const counterElement = document.getElementsByClassName('counter')[0]

  let counter = 0;

   function updateCouner(newValue) {
     counterElement.innerHTML = newValue
   }

   updateCouner(counter)

  function onClickHandler(event) {
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
   }

 document.addEventListener('click', onClickHandler)

}


const counterModule = `<div class="counter"></div>
<div class="controls">
    <div class="control-button plus">
      <i class="fas fa-plus"></i>
    </div>
    <div class="control-button reset">
      <i class="fas fa-sync-alt"></i>
    </div>
    <div class="control-button minus">
     <i class="fas fa-minus"></i>
    </div>
</div>`

const buttonModule = `<button class="super-button">Go to counter module</button>`

wrapper.innerHTML = buttonModule

function onRouteChange() {
   if(location.href.endsWith('#counterModule')) {
      wrapper.innerHTML = counterModule
     initializeCounterModule()
   } else if(location.href.endsWith('index.html')) {
      wrapper.innerHTML = buttonModule
      const button = document.getElementsByClassName('super-button')[0]

      button.onclick = function() {
         history.pushState({}, '2', '#counterModule')
         onRouteChange()
      }
   }
}
window.onload = onRouteChange
window.onpopstate = onRouteChange


