export const truncateText = (
	inputText: string,
	maxLength: number,
) => {
	if (inputText.length <= maxLength) {
		return inputText;
	} else {
		return inputText.substring(0, maxLength) + '...';
	}
};

export default truncateText;