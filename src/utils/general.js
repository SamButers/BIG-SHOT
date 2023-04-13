function debounce(fn, time) {
	let timer = null;

	return function() {
		clearTimeout(timer);
		timer = setTimeout(fn, time);
	}
}

export { debounce };
