// pages/yinling-zhaopin/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioContext1: null, // 保存音频上下文对象1
    audioContext2: null, // 保存音频上下文对象2
    audioContext3: null,
    isPlaying1: false, // 音频1是否正在播放
    isPlaying2: false, // 音频2是否正在播放
    isPlaying3: false,
    buttonText1: '播放', // 按钮1的文本
    buttonText2: '播放',  // 按钮2的文本
    buttonText3: '播放'
  },
  onPlay1: function () {
    console.log('音频1开始播放');
  },
  onPause1: function () {
    console.log('音频1暂停播放');
  },
  onPlay2: function () {
    console.log('音频2开始播放');
  },
  onPause2: function () {
    console.log('音频2暂停播放');
  },
  onPlay3: function () {
    console.log('音频3开始播放');
  },
  onPause3: function () {
    console.log('音频3暂停播放');
  },
  togglePlay1: function () {
    if (!this.data.audioContext1) {
      this.setData({
        audioContext1: wx.createInnerAudioContext()
      });
      this.data.audioContext1.src = '/audio/厨师.mp3';
      this.data.audioContext1.onPlay(this.onPlay1);
      this.data.audioContext1.onPause(this.onPause1);
    }
  
    if (!this.data.isPlaying1) {
      this.data.audioContext1.play();
      this.setData({
        buttonText1: '暂停',
        isPlaying1: true
      });
    } else {
      this.data.audioContext1.pause();
      this.setData({
        buttonText1: '播放',
        isPlaying1: false
      });
    }
  },
  togglePlay2: function () {
    if (!this.data.audioContext2) {
      this.setData({
        audioContext2: wx.createInnerAudioContext()
      });
      this.data.audioContext2.src = '/audio/家政.mp3';
      this.data.audioContext2.onPlay(this.onPlay2);
      this.data.audioContext2.onPause(this.onPause2);
    }
  
    if (!this.data.isPlaying2) {
      this.data.audioContext2.play();
      this.setData({
        buttonText2: '暂停',
        isPlaying2: true
      });
    } else {
      this.data.audioContext2.pause();
      this.setData({
        buttonText2: '播放',
        isPlaying2: false
      });
    }
},

togglePlay3: function () {
  if (!this.data.audioContext3) {
    this.setData({
      audioContext3: wx.createInnerAudioContext()
    });
    this.data.audioContext3.src = '/audio/保安.mp3';
    this.data.audioContext3.onPlay(this.onPlay3);
    this.data.audioContext3.onPause(this.onPause3);
  }

  if (!this.data.isPlaying3) {
    this.data.audioContext3.play();
    this.setData({
      buttonText3: '暂停',
      isPlaying3: true
    });
  } else {
    this.data.audioContext3.pause();
    this.setData({
      buttonText3: '播放',
      isPlaying3: false
    });
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})