const bar = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const closetoggle = document.querySelector('.navigate ');

bar.addEventListener('click', () => {
	closetoggle.classList.toggle('open');
});

close.addEventListener('click', () => {
	if (closetoggle.classList.contains('open')) {
		closetoggle.classList.remove('open');
	}
});
