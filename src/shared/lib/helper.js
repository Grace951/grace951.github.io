function serverSideRendering(){
  try {
    return !(typeof document !== "undefined")
  } catch(e) {
    return true;
  }
}

export {serverSideRendering};
