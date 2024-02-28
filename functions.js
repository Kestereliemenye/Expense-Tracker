// this is a self executing function
(function () {
  // run code inside here immediately
})()


//  this is not a self executing function because
// you create it
function add(a, b) {
  return a + b
}

//...and then you call it
const answer = add(2,4)
console.log(answer);


// lets use these concept for you expense tracker app
// This function will return an object consisting of the values of the input fields
function getExpenseDataFromUI() {
  const name = document.querySelector('#class').value
  const amount = document.querySelector('#cash').value
  const reason = document.querySelector('#expense').value
  return { name, amount, reason } // <--- this is a returned object
}

// this function will add the expense to the table
function addExpenseToTable(expense) {
  const exp = getExpenseDataFromUI() // you see this i am calling the function getExpenseDataFromUI I created above here
  if (exp.name === '' || exp.amount === '' || exp.reason === '') {
    alert('Please fill in all fields')
    return // notice the empty return statement here. Why is this necessary here? Can you tell me? If you dont know try to remove the return statement and see what happens when you click the submit button. What changed?
  }
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
    <td>${exp.name}</td>
    <td>${exp.amount}</td>
    <td>${exp.reason}</td>
  `
  document.querySelector('tbody').appendChild(newRow)
  document.querySelector('#class').value = ''
  document.querySelector('#cash').value = ''
  document.querySelector('#expense').value = ''
}

const submitExpense = document.querySelector('.go')
submitExpense.addEventListener('click', addExpenseToTable)


