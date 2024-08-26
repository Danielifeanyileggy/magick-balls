let values = []

for (let i= 0;  i<5; i++) {
  let entered_values = prompt("Please Enter Your Values")
  values.push(entered_values)
}

alert("Your Values are " + values)
const even = values.filter(function (numbers) {
      return( numbers % 2 === 0)
})
alert("The Even Numbers in your Values are " + even)

const odd = values.filter(function (numbers) {
  return ( numbers % 2 !== 0)
})

alert("The Odd Numbers in your values are " + odd)

const button =document.querySelector("button")

const generator = document.querySelector("div")

button.addEventListener("click" , function() {

  generator.innerHTML = ""

  values.forEach(function(Number){
      const ball = `<span>${Number}</span>`
      generator.innerHTML +=  ball
  })
})