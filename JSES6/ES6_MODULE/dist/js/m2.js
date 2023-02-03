'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露
var school = 'atguigu';

function teach() {
    console.log('我们可以交给你开发技能');
}

//统一暴露
exports.school = school;
exports.teach = teach;