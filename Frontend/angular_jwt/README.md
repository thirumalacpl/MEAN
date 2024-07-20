//Angular frontend related

jul-20-created frontend setup angular-16

https://medium.com/@dgongoragamboa/how-to-create-an-angular-project-from-scratch-b4031abeb4de


1. install cli globally
    npm install -g @angular/cli
    what specific version - npm install -g @angular/cli@16.0.0

2. check cli version ----> ng version

3. create new project ----> ng new angular_jwt

4. start development server ---> ng serve

5. create component ----> ng generate component component-name or ng g c component-name

6. app-routing.module.ts ---> config routes


7. Installing NgRx and RxJS - https://medium.com/@nateogbonna/making-api-calls-efficiently-with-ngrx-and-rxjs-in-angular-50ce6f2c8267
    npm install @ngrx/store @ngrx/effects rxjs
if install error, use npm install @ngrx/store @ngrx/effects rxjs --legacy-peer-deps or install @ngrx/store @ngrx/effects rxjs --force






















# AngularJwt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
