"use strict";
// 创建工具库对象
// 需要像underscore 一样支持OOP则suger一定是一个函数可以无new 调用的构造函数

const Suger = function(obj) {
  if (obj instanceof Suger) return obj;
  if (!(this instanceof Suger)) return new Suger(obj);
  this._wrapped = obj; // 当new 调用的时候缓存初始值
};

// 模块属性添加
const packageConfig = require("./package.json");
Suger.version = packageConfig.version;
Suger.description = packageConfig.description;

//扩展 所有方法到 Suger 上
const modules = require.context("./lib", true, /\.js$/); // 返回 webpackContext 函数
const requireAll = context => context.keys().map(context);
requireAll(modules).forEach((item, i) => {
  const fileName = modules.keys()[i];
  const moduleName = fileName.substring(
    fileName.lastIndexOf("/") + 1,
    fileName.lastIndexOf(".")
  );
  Suger[moduleName] = item.default;
});

// 绑定函数到suger原型对象上;
Suger.mixin(Suger,Suger);

module.exports.Suger = Suger;
module.exports._ = Suger;