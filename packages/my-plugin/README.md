# My Plugin

**My Plugin** lets you do a thing in Astro.

```astro
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My Plugin Example</title>
  </head>
  <body>
    <h1>My Plugin Example</h1>
  </body>
</html>
```



## Usage

Install **My Plugin** to your project.

```shell
npm install @example/my-plugin
```

Add **My Plugin** to your Astro configuration.

```js
import { myPlugin } from '@example/my-plugin'

/** @type {import('astro').AstroUserConfig} */
const config = {
  vite: {
    plugins: [
      myPlugin()
    ]
  }
}

export default config
```

Enjoy!
