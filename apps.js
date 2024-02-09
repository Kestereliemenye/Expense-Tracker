const okay = document.querySelector('.go');
const put = document.querySelector('#text');
const pot = document.querySelector('#class');
const pat = document.querySelector('#cash');
const pit = document.querySelector('#expense');
const there = document.querySelector('.drop');
const clear = document.querySelector('.come');
const day = document.querySelector('.body');
// const da = document.createElement('td');
// const studClass = document.createElement('td');
// const moNey = document.createElement('td');
// const exPense = document.createElement('td');
//adding event listener
okay.addEventListener('click', addName);
function addName(e){
    if( put.value === ''){
        alert('Add a name');
        return;
    }else if (pot.value === ''){
        alert('Add a class');
        return;
    }else if (pat.value === ''){
        alert('Add amount')
        return;
    }else if (pit.value === ''){
        alert('Add reason')
        return;
    }



//create table data element
const newRow = document.createElement('tr');
const da = document.createElement('td');
const studClass = document.createElement('td');
const moNey = document.createElement('td');
const exPense = document.createElement('td');
//class the element
da.className = 'student-name';
da.id = 'core'
da.appendChild(document.createTextNode(put.value));
newRow.appendChild(da)

//STUDENT CLASS
studClass.className ='student-class';
studClass.id = 'core1'
studClass.appendChild(document.createTextNode(pot.value));
newRow.appendChild(studClass)

//CASH
moNey.className = 'money';
moNey.id = 'core2'
moNey.appendChild(document.createTextNode(pat.value));
newRow.appendChild(moNey)

//EXPENSE
exPense.className = 'reason';
exPense.id = 'core3'
exPense.appendChild(document.createTextNode(pit.value));
newRow.appendChild(exPense)


//append tr to the table 
there.appendChild(newRow);






put.value = '';
pot.value = '';
pat.value = ''; 
pit.value = '';

event.preventDefault();


}
clear.addEventListener('click', clearWhole);
function clearWhole (e){
//     let cosr = document.getElementById('core'); 
//     cosr.textContent = null;
//     let cosr1 = document.getElementById('core1'); 
//   cosr1.textContent = null;
//   let cosr2 = document.getElementById('core2'); 
//   cosr2.textContent = null;
//   let cosr3 = document.getElementById('core3'); 
//   cosr3.textContent = null;
  
}


