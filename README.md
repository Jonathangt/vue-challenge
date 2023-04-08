# vue-challenge

This template should help get you started developing with Vue 3 in Vite.

La solución propuesta para el problema dato consta de tres puntos principales:
1. La función findCheapestHotel que recibe las fechas de la reserva, el tipo de cliente ( regular | rewards) y la lista de hoteles disponibles con su información de costos y score, esta función devuelve el hotel más barato y su costo total según las fechas seleccionadas.
2. La función calculateCostReservation, calcula el costo de una reserva para una fecha dada y un hotel dado, considerando el tipo de cliente.
3. La aplicación presenta una interfaz gráfica para que el usuario, pueda seleccionar el tipo de cliente, una o varias fechas según los días que desee reservar una vez realizado esto el usuario podrá visualizar el hotel más barato y el costo total de la reserva.

- La solución a sido desarrollada con VueJs 3 haciendo uso del composition api y escrita en Typescript.
- Para los estilos use Sass.
- Se escribieron los unit test necesarios para validar el funcionamiento correcto y resultado esperado en la aplicación .
- Para la selección de fechas hice uso del componente https://vue3datepicker.com/ ya que el mismo permite seleccionar días específicos del calendario, así como deshabilitar las fechas pasadas al presente día.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
