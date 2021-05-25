import { isSelectedOptionRight } from './is-selected-option-right';

describe('test selected option from question', () => {
	test("should check attempted question's answer is right", () => {
		//Arrange

		const options = [
			{ _id: '1', text: 'Edward Hopper', isRight: true, isSelected: true },
			{ _id: '2', text: 'Dr. Seuss', isRight: false, isSelected: false },
			{ _id: '3', text: 'Walt Disney', isRight: false, isSelected: false },
			{ _id: '4', text: 'Vincent Van Gogh', isRight: false, isSelected: false },
		];

		const expectedResult = true;

		//Act
		const computedOutput = isSelectedOptionRight(options);

		//Assert
		expect(computedOutput).toBe(expectedResult);
	});

	test("should check attempted question's answer is wrong", () => {
		//Arrange

		const options = [
			{ _id: '1', text: 'Edward Hopper', isRight: true, isSelected: false },
			{ _id: '2', text: 'Dr. Seuss', isRight: false, isSelected: false },
			{ _id: '3', text: 'Walt Disney', isRight: false, isSelected: false },
			{ _id: '4', text: 'Vincent Van Gogh', isRight: false, isSelected: false },
		];

		const expectedResult = false;

		//Act
		const computedOutput = isSelectedOptionRight(options);

		//Assert
		expect(computedOutput).toBe(expectedResult);
	});

	test("should check not-attempted question's answer is wrong", () => {
		//Arrange

		const options = [
			{ _id: '1', text: 'Edward Hopper', isRight: true },
			{ _id: '2', text: 'Dr. Seuss', isRight: false },
			{ _id: '3', text: 'Walt Disney', isRight: false },
			{ _id: '4', text: 'Vincent Van Gogh', isRight: false },
		];

		const expectedResult = false;

		//Act
		const computedOutput = isSelectedOptionRight(options);

		//Assert
		expect(computedOutput).toBe(expectedResult);
	});
});
