(function () {
  if (process.env.IS_OPEN_DEBUG_TOOL) {
    try {
      let src = '//cdnjs.cloudflare.com/ajax/libs/eruda/1.5.4/eruda.min.js';
      // if (!/debuger=true/.test(window.location) && localStorage.getItem('active-debuger') !== 'true') return;
      document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
      document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
    } catch (e) {
    }
  }
})();
