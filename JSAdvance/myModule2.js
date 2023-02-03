(function () {
    //私有数据
    var msg = 'my atguigu'
    //操作数据的行为
    function doSomething() {
        console.log('doSomething '+msg.toUpperCase())
    }
    function doOtherThing() {
        console.log('doOtherThing '+msg.toLowerCase())
    }
    //向外暴露对象（给外部使用
    window.myM2 = {
        doSomething: doSomething,
        doOtherThing:doOtherThing,
    }
})()