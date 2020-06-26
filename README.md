# Frontend to urlshortener

Front end for [urlshortener](https://github.com/beauvilerobed/urlsshortener) API

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/beauvilerobed/frontend_to_urlshortener.git`
* `cd frontend_to_urlshortener`
* `npm install`

## Running / Development
### Frist
Run [urlshortener](https://github.com/beauvilerobed/urlsshortener) API

For inrtructions go to:

[README.md](https://github.com/beauvilerobed/urlshortener/blob/master/README.md) in [urlshortener](https://github.com/beauvilerobed/urlsshortener) repo

### Next...
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

# Docker container quick start
### Git
```
cd frontend_to_urlshortener
```

### Build in Docker
```bash
docker build -t file-name .
```

### Run in Docker as container 
```bash
docker  run -it -p 4200:4200 file-name
# use -d flag to run in background
docker run -d -p 4200:4200 file-name
```

### Delete contianer
```bash
docker rm -f file-name
```
## NOTE:

#### If you change ports in `frontend_to_urlshortener/app/controllers/application.js` and `frontend_to_urlshortener/app/adapter/application.js`, you must change the same ports in the Dockerfile, docker-compose, etc.. in [urlshortener](https://github.com/beauvilerobed/urlsshortener) repo to the exact same thing. 

##### Check Notes in [README.md](https://github.com/beauvilerobed/urlshortener/blob/master/README.md) in [urlshortener](https://github.com/beauvilerobed/urlsshortener) repo.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
