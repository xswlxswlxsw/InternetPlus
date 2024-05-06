// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
    handleSearch: function() {
      // 获取输入框的值
      const keyword = this.data.keyword;
      // 进行搜索操作
      console.log("搜索内容：" + keyword);
    }
});
