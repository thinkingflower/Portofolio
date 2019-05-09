var today = new Date();
var beginpy = new Date('2019/02/23');
var beginhtmlcss = new Date('2019/03/31');
var beginjava = new Date('2019/04/23');
var beginjs = new Date('2019/04/27');
//difにはミリ秒単位で経過時間が入る
var difpy = today - beginpy;
var difhtmlcss = today - beginhtmlcss;
var difjava = today - beginjava;
var difjs = today - beginjs; 
//月単位に換算
var monpy = difpy/(1000* 60 * 60 * 24 * 30);
var monhtmlcss = difhtmlcss/(1000* 60 * 60 * 24 * 30);
var monjava = difjava/(1000* 60 * 60 * 24 * 30);
var monjs = difjs/(1000* 60 * 60 * 24 * 30);
//四捨五入して文字列へ
var monpyString = String(Math.round(monpy));
var monhtmlcssString = String(Math.round(monhtmlcss));
var monjavaString = String(Math.round(monjava));
var monjsString = String(Math.round(monjs));
//挿入箇所をidで指定する
var pointpy = document.getElementById('history-monpy');
pointpy.textContent = monpyString;
var pointhtmlcss = document.getElementById('history-monhtmlcss');
pointhtmlcss.textContent = monhtmlcssString;
var pointjava = document.getElementById('history-monjava');
pointjava.textContent = monjavaString;
var pointjs = document.getElementById('history-monjs');
pointjs.textContent = monjsString;