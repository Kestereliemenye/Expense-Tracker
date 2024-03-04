function getExpenseDataFromUI() {
    const name = document.querySelector('#student-name').value
    const className = document.querySelector('#class').value
    const cashArray = [];// initialized an empty array to me used
    let cashValue = parseInt(document.querySelector('#cash').value);
    function addValue(){
        cashArray.push(cashValue);// assigned the values to the array
        console.log(cashArray)
        calculatetotal();
        return cashValue;
        };
        addValue();// i  ran the funtion
        function calculatetotal(){ // function to loop to get the total
            let total = 0;
            for (let i = 0; i < cashArray.length; i++ ) {
                total += cashArray[i];
                console.log(total)
            } 
        };

    
    const reason = document.querySelector('#expense').value
    return { name, className, cashValue, reason} // <--- this is a returned object
}
//worked on the clear button
const clearBtn = document.querySelector('.clear-button')

//worked on the total expense
const totalExp = document.querySelector('.total-expense');

// this function will add the expense to the table
function addExpenseToTable() {
    const exp = getExpenseDataFromUI() // you see this i am calling the function getExpenseDataFromUI I created above here
    if ( exp.name === '' || exp.className === '' || exp.cashValue === '' || exp.reason === '') {
        alert('Please fill in all fields')
        return // notice the empty return statement here. Why is this necessary here? Can you tell me? If you dont know try to remove the return statement and see what happens when you click the submit button. What changed?
    }
    

    const newRow = document.createElement('tr')
    // if (isNaN()){
    //     alert('Cash is not a number');
    //     return
    // }
    newRow.innerHTML = `
    <td>${exp.name}</td>
    <td>${exp.className}</td>
    <td>${exp.cashValue}</td>
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




  
