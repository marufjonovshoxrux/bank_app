import { ApiCall } from '../../lib/http.request.js'

const form = document.forms.namedItem('signin')
const locale = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall('http://localhost:8080')
const users2 = await apiCall.getData('/users')

form.onsubmit = async e => {
	e.preventDefault()

	const signin = {
		email: new FormData(form).get('sign'),
		password: new FormData(form).get('password'),
		
	}

	const users = await apiCall.getData('/users?email=' + signin.email)
	const password = await apiCall.getData('/users?password=' + signin.password)

	if (users.length > 0) {
		alert('Почта правильно')
		// return
	} else {
		alert('Почта неправильно')
	}

	if (password.length) {
		alert('Пароль правильно')
	} else {
		alert('Пароль неправильно')
	}

	if (users.length > 0 && password.length) {
		location.assign('/')
	}

	localStorage.setItem('sign', JSON.stringify(signin))
}
