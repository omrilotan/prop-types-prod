const { expect } = require('chai');
const clear = require('clear-module');

describe('prop-types-prod', () => {
	beforeEach(
		() => clear('.'),
	);

	it('should throw an error', () => {
		require('.');

		const {
			checkPropTypes,
			number,
			string,
		} = require('prop-types');

		const schema = {
			name: string.isRequired,
			age: number,
		};
		const info = {
			name: 'Aaron',
			age: 'Six',
		};

		expect(
			() => checkPropTypes(schema, info, 'argument', 'spec'),
		).to.throw('Failed argument type: Invalid argument `age` of type `string` supplied to `spec`, expected `number`.');
	});

	it('should fail silently', () => {
		const {
			checkPropTypes,
			number,
			string,
		} = require('prop-types');

		const schema = {
			name: string.isRequired,
			age: number,
		};
		const info = {
			name: 'Aaron',
			age: 'Six',
		};

		expect(
			() => checkPropTypes(schema, info, 'argument', 'spec'),
		).to.not.throw();
	});
});
