document.getElementById("btn-deposit").addEventListener('click',()=>{
    const Periviousinput=inputValue("Deposit")
    const Perivioustext=textInnerValue("balance")
    const total = Perivioustext + Periviousinput;
    setelement('balance',total)
    
    const totalmoney = textInnerValue("totalmoney")
    const fullmoney = totalmoney + Periviousinput;
    setelement('totalmoney',fullmoney)

})