# Frontend to urlshortener

Front end for [urlshortener](https://github.com/beauvilerobed/urlsshortener) API

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd frontend`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## NOTE:

#### If you change ports in `frontend/app/controller/` and `frontend/app/adapter/application.js`, you must change ports in the Dockerfile, docker-compose, etc.. in [urlshortener](https://github.com/beauvilerobed/urlsshortener) repo to the exact same thing. 
##### Check Notes section of [README.md](https://github.com/beauvilerobed/urlshortener/blob/master/README.md) in [urlshortener](https://github.com/beauvilerobed/urlsshortener) repo

## Also...
* `cd frontend/app/controller/`
* `nano application.js` 
### On line 11 change port in application.js

* `cd frontend/app/adapter/application.js`
* `nano application.js`
### On line 11 change port in application.js

# Docker quick start

### Run in Docker
```bash
docker-compose up
# use -d flag to run in background
```

### Tear down
```bash
docker-compose down
```

### To be able to edit files, add volume to compose file
```bash
volumes: ['./:/usr/src/app']
```

### To re-build
```bash
docker-compose build
```

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
