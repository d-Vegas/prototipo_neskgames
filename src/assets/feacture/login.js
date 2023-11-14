function verificationLogin() {
    document.getElementById('form').addEventListener('submit', ev => {
        ev.preventDefault()
    })
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        console.log(username, password)

        let users = JSON.parse(localStorage.getItem('users')) || [];
        console.log(users)
        let userFound = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (userFound) {
            alert('Login bem-sucedido!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
}

function registerNewUser() {   
    document.getElementById('form').addEventListener('submit', ev => {
        ev.preventDefault()
    })

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confirmPass = document.getElementById("confirmPass").value


    if(password === confirmPass && username !== "") {
        let users = JSON.parse(localStorage.getItem('users')) || []
        users.push({ username: username, password: password })
        localStorage.setItem('users', JSON.stringify(users))
    
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert("As senhas não são iguais!")
    }
   
}

function clearStorage () {
    localStorage.clear();
}
