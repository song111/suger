"use strict";
// 创建工具库对象
const suger = {};

// 检测window挂载情况
if (window && typeof window !== "undefined") {
  if (!window.suger) {
    window.suger = suger;
  } else {
    throw new Error("suger 被占用，请修改尝试");
  }
}
  
// 模块属性添加
const packageConfig = require("../package.json");
suger.version = packageConfig.version;
suger.description = packageConfig.description;

// 获取modules下边的所有文件，并扩展原对象,files是一个函数
const requireAll = (context) => {
  return context.keys().map(context);
};
const modules = require.context("./modules", true, /\.js$/);  // 返回 webpackContext 函数
requireAll(modules).forEach((item) => {
  suger[item.default.name] = item.default;
});

export default suger;