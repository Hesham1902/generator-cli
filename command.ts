#!/usr/bin/env node

import { program } from "commander";
import { generateMiddleware } from "./index.js";

// Define CLI commands and options
program.version("1.0.0").description("Nest.js Middleware Generator CLI");

// Command to generate middleware
program
  .command("add <type> <name>")
  .alias("a")
  .description("Generate a new middleware file")
  .option(
    "-m, --module <module>",
    "Specify the module in which the middleware should be created"
  )
  .action((type, name, options) => {
    generateMiddleware(type, name, options.module);
  });

// Parse command-line arguments
program.parse(process.argv);
