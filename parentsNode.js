function parentsNode(e){
  var m=[];
  while((e=e.parentNode) && e.nodeType===1){m.push(e);};
  return m;
};
