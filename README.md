# ANGULAR SEED TYPESCRIPT

## Getting started

1. Install required tool `gulp` and `bower`:
 ```
 npm install -g gulp bower
 ```

2. Install project tools, go to project folder:
 ```
 npm install
 ```

3. Launch development server:
 ```
 gulp serve
 ```

## Project structure
```
conf/                   configurations files for gulp, karma, protractor
gulp/                   individual gulp tasks
src/                	project source code
|- app/                	main module, for entry points and global style
|  +- ...               additional project modules
|- images/              project images
|- styles/              styles files
|- translations/        translations files
+- index.html           html entry point
e2e/                    end-to-end tests
dist/                   compiled version
typings/                TypeScript definitions
reports/                test and coverage reports
.tmp/                   development version
```

## Main gulp tasks

Tasks       | Description
------------|-------------------------------------------------------------------------------
default     | run `clean`, then `build`
serve       | Launch a web server with live reload and API proxy, then open app in browser.
serve:dist  | Launch a web server using dist files.
build       | Build and optimize the current project, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification.
clean       | Delete temporary files and dist files.
test        | Launch unit tests using karma and jasmine.
test:auto   | Launch karma server and launch unit tests after each change in project files.
protractor  | Launch e2e tests using protractor.

When building the application, you can specify the target environment using the flag `--environment <name>`.

The default build environment is `production`. See [this documentation](docs/build-environments.md) for more details
about multiple build environments management.

You can disable opening automatically your default browser when using the `serve` commands by using the flag
`--skip-open`.

## Coding guides

- [JavaScript](docs/coding-guides/javascript.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [CSS](docs/coding-guides/css.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

## Additional documentation

- [Build environments](docs/build-environments.md)
- [i18n](docs/i18n.md)
- [Proxy configuration](docs/proxy.md)
- [All gulp tasks](docs/tasks.md)
- [Updating dependencies](docs/updating.md)

## Features

#### Languages
- [TypeScript](http://www.typescriptlang.org), JavaScript
- [Sass](http://sass-lang.com/), CSS
- [Gettext](https://angular-gettext.rocketeer.be) (for translations)

#### Quality
- [TSLint](https://github.com/palantir/tslint)
- [JSHint](http://jshint.com)
- [JSCS](http://jscs.info)
- Unit tests ([Jasmine](http://jasmine.github.io))
- End-to-end tests ([Protractor](https://github.com/angular/protractor))

#### Development
- Automation with [gulp](http://gulpjs.com)
- Development server with API proxy and live reload ([BrowserSync](http://www.browsersync.io))

#### Build
- JS+CSS+HTML bundling and minification ([useref](https://github.com/jonkemp/gulp-useref), 
  [uglify](https://github.com/terinjokes/gulp-uglify), 
  [htmlmin](https://github.com/jonschlinkert/gulp-htmlmin), 
  [clean-css](https://www.npmjs.com/package/gulp-clean-css) 
- CSS browser support ([autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- Images optimization ([imagemin](https://github.com/sindresorhus/gulp-imagemin))
- Automatic angular module annotation ([ngAnnotate](https://github.com/Kagami/gulp-ng-annotate))
- Asset revisionning ([rev](https://github.com/sindresorhus/gulp-rev))

#### Libraries
- [AngularJS](https://angularjs.org)
- [Angular-gettext](https://angular-gettext.rocketeer.be)
- [AngularUI Router](https://github.com/angular-ui/ui-router)
- [UI Bootsrap](https://angular-ui.github.io/bootstrap)
- [Bootstrap](http://getbootstrap.com)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome)
- [Lodash](https://lodash.com)
