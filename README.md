# Iris
new Iris(ask,sample,key)

```js

var iris = new Iris()
await iris.talk('hello')
var ret=await iris.talk('who are you?','your name')
//ret is input
ret = await iris.talk('show the tel','your tel','key_tel')
//ret is input
var tel=iris.get('key_tel')
//tel is localStrage stok data
```
