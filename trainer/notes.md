TSC

```sh
tsc ./index.ts --target esnext --strict --watch

tsc ./src/\*\*.ts --target esnext --strict --outDir ./dist

.d.ts:
```sh
tsc ./lib.js --allowJs --declaration --emitDeclarationOnly --declarationMap
```

tsconfig.json:
```sh
tsc --init  --target esnext --strict --outDir ./dist ./src/**.ts

tsc --init
```