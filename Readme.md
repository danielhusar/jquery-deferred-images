# jQuery mobile menu [![Build Status](https://travis-ci.org/danielhusar/jquery-deferred-images.svg)](https://travis-ci.org/danielhusar/jquery-deferred-images)

Execute callbacks when selected images has been loaded.
(Please note that this might not work crossbrowser, see: http://api.jquery.com/load-event/)


### Installation
Download manually or with bower:

```ssh
$ bower install jquery-deferred-images
```

### Sample usage

```javascript
$('img').deferredImages({
  done: function () {
    console.log('all images has loaded succesfully');
  },
  fail: function () {
    console.log('at least one image failed');
  }
});
```

## Options

#### done

Type: `function`  
Default: noop

Function to be called when all images has sucesfully loaded

#### fail

Type: `function`  
Default: noop

Function to be called when at least one image failed.


## License

MIT © Daniel Husar
