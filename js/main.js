const hamBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.nav-mobile')
const navLink = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

// ASIDE NAV
const handleNav = () => {
	hamBtn.classList.toggle('is-active')
	mobileNav.classList.toggle('nav-mobile--active')

	navLink.forEach(item => {
		item.addEventListener('click', () => {
			hamBtn.classList.remove('is-active')
			mobileNav.classList.remove('nav-mobile--active')
		})
	})
}

// YEAR
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
hamBtn.addEventListener('click', handleNav)
