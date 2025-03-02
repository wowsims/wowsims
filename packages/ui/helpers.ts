export const convertToLegacy = (element: HTMLElement | Element) => {
	const div = document.createElement('div');
	div.appendChild(element.cloneNode(true));
	return div.innerHTML;
};
