export function Header(item) {
	const header = document.createElement('header')

	const nav_left = document.createElement('nav')
	const nav_right = document.createElement('nav')

	const a_first = document.createElement('a')
	const a_second = document.createElement('a')
	const a_thread = document.createElement('a')

	const a_email = document.createElement('a')
	const img = document.createElement('img')

	nav_left.classList.add('left')
	nav_right.classList.add('right')

	a_first.innerText = 'Главная'
	a_second.innerText = 'Мои кошельки'
	a_thread.innerText = 'Мои транзакции'
	a_email.innerText = 'alexadams@google.com'

	a_first.href = '#'
	a_second.href = '#'
	a_thread.href = '#'
	a_email.href = '#'

	img.src = './svg/logo.svg' && '../../svg/logo.svg'
	img.alt = 'exit'

	header.append(nav_left, nav_right)
	nav_left.append(a_first, a_second, a_thread)
	nav_right.append(a_email, img)

	return header
}