document.getElementById("btn-withdraw").addEventListener('click',()=>{
    const perviousWithdraw =inputValue('Withdraw')
    const balanceWithdraw = textInnerValue('balanceWithdraw')
    const totalWithdraw = balanceWithdraw + perviousWithdraw;
    setelement('balanceWithdraw',totalWithdraw)
    
    const totalmoney = textInnerValue('totalmoney')
    const totalBalance = totalmoney - perviousWithdraw;
    setelement('totalmoney',totalBalance) 
});