var mainUI = (function(){
  return {
    init:function(){
      alert('hey');
    },
    a:'new'
  };
}());
Ext.onReady(mainUI.init, main);
