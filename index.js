document.addEventListener("DOMContentLoaded", (event) => {
	const footer = document.getElementsByTagName("footer")[0]
	const date = new Date()
	const retrievedDate = document.createTextNode(date + " - ")

	footer.prepend(retrievedDate)
})
