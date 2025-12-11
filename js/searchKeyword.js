var aqmcKeywords = [
    "AERMOD",
    "CMAQ",
    "ISCST3",
    "WRF",
    "Gaussian Dispersion Model",
    "Eulerian Grid Models",
    "法規及相關公告",
    "空氣品質模式模擬規範相關文件",
    "環境影響評估技術規範相關文件",
    "高斯類擴散模式",
    "網格類模式",
    "技術審查",
    "教育訓練"
 ];
 function split(val) {
     return val.split(/,\s*/);
 }
 function extractLast(term) {
     return split(term).pop();
 }
 $( "#search_e" )
 // don't navigate away from the field on tab 
 // when selecting an item
   .bind("keydown", function (event) {
       if (event.keyCode === $.ui.keyCode.TAB &&
           $(this).data("ui-autocomplete").menu.active) {
           event.preventDefault();
       }
   })
   .autocomplete({
       minLength: 0,
       source: function (request, response) {
           // delegate back to autocomplete, 
           // but extract the last term
           response($.ui.autocomplete.filter(
              aqmcKeywords, extractLast(request.term)));
       },
       focus: function () {
           // prevent value inserted on focus
           return false;
       },
       select: function (event, ui) {
           var terms = split(this.value);
           // remove the current input
           terms.pop();
           // add the selected item
           terms.push(ui.item.value);
           // add placeholder to get the 
           //comma-and-space at the end
           terms.push("");
           this.value = terms.join(", ");
           return false;
       }
   });