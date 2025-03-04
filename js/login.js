document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    let phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong!');
    }
})