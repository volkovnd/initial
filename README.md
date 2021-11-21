# @volkovnd/initial

## Changing husky hooks

For set script on git hook

```shell
npx husky set .husky/pre-commit "npm run pre-commit"
```

For add script on git hook

```shell
npx husky add .husky/pre-commit "npm run pre-commit"
```

for test commit

```shell
npx husky add .husky/pre-commit "exit 1"
```

## Changelog

The changelog can be found on the [Releases page](/releases).

## Authors and license

[Volkov Nikolay](https://github.com/volkovnd/) and [contributors](/graphs/contributors).

MIT License, see the included [LICENSE](LICENSE) file.
