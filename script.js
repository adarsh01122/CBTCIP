const expenceForm = document.getElementById('expenceForm')
const expenceList = document.getElementById('expenceList')

expenceForm.addEventListener('submit',function(event){
    event.preventDefault(); // stops the reloading of the form
    const discription = document.getElementById('discription').value 
    const category = document.getElementById('category').value
    const amount = document.getElementById('amount').value


    if(document && category &&  !isNaN(amount)){
        const newRow = document.createElement('tr')

        newRow.innerHTML = `
        <td>${discription}</td>
        <td> ${category}</td> 
        <td> ${amount}</td>`
     
        expenceList.appendChild(newRow)

        document.getElementById('discription').value =''   // to remove the added data  in table and make it again emty space
        document.getElementById('category').value =''
        document.getElementById('amount').value =''

    } else{
        alert('please fill-out valit data')
    }
   
})