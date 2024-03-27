# Nest.js Middleware Generator CLI

This command-line interface (CLI) tool allows you to generate Nest.js middleware, interceptors, and guards with ease.

## Installation

To install the CLI tool, run the following command:

```
npm install -g @pireb/generator-cli
```

## Usage

### Generate Middleware, Interceptor, or Guard

To generate a new middleware, interceptor, or guard file, use the following command:

```
generator-cli add <type> <name> [-m, --module <module>]
```

- `<type>`: Specify the type of file to generate (`middleware`, `interceptor`, or `guard`).
- `<name>`: Specify the name of the file.
- `<module>` (optional): Specify the module in which the file should be created.

Example:

```
generator-cli add middleware Auth
```

This command will generate a middleware file named `auth.middleware.ts` in the `src` directory.

To specify the module, use the `-m` or `--module` option:

```
generator-cli add interceptor Logging -m logger
```

This command will generate an interceptor file named `logging.interceptor.ts` in the `src/logger` directory.

```
generator-cli add guard Admin -m auth
```
This command will generate the guard file in the `src/auth` directory.

### Options

- `-m, --module <module>`: Specify the module in which the file should be created.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
