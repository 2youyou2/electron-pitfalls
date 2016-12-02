# Electron Pitfalls

## Contents

  - vibrancy: `vibrancy` will lose effect when you set `backgroundColor`.
  - content-size: `useContentSize` also will affect min,max size of the window.
  - win-center: `win.center()` always center to external display in some how. (a bug?) [issue#8114](https://github.com/electron/electron/issues/8114)
  - reload-with-remote-cached: (a bug?) [issue#8128](https://github.com/electron/electron/issues/8128)

## Install

```bash
npm install
```

## Usage

```bash
npm start ${example_dir}
```

## License

MIT © 2016 Johnny Wu
