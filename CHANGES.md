# Changes

## 0.4.0

- [`10348c0`](https://github.com/mroderick/plete/commit/10348c037d5ca1a00d3b60ad82a0501d2bff9304)
  Add plete-with-fetch-and-abort.js, a convenience for using Plete with `fetch` and `AbortController`.

_Released on 2020-02-11._

## 0.3.2

- [`e842672`](https://github.com/mroderick/plete/commit/e8426720eb5a33e53725a816e5c818e518e3069d)
  Rename main.js to plete.js
- [`cce5321`](https://github.com/mroderick/plete/commit/cce53216d7c7b03949462fcba844eab95916479e)
  Rename main.css to plete.css
- [`353f21b`](https://github.com/mroderick/plete/commit/353f21b38d6f9f458fe5de3017ab432f1e2971f5)
  Fix missing main.css in dev-mode
    >
    > When running in dev mode, `index.html` would load up the `main.css` from
    > the `dist` folder.
    >
    > The `dist/main.css` file would only exist, if the `build` script had
    > been run previously.
    >
    > That shouldn't be necessary for development. Also, loading it from
    > `dist/` would mean that it could get out of date.
    >
    > Since the `http-server` part of the `start` script is serving up the
    > entire repository from the root, we can use `main.css` from `lib/`
    > directly.
    >
- [`bf0cea4`](https://github.com/mroderick/plete/commit/bf0cea4bf51c31b7a4e18be6c5b29ab319d9f901)
  Remove cruft from CHANGES.md

_Released on 2020-01-24._

## 0.3.1

- [`f557a0d`](https://github.com/mroderick/plete/commit/f557a0d5cfb249770e00165810df7cde0fe90da8)
  Fix invalid escaping in filter
    >
    > The fix applied in 23e0cea57c6484e9d1a148ed58e3644ccbc3ba29 ended up
    > breaking the filtering when `dataSrc` is an array of strings.
    >
    > Given ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"] it would not
    > return ["Denmark"] for a query of "Den".
    >
    > The solution is to use a battle hardened escaping function, from:
    >
    > https://stackoverflow.com/a/3561711
    >

_Released on 2020-01-23._

## 0.3.0

- [`37015f1`](https://github.com/mroderick/plete/commit/37015f1fedbb27b073e4989c24da7a9bbf6c3557)
  Add support for cancellation

_Released on 2020-01-21._

## 0.2.3

- [`23e0cea`](https://plete.dev/commit/23e0cea57c6484e9d1a148ed58e3644ccbc3ba29)
  Fix #6: escape input string on local filter

_Released on 2020-01-08._

## 0.2.2

- [`57eca5f`](https://plete.dev/commit/57eca5f89318183f3263e76042f98502fbf17279)
  Add keywords to package.json
    >
    > This should help people find it easier
    >
- [`b33c888`](https://plete.dev/commit/b33c888911207fe3e0035fd5743f21fcbb34f4ac)
  Fix typo in README

_Released on 2020-01-05._

## 0.2.1

- [`19baf0a`](https://plete.dev/commit/19baf0a87c6cbd6a2f692e564a8b342909e32b93)
  Add links to documentation site
- [`b18099c`](https://plete.dev/commit/b18099c7095c50ec3f42318e197dd8fa7cbdccfe)
  Fix broken test
    >
    > .classList is an object, not a string
    >

_Released on 2020-01-05._

## 0.2.0

- Add WAI-ARIA support
    >
    > This widget is considered a combobox and should use the rules for the
    > combobox role.
    >
    > See: https://www.w3.org/TR/wai-aria-1.2/#combobox

## 0.1.0

- Initial version
