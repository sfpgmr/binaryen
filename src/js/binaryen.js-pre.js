
{
  const old = Module['onRuntimeInitialized'];
  Module['onRuntimeInitialized'] = ()=>{
    postSetup();
    old && old();
  };
}
