function serverSideRendering(){
  try {
    return !(document !== undefined)
  } catch(e) {
    return true;
  }
}

export {serverSideRendering};
