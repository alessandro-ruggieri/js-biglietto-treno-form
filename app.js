const kilometersElement = document.getElementById('Kilometers')
const discountElement = document.getElementById ('Discount')
const formElement = document.getElementById ('form-tariffa')
const tariffaElement = document.getElementById ('tariffa')

let fullprice = 0
let discount = 0 
let finalprice = 0


formElement.addEventListener ('submit', function(event) {
   event.preventDefault()
   const km = parseFloat(kilometersElement.value)
   const sconto = discountElement.value
   fullprice = km * 0.21
   if (sconto === 2) {
      discount = fullprice * 0.20
      finalprice = fullprice - discount
   } else if (sconto === 3) {
      discount= fullprice * 0.40
      finalprice = fullprice - discount
   } else {
      finalprice = fullprice
   }
   tariffaElement.innerHTML = finalprice.toFixed(2) + ' €'
   kilometersElement.value = ''
   discountElement.value = '1'
})