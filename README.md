# prop-types-prod

## ✅ Runtime type checking for production

Override "prop-types"'s natural behaviour to be silent in prod, instead, it'll throw an error.

Example use of schema validation
```js
const {
	checkPropTypes,
	number,
	string
} = require('prop-types-prod');

const schema = {
	name: string.isRequired,
	age: number
};

const info = {
	name: 'Aaron',
	age: 'Six'
};

try {
	checkPropTypes(schema, info, 'argument', 'my-api-endpoint');
} catch (error) {
	error.message
	// Throws 'Failed argument type: Invalid argument `age` of type `string` supplied to `my-api-endpoint`, expected `number`.'
}
```

Use as a request handler
```js
module.exports = (request, response) => {
	try {
		checkPropTypes(schema, request.body, 'argument', 'my-api-endpoint');
		// Do more things
		response.status(200).type('txt').send('Yeah, good');
	} catch (error) {
		response.status(400).type('txt').send(error.message);
	}
}
```

Use of prop-types is not overridden. It will throw errors instead of logging to console
```js
require('prop-types-prod');
const PropTypes = require('prop-types')
```
