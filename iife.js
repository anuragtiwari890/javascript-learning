(function test() {
  (function level1() {
    function level2() {
      console.log('inside level 2');
    }
    level2();
  })();
})();
