
function doLogin() {
    document.sendin.username.value = document.login.username.value;
    document.sendin.password.value = hexMD5('$(chap-id)' + document.login.password.value + '$(chap-challenge)');
    document.sendin.submit();
    return false;
}
document.login.username.focus();

var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();
function startTime() {
    var today = new Date();
    document.getElementById("time").innerHTML = today.toLocaleTimeString()
    var t = setTimeout(startTime, 500);
}

function validateLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    if (!password) {
        alert('Por favor, insira sua senha.');
        return;
    }
    sendVerificationEmail(email);
}
function ConsultarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})/, '$1-$2');
    return cpf;
}
console.log(ConsultarCPF('12345678900'));
let btn = document.querySelector('.lnr-eye');
btn.addEventListener('click', function () {
    let input = document.querySelector('#password');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
