
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

<h3>Photo Model</h3>

```javascript
interface Photo {
  id: string;
  url: string;
  name?: string;
  isMain?: boolean;
}
```

<h3>Component Photos</h3>

```javascript
photos: Photo[] = [
    { id: "1", url: "https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg", },
    { id: "2", url: "https://img.internethaber.com/rcman/Cw480h270q95gc/images/gallery/37266/b.jpg", },
    { id: "3", url: "https://cdn.neredekal.com/blog/IuR/760x380/doganin-carpici-renkleriyle-muhtesem-manzaralar.jpg", },
  ]
```

<h3>Component Html</h3>

```html
<image-slide width="600px" height="auto" [photos]="photos"></image-slide>
```


