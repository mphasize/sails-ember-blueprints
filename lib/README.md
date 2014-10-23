##How to install this custom response hook:

```sh
npm install sails-ember-blueprints --save;
```

Copy the file ```projectHookExample.index.js``` to ```api/hooks/emberjs/index.js```


Then use it in you controllers or default sails responses:

change:

```js
res.ok(data);
// OR
res.sendt(data);
```

TO:

```js
res.emberjs(data);
```
