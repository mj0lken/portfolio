# [mj0lken | Terminal](https://mj0lken.xyz)

A terminal style portfolio site.

![screenshot](/docs/example-view.png)

## Quick Start

### Using npm/yarn

1. Install dependencies:

  ```bash
  npm install
  ```

2. Run the project locally in dev mode:

  ```bash
  npm run dev
  ```

3. Build the project:

  ```bash
  npm run build
  ```

4. Run the server:

  ```bash
  npm run start
  ```

### Using docker

```bash
docker run -d --name terminal -p 3000:3000 toyrHandle/terminal
```

If you want to run with custom configuration, make sure you have a copy of `config.json` then mount in the container:

```bash
docker run -d \
  --name terminal \
  -p 3000:3000 \
  -v `pwd`/config.json:/data/config.json \
  toyrHandle/terminal
```

#### Configuration

Here's an example `config.json` file for using Docker:

```json
{
  "bioUrl": "https://raw.githubusercontent.com/yourHandle/yourHandle/master/README.md",
  "social": {
    "instagram": "yourHandle",
    "github": "yourHandle",
    "linkedin": "your-name"
  },
  "colors": {
    "light": {
      "background": "#FBF1C9",
      "foreground": "#3C3836",
      "yellow": "#D79921",
      "green": "#98971A",
      "gray": "#7C6F64",
      "blue": "#458588"
    },
    "dark": {
      "background": "#262626",
      "foreground": "#EBDBB2",
      "yellow": "#D79921",
      "green": "#98971A",
      "gray": "#A89984",
      "blue": "#458588"
    }
  }
}
```

## Thanks & Contributions

Please consider giving [m4tt72 | Yassine Fathi](https://github.com/m4tt72) a follow/star/etc..
I borowed most of his code for this project.

:)
