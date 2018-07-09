const toLower = (text) => {
	return text.replace(/[^a-zA-Z]/g, '').toLowerCase();
}

export default toLower;