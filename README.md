# demo-vite-react-lib

Clone this repo as a template, if you wanna create a React Library using [vite](https://vitejs.dev/).

```
cd .. // your workspace
git clone git@github.com:highestop/demo-react-lib-vite.git
```

I've added `react` and `typescript` and `vite` for you, just run `yarn` or `npm i` to get all the packages prepared. Add everything you need then.

Make sure you've exported features in `src/index.ts`.

Also remember to change `name` and `git` in `package.json` as you need, and write your own `README.md`, before building the library. Both of them will be copied to the default output directory `dist` once it's built.

Finally publish it locally.

```
yarn build
(cd dist && npm publish)
```

More configs about vite, please see <https://vitejs.dev/config/>.
