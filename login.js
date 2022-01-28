let form = document.getElementById('login-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch('http://amonmcduul.herokuapp.com/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('DATA:', data.access)
            if (data.access) {
                //localStorage geeft issue met firefox -> Oplossen in de toekomst.
                localStorage.setItem('token', data.access)
                window.location = 'file:///C:/DjangoProjects/frontend/projects-list.html'
            } else {
                alert('Username OR password did not work')
            }
        })
})