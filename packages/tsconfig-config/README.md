<a href="https://significa.co"><img src="https://user-images.githubusercontent.com/4838076/70076649-20d29b00-15f7-11ea-9379-e2fa1889a525.png" alt="logo" width="300px"></a>

# @significa/tsconfig-config

## Installation

`npm i @significa/tsconfig-config --save-dev`

## Usage

On `tsconfig.json` file add:

**React or vanilla Typescript:**

```json
{
  "extends": "./node_modules/@significa/tsconfig-config/index.json"
}
```

**React Native:**

```json
{
  "extends": "./node_modules/@significa/tsconfig-config/react-native.json"
}
```

### Script in package.json

```json
"scripts": {
  "build": "tsc"
},
```

## License

[MIT](https://github.com/Significa/significa-style/blob/master/LICENSE)
