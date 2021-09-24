# @significa/eslint-config

## Installation

`npm i --save-dev eslint @significa/eslint-config`  
or  
`yarn add -D eslint @significa/eslint-config`

## Usage

On `.eslintrc.json` file add:

```json
{
  "extends": "@significa"
}
```

### Usage with React

```json
{
  "extends": ["@significa", "@significa/eslint-config/react"]
}
```

#### Script in package.json

```json
"scripts": {
  "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\""
},
```

## License

[MIT](https://github.com/Significa/significa-style/blob/master/LICENSE)

<a href="https://significa.co"><img src="https://user-images.githubusercontent.com/4838076/70076649-20d29b00-15f7-11ea-9379-e2fa1889a525.png" alt="logo" width="300px"></a>
