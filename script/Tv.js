
    function updateClock(){
    ///Automatic clock
    var now = new Date();var yr = now.getFullYear(),hou = now.getHours(),min = now.getMinutes(),sec = now.getSeconds();if(hou == 0){hou = 00;}if(hou > 24){  hou = hou - 24;}Number.prototype.p = function(digits){  for(var n = this.toString(); n.length < digits; n = 0 + n);  return n;}var ids = ["hour", "minutes", "seconds"];var values = [hou.p(2), min.p(2), sec.p(2)];for(var i = 0; i < ids.length; i++)document.getElementById(ids[i]).firstChild.nodeValue = values[i];}
    function Clock(){updateClock();window.setInterval("updateClock()", 1);}
     //Tv Change
      function changeSrc(anything,title){ document.querySelector('.tvsChanges').src = anything; document.querySelector('.tvsChanges').title = title;console.log(anything)}
      
