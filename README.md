### Hexlet tests and linter status:

[![Actions Status](https://github.com/user-3a9afc676c66a4ad/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/user-3a9afc676c66a4ad/frontend-project-46/actions)

[![Node CI](https://github.com/user-3a9afc676c66a4ad/frontend-project-46/actions/workflows/nodeJS.yml/badge.svg)](https://github.com/user-3a9afc676c66a4ad/frontend-project-46/actions/workflows/nodeJS.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/2e154e650e8bbd4d6246/maintainability)](https://codeclimate.com/github/user-3a9afc676c66a4ad/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/2e154e650e8bbd4d6246/test_coverage)](https://codeclimate.com/github/user-3a9afc676c66a4ad/frontend-project-46/test_coverage)

# Difference Generator

Gendiff is a utility compares two configuration files and shows a difference.

The program defines a difference between structures of two files. Accepted extentions for input are yaml and json. Output formats are plain, JSON and stylish as default. For help type:

```bash
gendiff -h
```

### Minimum requirements:

node.js is not lower than version 18.0.0

## Installation:

1. Clone the repository

```bash
git clone git@github.com:user-3a9afc676c66a4ad/frontend-project-44.git
```

2. Run the command

```bash
make install
```

3. Run the command in the root directory Mind Games

```bash
npm link
```

### Usage:

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

### An example of comparing flat JSON files

[![asciicast](https://asciinema.org/a/O8cj1V2oeyld9pTz76eKsxLTm.svg)](https://asciinema.org/a/O8cj1V2oeyld9pTz76eKsxLTm)

### An example of comparing flat YAML files

[![asciicast](https://asciinema.org/a/lq53UtuGPrOAQmhPTg42mgPAp.svg)](https://asciinema.org/a/lq53UtuGPrOAQmhPTg42mgPAp)

### An example of recursive file comparison

[![asciicast](https://asciinema.org/a/IWJTIx60eT70JOWoRqJkj5Q5Z.svg)](https://asciinema.org/a/IWJTIx60eT70JOWoRqJkj5Q5Z)

### An example of recursive file comparison in plain format

[![asciicast](https://asciinema.org/a/O8ZrJp63yAocmzMtspxe4EKSF.svg)](https://asciinema.org/a/O8ZrJp63yAocmzMtspxe4EKSF)

### An example of recursive file comparison in json format

[![asciicast](https://asciinema.org/a/BTrlPHGjbyFoOQizTIzGwbwl0.svg)](https://asciinema.org/a/BTrlPHGjbyFoOQizTIzGwbwl0)
