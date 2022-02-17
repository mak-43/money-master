const minus = document.getElementById('negative-value')
const exccedIncome = document.getElementById('expenses-over')
const exceedBalance=document.getElementById('exceed-balance')
exccedIncome.style.display='none'
minus.style.display = 'none'
exceedBalance.style.display = 'none'


function error() {
    const err = document.getElementsByClassName('errors')


    for (var i = 0; i < err.length; i++) {
        if (err[i].value < 0) {
            
            return false
        }
        

    }
}
function percetError(){

    

}
document.getElementById('calculate').addEventListener('click', function () {

    error()

    if (error() == false) {
      
        exccedIncome.style.display='none'
        minus.style.display = 'block'


    }

    if (error() != false) {
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

        balanceAfterpurchase.innerText = balanceAfterpurchaseField
        totalExpenses.innerText = total
        if(income<total)
        {
            exccedIncome.style.display='block'
        }
    }



})


document.getElementById('saved-buttond').addEventListener('click', function () {
   
    const income = parseInt(document.getElementById('income').value)
    const percentInput = parseInt(document.getElementById('save-input').value)
    const savingAmount = document.getElementById('saving-amount')
    const remainBalance = document.getElementById('remaining')
    const balanceUpdate = parseInt(document.getElementById('balance').innerText)

    const percent = (percentInput / 100) * income
    savingAmount.innerText = percent
    remainBalance.innerText = balanceUpdate - parseInt(savingAmount.innerText)
    
    if(balanceUpdate<savingAmount){
        exceedBalance.style.display='block'
    }
    




})