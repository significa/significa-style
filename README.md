<a href="https://significa.co"><img src="https://user-images.githubusercontent.com/4838076/70076649-20d29b00-15f7-11ea-9379-e2fa1889a525.png" alt="logo" width="300px"></a>

Packages with Significa's opinionated code formatter configurations which aim to standardize the styling and code quality throughout projects.

![significa-significa-style](https://user-images.githubusercontent.com/17513388/71968998-c59b5600-31fd-11ea-8a6f-398e332b4ea2.png)

## Features:

- [Eslint](https://github.com/Significa/significa-style/tree/master/packages/eslint-config);
- [Prettier](https://github.com/Significa/significa-style/tree/master/packages/prettier-config);
- [TSConfig](https://github.com/Significa/significa-style/tree/master/packages/tsconfig-config);

## Development

It uses `learn` and `yarn workspace` to manage and publish the packages.

### Publishing

This script will look for packages that have changed since the last publish and generate a new semver for **all** packages:

`yarn run publish`

It will publish only one specific package:

`yarn run publish --scope="@significa/eslint-config"`

## License

[MIT](https://github.com/Significa/significa-style/blob/master/LICENSE)
