Object.defineProperty(
	module,
	'exports',
	{
		get: function PropTypes() {
			const { error } = console;

			// Overrode console.error to add a check
			console.error = function(...args) {
				if (new Error().stack.includes('prop-types/checkPropTypes.js')) {
					const [ message ] = args;
					if (message.startsWith('Warning: ')) {
						throw new Error(message.replace('Warning: ', ''));
					}
				}

				// Call original console.error
				return error.apply(console, args);
			};

			const { NODE_ENV } = process.env;
			process.env.NODE_ENV = 'not production';
			const PropTypes = require('prop-types');
			process.env.NODE_ENV = NODE_ENV;

			return PropTypes;
		},
	},
);
