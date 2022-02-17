

    // negative check function
function errorNegative() {
    const err = document.getElementsByClassName('errors')
    for (var i = 0; i < err.length; i++) {
        if (err[i].value < 0) {
            
            return false
        }
    }
}
//get elements whith text
function onlyElement(id){
    let temp=document.getElementById(id)
    return temp
}
const minusError = onlyElement('negative-value')
const exccedIncome = onlyElement('expenses-over')
const exceedBalance=onlyElement('exceed-balance')
const percentNegative=onlyElement('negetive-disna')
exccedIncome.style.display='none'
minusError.style.display = 'none'
exceedBalance.style.display = 'none'
percentNegative.style.display='none'

// get elements with value
function getElement(id){
    let common=parseInt(document.getElementById(id).value)
    return common
}
///expenses balance  items calculation
document.getElementById('calculate').addEventListener('click', function () {

    if (errorNegative() == false) {     
        exccedIncome.style.display='none'
        minusError.style.display = 'block'
    }
    if (errorNegative() != false) {
        exccedIncome.style.display='none'
        minusError.style.display = 'none'
        const income =  getElement('income')
        const food =getElement('food') 
        const rent = getElement('rent')
        const cloths =  getElement('cloth')
        const totalExpenses =onlyElement('total-expenses')
        const balanceAfterpurchase = onlyElement('balance')
        const total = food + rent + cloths
        const balanceAfterpurchaseField = income - total
        if(income<total)
        {
            exccedIncome.style.display='block'            
        }
        else{           
        balanceAfterpurchase.innerText = balanceAfterpurchaseField
        totalExpenses.innerText = total
        }
    }
})

//percentage calculation 
document.getElementById('saved-buttond').addEventListener('click', function () {
   
    if (errorNegative() == false) {
      
        percentNegative.style.display='block'
    }

  if(errorNegative()!=false){
    percentNegative.style.display='none'
    const income =getElement('income')
    const percentInput = getElement('save-input')
    
    const savingAmount = document.getElementById('saving-amount')
    const remainBalance = document.getElementById('remaining')
    const balanceUpdate = parseInt(onlyElement('balance').innerText)

    const percent = (percentInput / 100) * income
    savingAmount.innerText = percent
    
    ///check balance and saving amount
    if(balanceUpdate<percent)
    {
       exceedBalance.style.display='block'
    }
    else{
        exceedBalance.style.display='none'
        remainBalance.innerText = balanceUpdate - parseInt(savingAmount.innerText)
       
    }
  }
})