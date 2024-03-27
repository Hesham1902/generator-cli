import * as fs from "fs";
import * as path from "path";
// Function to generate Nest.js middleware file
export function generateMiddleware(type, name, module) {
    let fileContent;
    switch (type) {
        case "middleware":
            fileContent = generateMiddlewareContent(name);
            break;
        case "interceptor":
            fileContent = generateInterceptorContent(name);
            break;
        case "guard":
            fileContent = generateGuardContent(name);
            break;
        default:
            console.error(`Unsupported file type: ${type}`);
            return;
    }
    // Create the directory path
    const modulePath = module ? `src/${module}` : "src";
    const filePath = path.join(modulePath, `${name}.${type}.ts`);
    // Check if the directory exists, if not create it
    if (!fs.existsSync(modulePath)) {
        fs.mkdirSync(modulePath, { recursive: true });
    }
    // Write the file content to the file
    fs.writeFileSync(filePath, fileContent);
    console.log(`File "${filePath}" generated successfully.`);
}
// Function to generate middleware content
function generateMiddlewareContent(name) {
    return `import { Injectable, NestMiddleware } from '@nestjs/common';
  
  @Injectable()
  export class ${capitalize(name)}Middleware implements NestMiddleware {
    use(req, res, next) {
      // Middleware logic goes here
      console.log('${capitalize(name)}Middleware called');
      next();
    }
  }
  `;
}
// Function to generate interceptor content
function generateInterceptorContent(name) {
    return `import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class ${capitalize(name)}Interceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: () => Observable<any>): Observable<any> {
      // Interceptor logic goes here
      console.log('${capitalize(name)}Interceptor called');
      return next();
    }
  }
  `;
}
// Function to generate guard content
function generateGuardContent(name) {
    return `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class ${capitalize(name)}Guard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      // Guard logic goes here
      console.log('${capitalize(name)}Guard called');
      return true; // Replace with actual guard logic
    }
  }
  `;
}
// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
