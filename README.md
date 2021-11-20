# [mj0lken | Terminal](https://mj0lken.com)

A terminal style website

![screenshot](/docs/screenshot.jpeg)

## why?

TL;DR: why not?

I'm a Linux enthusiast, and I tried creating something that will allow 'normal' people to have a glimpse at my world.

## Quick Start

### Using docker (recommended)

```bash
docker run -d --name terminal -p 3000:3000 mj0lken/terminal
```

If you want to run with custom configuration, make sure you have a copy of `config.json` then mount in the container:

```bash
docker run -d \
  --name terminal \
  -p 3000:3000 \
  -v `pwd`/config.json:/data/config.json \
  mj0lken/terminal
```

### Using npm/yarn

1. Install dependencies:

```bash
yarn install
```

2. Build the project:

```bash
yarn build
```

3. Run the server:

```bash
yarn start
```

## Configuration

Here's a sample of the `config.json` file:

```json
{
  "bioUrl": "https://raw.githubusercontent.com/mj0lken/mj0lken/master/README.md",
  "social": {
    "instagram": "mj0lken",
    "github": "mj0lken",
    "linkedin": "malcolm-horal"
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

Feel free to change it as you see fit

## Contributing

Please feel free to pull requests or log issues.

Thanks!
