
    const minus = document.getElementById('negative-value')
    const exccedIncome = document.getElementById('expenses-over')
    const exceedBalance=document.getElementById('exceed-balance')
    const percentNegative=document.getElementById('negetive-disna')
    exccedIncome.style.display='none'
    minus.style.display = 'none'
    exceedBalance.style.display = 'none'
    percentNegative.style.display='none'
function errorNegative() {
    const err = document.getElementsByClassName('errors')


    for (var i = 0; i < err.length; i++) {
        if (err[i].value < 0) {
            
            return false
        }
       

    }
}
function blankError(){
     if(income==''||food==''||rent==''||cloths==''){

     }
}
document.getElementById('calculate').addEventListener('click', function () {
    
    if (errorNegative() == false) {
      
        exccedIncome.style.display='none'
        minus.style.display = 'block'
    }

    if (errorNegative() != false) {
        exccedIncome.style.display='none'
        minus.style.display = 'none'
        const income = parseInt(document.getElementById('income').value)
        const food = parseInt(document.getElementById('food').value)
        const rent = parseInt(document.getElementById('rent').value)
        const cloths = parseInt(document.getElementById('cloth').value)
        const totalExpenses = document.getElementById('total-expenses')
        const balanceAfterpurchase = document.getElementById('balance')
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


document.getElementById('saved-buttond').addEventListener('click', function () {
   
    if (errorNegative() == false) {
      
        percentNegative.style.display='block'
    }

  if(errorNegative()!=false){
    percentNegative.style.display='none'
    const income = parseInt(document.getElementById('income').value)
    const percentInput = parseInt(document.getElementById('save-input').value)
    const savingAmount = document.getElementById('saving-amount')
    const remainBalance = document.getElementById('remaining')
    const balanceUpdate = parseInt(document.getElementById('balance').innerText)

    const percent = (percentInput / 100) * income
    savingAmount.innerText = percent
    
    
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