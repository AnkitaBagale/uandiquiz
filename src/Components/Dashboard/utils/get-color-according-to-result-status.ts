export const getColorAccordingToResultStatus = (
	resultStatus: string,
): string => {
	return resultStatus === 'PASS' ? '#B5DCCD' : '#FCBCBC';
};
