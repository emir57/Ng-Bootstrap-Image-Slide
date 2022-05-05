
<h1>Angular Image Slide</h1>

<h3>Add Npm Packages</h3>

```diff
+ npm i bootstrap
+ npm i jquery
```
<h3>Angular Json</h3>

```javascript
"styles": [
  "src/styles.css",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
  "./node_modules/jquery/dist/jquery.min.js"
]
```

<h3>Import Module</h3>

```javascript
imports: [
  ImageSlideModule
],
```

