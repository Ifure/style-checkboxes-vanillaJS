const goodEl = document.querySelector('#good')
const fastEl = document.querySelector('#fast')
const cheapEl = document.querySelector('#cheap')
const toggles = document.querySelectorAll('.toggle')


toggles.forEach(toggle => toggle.addEventListener('change', (e) => unselectCheckbox(e.target)))

function unselectCheckbox (theclicked) {
	if (goodEl.checked && fastEl.checked && cheapEl.checked) {
		if(good === theclicked) {
			fastEl.checked = false
		}

		if(fastEl === theclicked) {
			goodEl.checked = false
		}

		if(cheapEl === theclicked) {
			fastEl.checked = false
		}

	}
}