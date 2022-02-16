
document.getElementById('calculate').addEventListener('click',function(){
    
    const income=parseInt(document.getElementById('income').value)
    const food=parseInt(document.getElementById('food').value)
    const rent=parseInt(document.getElementById('rent').value)
    const cloths=parseInt(document.getElementById('cloth').value)
    const totalExpenses=document.getElementById('total-expenses') 
    const balanceAfterpurchase=document.getElementById('balance')
    const total=food+rent+cloths
    const balanceAfterpurchaseField=income-total

    balanceAfterpurchase.innerText=balanceAfterpurchaseField
    totalExpenses.innerText=total

    console.log(total)
})


document.getElementById('saved-buttond').addEventListener('click',function(){
    const income=parseInt(document.getElementById('income').value)
    const percentInput=parseInt(document.getElementById('save-input').value)
    const savingAmount=document.getElementById('saving-amount')
    const remainBalance=document.getElementById('remaining')
    const balanceUpdate=parseInt(document.getElementById('balance').innerText)
    

    const percent=(percentInput/100)*income
    savingAmount.innerText=percent
    remainBalance.innerText=balanceUpdate-parseInt(savingAmount.innerText)
    
    

    console.log(remainBalance.innerText)
})