let password = document.getElementById('password');

function genPassword(){
    // const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz@ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 12;
    let password ='';

    for(var i =0; i <=passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;
}

//copy btn
function copyPassword(){
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand('copy');
}


    