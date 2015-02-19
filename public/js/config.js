System.config({
  "baseURL": "/js",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "es6-spa-seed/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

