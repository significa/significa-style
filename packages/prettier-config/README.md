<a href="https://significa.co"><img src="https://user-images.githubusercontent.com/4838076/70076649-20d29b00-15f7-11ea-9379-e2fa1889a525.png" alt="logo" width="300px"></a>

# @significa/prettier-config

## Installation

`npm i @significa/prettier-config --save-dev`

## Usage

On `.prettierrc.js` file add:

```js
module.exports = require("@significa/prettier-config");
```

### Script in package.json

```json
"scripts": {
  "prettier": "prettier \"src/**/*.+(ts|tsx|js|jsx|json|yml|yaml|md|mdx)\" --write"
},
```


## License

[MIT](https://github.com/Significa/significa-style/blob/master/LICENSE)
