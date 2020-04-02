function $(v){
		if(typeof v ==='function'){
			window.onload=v;
		}else if(typeof v ==='string'){
			return document.getElementById(v);
		}else if(typeof v==='object'){
			return v;
		}
}
//获取元素样式
function getStyle(obj,attr){
		return obj.currtStyle ? obj.currtStyle[attr] : getComputedStyle(obj)[attr];
	}