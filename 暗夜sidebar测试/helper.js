//为element加newclassname的新样式
function addClass(element,newClassName){
    element.classList.add(newClassName);
}
//移除oldclassname
function removeClass(element,oldClassName){
    element.classList.remove(oldClassName);
}
//判断是否含有classname
function hasClass(element,className){
    return element.classList.contains(className);
}
//判断 有oldclassname就替换成new..
function replaceClass(element,oldClassName,newClassName){
    if(hasClass(element,oldClassName)){
        element.classList.replace(oldClassName,newClassName);
    }
}
//切换classname
function toggleClass(element,className){
    element.classList.toggle(className);
}