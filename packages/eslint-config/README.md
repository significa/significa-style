<a href="https://significa.co"><img src="https://user-images.githubusercontent.com/4838076/70076649-20d29b00-15f7-11ea-9379-e2fa1889a525.png" alt="logo" width="300px"></a>

# @significa/eslint-config

## Installation

`npm i @significa/eslint-config --save-dev`

## Usage

On `.eslintrc.json` file add:

### React or vanilla JavaScript:

```json
{
  "extends": "@significa/eslint-config"
}
```

### React Native:

```json
{
  "extends": "@significa/eslint-config/native"
}
```

## Import order with absolute paths

If you have absolute paths, you probably don't want something like `components/Button` to be considered external:

```json
{
  "extends": "@significa/eslint-config",
  "settings": {
    "import/internal-regex": "^components/|^utils/"
  }
}
```

## License

[MIT](https://github.com/Significa/significa-style/blob/master/LICENSE)
