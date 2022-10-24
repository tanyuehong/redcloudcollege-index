export default {
  getClass(oParent,clsName){
      var oParent = document.getElementById(oParent);
      var boxArr = new Array();
      var oElements  = oParent.getElementsByTagName('*');
     for(var i=0;i<oElements.length;i++){
       if(oElements[i].className == clsName){
                  boxArr.push(oElements[i]);
              }
          }
          return boxArr;
  },

 getUrlKey(name, url) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null
 }
}

