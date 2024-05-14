Component({
  data: {
    selected: 0,
    color: "#c5d99b",
    selectedColor: "#6c7c5c",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/images/icons/首页.png",
      "selectedIconPath": "/images/icons/首页.png"
    },
    {
      "pagePath": "/pages/examples/index",
      "text": "社区",
      "iconPath": "/images/icons/社区.png",
      "selectedIconPath": "/images/icons/社区.png"
    },
    {
      "pagePath": "/pages/user-center/index",
      "text": "我的",
      "iconPath": "/images/icons/我的.png",
      "selectedIconPath": "/images/icons/我的.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})