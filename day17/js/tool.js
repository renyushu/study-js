/**
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数:
 *  obj 要获取样式的元素
 *  name 要获取的样式名
 *
 */
function getStyle(obj, name) {
    if(window.getComputedStyle){
        //正常浏览器的方式,具有getComputedStyle()方法
        return getComputedStyle(obj, null)[name];
    }else{
        //IE8的方式，没有getComputedStyle()方法
        return obj.currentStyle[name];
    }
}

//创建一个可以执行简单动画的函数
/**
 * 参数:
 *    obj：要执行动画的对象
 *    attr: 移动的方向
 *    target:移动的距离
 *    speed：移动的速度
 *    callback: 回调函数
 */
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer)

    //获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));

    //判断速度的正负值
    if(current > target) {
        //此时速度为负值
        speed = -speed;
    }

    //开启一个定时器， 执行动画效果
    //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));

        //在旧值的基础上增加
        var newValue = oldValue + speed;

        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if(speed < 0 && newValue < target || speed > 0 && newValue > target){
            newValue = target;
        }
        //将新值设置给box1
        obj.style[attr] = newValue + "px";

        //当元素移动到800px时，使其停止动画
        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30)
}