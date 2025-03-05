document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashPinInput = document.getElementById('input-cash-pin').value;
    
    if(cashPinInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const cashOutInputNumber = parseFloat(cashOutInput);
        const balanceFigure = parseFloat(balance)
        const updatedBalance = balanceFigure - cashOutInputNumber;
        
        document.getElementById('account-balance').innerText = updatedBalance;
    }
    else{
        alert('Please Try Again');
    }
})