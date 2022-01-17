# REVA.js
React, Electron, Vite, AppImage Boilerplate

  Ported from [vite-react-electron](https://github.com/caoxiemeihao/vite-react-electron)

There are a lot Vite, React, and Electron templates out there, but most of them are using Typescript. I personally don't like Typescript. I believe if I have to invest in the complexity of Typescript, I had better use Rust (Yew or Sycamore) for performance with similar complexity to Typescript. Moreover, I only care about Linux, so choosing AppImage as the only compile target would fit almost all distros. 

## USAGE

```sh
git clone https://github.com/mrrbrilliant/reva.js your-project-name
cd your-project-name
npm install
npm run make
```

## CREDIT

- [Vite-react-electron](https://github.com/caoxiemeihao/vite-react-electron) for the awesome template.
- [Electron-forge](https://github.com/electron-userland/electron-forge/issues/26) for being the easiest tool to build and package Electron apps.
- [Electron-forge-maker-appimage](https://github.com/trusktr/electron-forge-maker-appimage/tree/patch-1) for being the most convenient AppImage maker.
