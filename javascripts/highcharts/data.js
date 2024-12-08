/*
 Highcharts JS v8.2.2 (2020-10-22)

 Data module

 (c) 2012-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/data",["highcharts"],function(q){b(q);b.Highcharts=q;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function q(b,x,q,v){b.hasOwnProperty(x)||(b[x]=v.apply(null,q))}b=b?b._modules:{};q(b,"Extensions/Ajax.js",[b["Core/Globals.js"],b["Core/Utilities.js"]],function(b,x){var q=x.merge,v=x.objectEach;b.ajax=function(b){var m=
  q(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},b);b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var r=new XMLHttpRequest;if(!m.url)return!1;r.open(m.type.toUpperCase(),m.url,!0);m.headers["Content-Type"]||r.setRequestHeader("Content-Type",b[m.dataType]||b.text);v(m.headers,function(b,m){r.setRequestHeader(m,b)});r.onreadystatechange=function(){if(4===r.readyState){if(200===r.status){var b=r.responseText;if("json"===
  m.dataType)try{b=JSON.parse(b)}catch(C){m.error&&m.error(r,C);return}return m.success&&m.success(b)}m.error&&m.error(r,r.responseText)}};try{m.data=JSON.stringify(m.data)}catch(O){}r.send(m.data||!0)};b.getJSON=function(q,m){b.ajax({url:q,success:m,dataType:"json",headers:{"Content-Type":"text/plain"}})};return{ajax:b.ajax,getJSON:b.getJSON}});q(b,"Extensions/Data.js",[b["Extensions/Ajax.js"],b["Core/Series/Series.js"],b["Core/Chart/Chart.js"],b["Core/Globals.js"],b["Core/Series/Point.js"],b["Core/Utilities.js"]],
  function(b,q,H,v,I,m){var r=b.ajax,x=v.doc;b=m.addEvent;var C=m.defined,J=m.extend,K=m.fireEvent,E=m.isNumber,B=m.merge,L=m.objectEach,M=m.pick,N=m.splat,D=q.seriesTypes;q=function(){function b(a,c,f){this.options=this.rawColumns=this.firstRowAsNames=this.chartOptions=this.chart=void 0;this.dateFormats={"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(a){return a?Date.UTC(+a[1],a[2]-1,+a[3]):NaN}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
  parser:function(a){return a?Date.UTC(+a[3],a[2]-1,+a[1]):NaN},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return a?Date.UTC(+a[3],a[1]-1,+a[2]):NaN}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){if(!a)return NaN;var c=+a[3];c=c>(new Date).getFullYear()-2E3?c+1900:c+2E3;return Date.UTC(c,a[2]-1,+a[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
  parser:function(a){return a?Date.UTC(+a[3]+2E3,a[1]-1,+a[2]):NaN}}};this.init(a,c,f)}b.prototype.init=function(a,c,f){var d=a.decimalPoint;c&&(this.chartOptions=c);f&&(this.chart=f);"."!==d&&","!==d&&(d=void 0);this.options=a;this.columns=a.columns||this.rowsToColumns(a.rows)||[];this.firstRowAsNames=M(a.firstRowAsNames,this.firstRowAsNames,!0);this.decimalRegex=d&&new RegExp("^(-?[0-9]+)"+d+"([0-9]+)$");this.rawColumns=[];if(this.columns.length){this.dataFound();var h=!0}this.hasURLOption(a)&&(clearTimeout(this.liveDataTimeout),
  h=!1);h||(h=this.fetchLiveData());h||(h=!!this.parseCSV().length);h||(h=!!this.parseTable().length);h||(h=this.parseGoogleSpreadsheet());!h&&a.afterComplete&&a.afterComplete()};b.prototype.hasURLOption=function(a){return!(!a||!(a.rowsURL||a.csvURL||a.columnsURL))};b.prototype.getColumnDistribution=function(){var a=this.chartOptions,c=this.options,f=[],d=function(a){return(D[a||"line"].prototype.pointArrayMap||[0]).length},h=a&&a.chart&&a.chart.type,g=[],b=[],l=0;c=c&&c.seriesMapping||a&&a.series&&
  a.series.map(function(){return{x:0}})||[];var e;(a&&a.series||[]).forEach(function(a){g.push(d(a.type||h))});c.forEach(function(a){f.push(a.x||0)});0===f.length&&f.push(0);c.forEach(function(c){var f=new G,k=g[l]||d(h),n=(a&&a.series||[])[l]||{},m=D[n.type||h||"line"].prototype.pointArrayMap,y=m||["y"];(C(c.x)||n.isCartesian||!m)&&f.addColumnReader(c.x,"x");L(c,function(a,c){"x"!==c&&f.addColumnReader(a,c)});for(e=0;e<k;e++)f.hasReader(y[e])||f.addColumnReader(void 0,y[e]);b.push(f);l++});c=D[h||
  "line"].prototype.pointArrayMap;"undefined"===typeof c&&(c=["y"]);this.valueCount={global:d(h),xColumns:f,individual:g,seriesBuilders:b,globalPointArrayMap:c}};b.prototype.dataFound=function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();this.parseTypes();!1!==this.parsed()&&this.complete()};b.prototype.parseCSV=function(a){function c(a,c,f,d){function b(c){k=a[c];l=a[c-1];p=a[c+1]}function h(a){w.length<t+1&&w.push([a]);w[t][w[t].length-
  1]!==a&&w[t].push(a)}function g(){e>u||u>m?(++u,n=""):(!isNaN(parseFloat(n))&&isFinite(n)?(n=parseFloat(n),h("number")):isNaN(Date.parse(n))?h("string"):(n=n.replace(/\//g,"-"),h("date")),A.length<t+1&&A.push([]),f||(A[t][c]=n),n="",++t,++u)}var z=0,k="",l="",p="",n="",u=0,t=0;if(a.trim().length&&"#"!==a.trim()[0]){for(;z<a.length;z++){b(z);if("#"===k){g();return}if('"'===k)for(b(++z);z<a.length&&('"'!==k||'"'===l||'"'===p);){if('"'!==k||'"'===k&&'"'!==l)n+=k;b(++z)}else d&&d[k]?d[k](k,n)&&g():k===
  y?g():n+=k}g()}}function f(a){var c=0,f=0,d=!1;a.some(function(a,d){var b=!1,h="";if(13<d)return!0;for(var g=0;g<a.length;g++){d=a[g];var k=a[g+1];var e=a[g-1];if("#"===d)break;if('"'===d)if(b){if('"'!==e&&'"'!==k){for(;" "===k&&g<a.length;)k=a[++g];"undefined"!==typeof n[k]&&n[k]++;b=!1}}else b=!0;else"undefined"!==typeof n[d]?(h=h.trim(),isNaN(Date.parse(h))?!isNaN(h)&&isFinite(h)||n[d]++:n[d]++,h=""):h+=d;","===d&&f++;"."===d&&c++}});d=n[";"]>n[","]?";":",";b.decimalPoint||(b.decimalPoint=c>f?
  ".":",",h.decimalRegex=new RegExp("^(-?[0-9]+)"+b.decimalPoint+"([0-9]+)$"));return d}function d(a,c){var d=[],f=0,g=!1,k=[],n=[],e;if(!c||c>a.length)c=a.length;for(;f<c;f++)if("undefined"!==typeof a[f]&&a[f]&&a[f].length){var l=a[f].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" ");d=["","",""];for(e=0;e<l.length;e++)e<d.length&&(l[e]=parseInt(l[e],10),l[e]&&(n[e]=!n[e]||n[e]<l[e]?l[e]:n[e],"undefined"!==typeof k[e]?k[e]!==l[e]&&(k[e]=!1):k[e]=l[e],31<l[e]?d[e]=100>l[e]?
  "YY":"YYYY":12<l[e]&&31>=l[e]?(d[e]="dd",g=!0):d[e].length||(d[e]="mm")))}if(g){for(e=0;e<k.length;e++)!1!==k[e]?12<n[e]&&"YY"!==d[e]&&"YYYY"!==d[e]&&(d[e]="YY"):12<n[e]&&"mm"===d[e]&&(d[e]="dd");3===d.length&&"dd"===d[1]&&"dd"===d[2]&&(d[2]="YY");a=d.join("/");return(b.dateFormats||h.dateFormats)[a]?a:(K("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}var h=this,b=a||this.options,k=b.csv;a="undefined"!==typeof b.startRow&&b.startRow?b.startRow:0;var l=b.endRow||Number.MAX_VALUE,e="undefined"!==
  typeof b.startColumn&&b.startColumn?b.startColumn:0,m=b.endColumn||Number.MAX_VALUE,p=0,w=[],n={",":0,";":0,"\t":0};var A=this.columns=[];k&&b.beforeParse&&(k=b.beforeParse.call(this,k));if(k){k=k.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(b.lineDelimiter||"\n");if(!a||0>a)a=0;if(!l||l>=k.length)l=k.length-1;if(b.itemDelimiter)var y=b.itemDelimiter;else y=null,y=f(k);var t=0;for(p=a;p<=l;p++)"#"===k[p][0]?t++:c(k[p],p-a-t);b.columnTypes&&0!==b.columnTypes.length||!w.length||!w[0].length||"date"!==
  w[0][1]||b.dateFormat||(b.dateFormat=d(A[0]));this.dataFound()}return A};b.prototype.parseTable=function(){var a=this.options,c=a.table,f=this.columns||[],d=a.startRow||0,b=a.endRow||Number.MAX_VALUE,g=a.startColumn||0,k=a.endColumn||Number.MAX_VALUE;c&&("string"===typeof c&&(c=x.getElementById(c)),[].forEach.call(c.getElementsByTagName("tr"),function(a,c){c>=d&&c<=b&&[].forEach.call(a.children,function(a,b){var h=f[b-g],e=1;if(("TD"===a.tagName||"TH"===a.tagName)&&b>=g&&b<=k)for(f[b-g]||(f[b-g]=
  []),f[b-g][c-d]=a.innerHTML;c-d>=e&&void 0===h[c-d-e];)h[c-d-e]=null,e++})}),this.dataFound());return f};b.prototype.fetchLiveData=function(){function a(h){function e(e,l,n){function m(){g&&f.liveDataURL===e&&(c.liveDataTimeout=setTimeout(a,k))}if(!e||0!==e.indexOf("http"))return e&&d.error&&d.error("Invalid URL"),!1;h&&(clearTimeout(c.liveDataTimeout),f.liveDataURL=e);r({url:e,dataType:n||"json",success:function(a){f&&f.series&&l(a);m()},error:function(a,c){3>++b&&m();return d.error&&d.error(c,a)}});
  return!0}e(l.csvURL,function(a){f.update({data:{csv:a}})},"text")||e(l.rowsURL,function(a){f.update({data:{rows:a}})})||e(l.columnsURL,function(a){f.update({data:{columns:a}})})}var c=this,f=this.chart,d=this.options,b=0,g=d.enablePolling,k=1E3*(d.dataRefreshRate||2),l=B(d);if(!this.hasURLOption(d))return!1;1E3>k&&(k=1E3);delete d.csvURL;delete d.rowsURL;delete d.columnsURL;a(!0);return this.hasURLOption(d)};b.prototype.parseGoogleSpreadsheet=function(){function a(c){var b=["https://localhost/feeds/cells",
  d,g,"public/values?alt=json"].join("/");r({url:b,dataType:"json",success:function(d){c(d);f.enablePolling&&setTimeout(function(){a(c)},1E3*(f.dataRefreshRate||2))},error:function(a,c){return f.error&&f.error(c,a)}})}var c=this,f=this.options,d=f.googleSpreadsheetKey,b=this.chart,g=f.googleSpreadsheetWorksheet||1,k=f.startRow||0,l=f.endRow||Number.MAX_VALUE,e=f.startColumn||0,m=f.endColumn||Number.MAX_VALUE,p=1E3*(f.dataRefreshRate||2);4E3>p&&(p=4E3);d&&(delete f.googleSpreadsheetKey,a(function(a){var d=
  [];a=a.feed.entry;var f=(a||[]).length,h=0,g;if(!a||0===a.length)return!1;for(g=0;g<f;g++){var p=a[g];h=Math.max(h,p.gs$cell.col)}for(g=0;g<h;g++)g>=e&&g<=m&&(d[g-e]=[]);for(g=0;g<f;g++){p=a[g];h=p.gs$cell.row-1;var q=p.gs$cell.col-1;if(q>=e&&q<=m&&h>=k&&h<=l){var u=p.gs$cell||p.content;p=null;u.numericValue?p=0<=u.$t.indexOf("/")||0<=u.$t.indexOf("-")?u.$t:0<u.$t.indexOf("%")?100*parseFloat(u.numericValue):parseFloat(u.numericValue):u.$t&&u.$t.length&&(p=u.$t);d[q-e][h-k]=p}}d.forEach(function(a){for(g=
  0;g<a.length;g++)"undefined"===typeof a[g]&&(a[g]=null)});b&&b.series?b.update({data:{columns:d}}):(c.columns=d,c.dataFound())}));return!1};b.prototype.trim=function(a,c){"string"===typeof a&&(a=a.replace(/^\s+|\s+$/g,""),c&&/^[0-9\s]+$/.test(a)&&(a=a.replace(/\s/g,"")),this.decimalRegex&&(a=a.replace(this.decimalRegex,"$1.$2")));return a};b.prototype.parseTypes=function(){for(var a=this.columns,c=a.length;c--;)this.parseColumn(a[c],c)};b.prototype.parseColumn=function(a,c){var f=this.rawColumns,
  d=this.columns,b=a.length,g=this.firstRowAsNames,k=-1!==this.valueCount.xColumns.indexOf(c),l,e=[],m=this.chartOptions,p,q=(this.options.columnTypes||[])[c];m=k&&(m&&m.xAxis&&"category"===N(m.xAxis)[0].type||"string"===q);for(f[c]||(f[c]=[]);b--;){var n=e[b]||a[b];var r=this.trim(n);var F=this.trim(n,!0);var t=parseFloat(F);"undefined"===typeof f[c][b]&&(f[c][b]=r);m||0===b&&g?a[b]=""+r:+F===t?(a[b]=t,31536E6<t&&"float"!==q?a.isDatetime=!0:a.isNumeric=!0,"undefined"!==typeof a[b+1]&&(p=t>a[b+1])):
  (r&&r.length&&(l=this.parseDate(n)),k&&E(l)&&"float"!==q?(e[b]=n,a[b]=l,a.isDatetime=!0,"undefined"!==typeof a[b+1]&&(n=l>a[b+1],n!==p&&"undefined"!==typeof p&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,b=a.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):a.unsorted=!0),p=n)):(a[b]=""===r?null:r,0!==b&&(a.isDatetime||a.isNumeric)&&(a.mixed=!0)))}k&&a.mixed&&(d[c]=f[c]);if(k&&p&&this.options.sort)for(c=0;c<d.length;c++)d[c].reverse(),g&&d[c].unshift(d[c].pop())};
  b.prototype.parseDate=function(a){var c=this.options.parseDate,b,d=this.options.dateFormat||this.dateFormat,h;if(c)var g=c(a);else if("string"===typeof a){if(d)(c=this.dateFormats[d])||(c=this.dateFormats["YYYY/mm/dd"]),(h=a.match(c.regex))&&(g=c.parser(h));else for(b in this.dateFormats)if(c=this.dateFormats[b],h=a.match(c.regex)){this.dateFormat=b;this.alternativeFormat=c.alternative;g=c.parser(h);break}h||(h=Date.parse(a),"object"===typeof h&&null!==h&&h.getTime?g=h.getTime()-6E4*h.getTimezoneOffset():
  E(h)&&(g=h-6E4*(new Date(h)).getTimezoneOffset()))}return g};b.prototype.rowsToColumns=function(a){var c,b;if(a){var d=[];var h=a.length;for(c=0;c<h;c++){var g=a[c].length;for(b=0;b<g;b++)d[b]||(d[b]=[]),d[b][c]=a[c][b]}}return d};b.prototype.getData=function(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)};b.prototype.parsed=function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)};b.prototype.getFreeIndexes=function(a,c){var b,d=[],h=[];for(b=0;b<a;b+=
  1)d.push(!0);for(a=0;a<c.length;a+=1){var g=c[a].getReferencedColumnIndexes();for(b=0;b<g.length;b+=1)d[g[b]]=!1}for(b=0;b<d.length;b+=1)d[b]&&h.push(b);return h};b.prototype.complete=function(){var a=this.columns,b,f=this.options,d,h,g=[];if(f.complete||f.afterComplete){if(this.firstRowAsNames)for(d=0;d<a.length;d++)a[d].name=a[d].shift();var k=[];var l=this.getFreeIndexes(a.length,this.valueCount.seriesBuilders);for(d=0;d<this.valueCount.seriesBuilders.length;d++){var e=this.valueCount.seriesBuilders[d];
  e.populateColumns(l)&&g.push(e)}for(;0<l.length;){e=new G;e.addColumnReader(0,"x");d=l.indexOf(0);-1!==d&&l.splice(d,1);for(d=0;d<this.valueCount.global;d++)e.addColumnReader(void 0,this.valueCount.globalPointArrayMap[d]);e.populateColumns(l)&&g.push(e)}0<g.length&&0<g[0].readers.length&&(e=a[g[0].readers[0].columnIndex],"undefined"!==typeof e&&(e.isDatetime?b="datetime":e.isNumeric||(b="category")));if("category"===b)for(d=0;d<g.length;d++)for(e=g[d],l=0;l<e.readers.length;l++)"x"===e.readers[l].configName&&
  (e.readers[l].configName="name");for(d=0;d<g.length;d++){e=g[d];l=[];for(h=0;h<a[0].length;h++)l[h]=e.read(a,h);k[d]={data:l};e.name&&(k[d].name=e.name);"category"===b&&(k[d].turboThreshold=0)}a={series:k};b&&(a.xAxis={type:b},"category"===b&&(a.xAxis.uniqueNames=!1));f.complete&&f.complete(a);f.afterComplete&&f.afterComplete(a)}};b.prototype.update=function(a,b){var c=this.chart;a&&(a.afterComplete=function(a){a&&(a.xAxis&&c.xAxis[0]&&a.xAxis.type===c.xAxis[0].options.type&&delete a.xAxis,c.update(a,
  b,!0))},B(!0,c.options.data,a),this.init(c.options.data))};return b}();v.data=function(b,a,c){return new v.Data(b,a,c)};b(H,"init",function(b){var a=this,c=b.args[0]||{},f=b.args[1];c&&c.data&&!a.hasDataDef&&(a.hasDataDef=!0,a.data=new v.Data(J(c.data,{afterComplete:function(b){var d;if(Object.hasOwnProperty.call(c,"series"))if("object"===typeof c.series)for(d=Math.max(c.series.length,b&&b.series?b.series.length:0);d--;){var g=c.series[d]||{};c.series[d]=B(g,b&&b.series?b.series[d]:{})}else delete c.series;
  c=B(b,c);a.init(c,f)}}),c,a),b.preventDefault())});var G=function(){function b(){this.readers=[];this.pointIsArray=!0;this.name=void 0}b.prototype.populateColumns=function(a){var b=!0;this.readers.forEach(function(b){"undefined"===typeof b.columnIndex&&(b.columnIndex=a.shift())});this.readers.forEach(function(a){"undefined"===typeof a.columnIndex&&(b=!1)});return b};b.prototype.read=function(a,b){var c=this.pointIsArray,d=c?[]:{};this.readers.forEach(function(g){var f=a[g.columnIndex][b];c?d.push(f):
  0<g.configName.indexOf(".")?I.prototype.setNestedProperty(d,f,g.configName):d[g.configName]=f});if("undefined"===typeof this.name&&2<=this.readers.length){var h=this.getReferencedColumnIndexes();2<=h.length&&(h.shift(),h.sort(function(a,b){return a-b}),this.name=a[h.shift()].name)}return d};b.prototype.addColumnReader=function(a,b){this.readers.push({columnIndex:a,configName:b});"x"!==b&&"y"!==b&&"undefined"!==typeof b&&(this.pointIsArray=!1)};b.prototype.getReferencedColumnIndexes=function(){var a,
  b=[];for(a=0;a<this.readers.length;a+=1){var f=this.readers[a];"undefined"!==typeof f.columnIndex&&b.push(f.columnIndex)}return b};b.prototype.hasReader=function(a){var b;for(b=0;b<this.readers.length;b+=1){var f=this.readers[b];if(f.configName===a)return!0}};return b}();v.Data=q;return v.Data});q(b,"masters/modules/data.src.js",[],function(){})});
  //# sourceMappingURL=data.js.map