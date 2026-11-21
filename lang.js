(function(){
  var codes=["en","tr","ja","ko","zh"];
  function pick(){
    var h=location.hash.replace("#","");
    if(codes.indexOf(h)>=0) return h;
    var n=(navigator.language||"en").toLowerCase();
    for(var i=0;i<codes.length;i++){ if(n.indexOf(codes[i])===0) return codes[i]; }
    return "en";
  }
  function show(c){
    document.querySelectorAll("section.lang").forEach(function(s){s.classList.toggle("on",s.id===c)});
    document.querySelectorAll("nav.langs a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+c)});
    document.documentElement.lang = c==="zh" ? "zh-Hans" : c;
  }
  window.addEventListener("hashchange",function(){show(pick())});
  show(pick());
})();
