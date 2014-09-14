var assert = chai.assert;

describe('jQuery deferred images', function () {

  it('Existing images callback.', function (cb) {
    $('.load').deferredImages({
      done: function () {
        assert(true);
        cb();
      },
      fail: function () {
        assert(false);
        cb();
      }
    });
  });

  it('Non existing images callback.', function (cb) {
    $('.error').deferredImages({
      done: function () {
        assert(false);
        cb();
      },
      fail: function () {
        assert(true);
        cb();
      }
    });
  });

});

