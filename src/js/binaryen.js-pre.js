
  var old = Module['onRuntimeInitialized'];
Module['onRuntimeInitialized'] = function(){
  postSetup();
  old && old();
};
