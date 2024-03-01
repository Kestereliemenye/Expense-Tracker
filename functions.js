function getExpenseDataFromUI() {
    const name = document.querySelector('#student-name').value
    const className = document.querySelector('#class').value
    const amount = document.querySelector('#cash').value
    const reason = document.querySelector('#expense').value
    return { name, className, amount, reason } // <--- this is a returned object
}
//worked on the clear button
const clearBtn = document.querySelector('.clear-button')

//worked on the total expense
const totalExp = document.querySelector('.total-expense');

// this function will add the expense to the table
function addExpenseToTable() {
    const exp = getExpenseDataFromUI() // you see this i am calling the function getExpenseDataFromUI I created above here
    if ( exp.name === '' || exp.className === '' || exp.amount === '' || exp.reason === '') {
        alert('Please fill in all fields')
        return // notice the empty return statement here. Why is this necessary here? Can you tell me? If you dont know try to remove the return statement and see what happens when you click the submit button. What changed?
    }
    
    let cashAmount = parseInt(exp.amount);//i made the cash input numbers only

    const newRow = document.createElement('tr')
    if (isNaN(cashAmount)){
        alert('Cash is not a number');
        return
    }
    newRow.innerHTML = `
    <td>${exp.name}</td>
    <td>${exp.className}</td>
    <td>${cashAmount}</td>
      <td>${exp.reason}</td>
      `
      
    
    document.querySelector('tbody').appendChild(newRow)
    document.querySelector('#student-name').value = ''
    document.querySelector('#class').value = ''
    document.querySelector('#cash').value = ''
    document.querySelector('#expense').value = ''
    
    clearBtn.addEventListener('click', clearWhole);
    function clearWhole (e){
        newRow.remove();
    }

   
  

}
const submitExpense = document.querySelector('.go')
submitExpense.addEventListener('click', addExpenseToTable)




  
