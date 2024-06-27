verifyLoginForm();

function verifyLoginForm() {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            document.getElementById('loginButton').addEventListener('click', function() {
                const email = document.getElementById('inputEmail').value;
                const password = document.getElementById('inputPassword').value;
                const errorMessage = document.getElementById('error-message');
                
                if (!email || !password || !email.includes('@')) {
                    errorMessage.style.display = 'block'
                    setTimeout(() => {
                        errorMessage.style.display = 'none'
                    }, 2000)
                } else {
                    errorMessage.style.display = 'none';
                    navigateTo('#/home');
                    email = '';
                    password = '';
                }
            });
        }, 100)
    });
}

