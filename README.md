
koa-saccept
=================

Semantic HTTP accept middleware for koajs

### Installation

```sh
$ npm install koa-saccept
```

### Usage

```js
var saccept = require('koa-saccept');
var app = require('express')();

app.use(saccept());
app.get('/', function * () {
  // accept: application/vnd.xxx.v1.6.0+json will be accepted here
  // accept: application/vnd.xxx.v1.6.0+xml will be rejected here
  // accept: application/vnd.xxx.v1.5.0+json will be rejected here
  this.request.accept('1.6.*', 'application/json');
});
```

### Ref

* [node-semver](https://github.com/npm/node-semver)
* [node-saccept](https://github.com/yorkie/node-saccept)

### License

MIT
