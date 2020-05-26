var app = getApp()
var WxParse = require('../../wxParse/wxParse.js')
var util = require('../../utils/util.js')
var socketOpen = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redWidth: "200px",
    blueWidth: "200px",
    userInfo: {},
    tap: "tapOff",
    showMask: "none",
    showElsePanel: "none",
    showCallPanel: "none",
    showAboutPanel: "none",
    animation: "none",
    animation_2: "none",
    sendMsg: "",
    postId: "",
    offset: 0,
    limit: 10,
    lastCreateTime: "",
    message:
        [{img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}}],
    navIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        userInfo:app.globalData.userInfo
    })
  },
  loadMessage: function() {
    let that = this;
    wx.request({
      url: "http://127.0.0.1:3000/api/v1/debate/message/list",
      data: {
        ts: that.data.lastCreateTime,
        limit: that.data.limit,
        offset: that.data.offset
      },
      header: {
        'x-user-id': globalData.userInfo._id,
        'x-auth-token': globalData.userInfo.token,
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType: "json",
      method: 'get',
      success: function (res) {
        wx.hideLoading()
        that.setData({
          message: that.data.message.concat([{img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "你好", u: {_id: "23", username: "我是谁"}},
        {img: "https://avatars3.githubusercontent.com/u/22309837?s=460&v=4", text: "哈哈", u: {_id: "12", username: "你是我"}}])
        })
      },
      fail:function(err){
        wx.hideLoading()
        wx.showToast({
          title: '数据加载失败！',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },
  onReady:function(){
    let that = this;
    // wx.onSocketOpen(function(res) {
    //     socketOpen=true;
    //     console.log('WebSocket连接已打开！')
    // })
    // wx.onSocketError(function(res){
    //     socketOpen=false;
    //     console.log('WebSocket连接打开失败，请检查！')
    // })
    // wx.onSocketMessage(function(res) {
    //     var t = _self.data.message;
    //     t.push(res.data)
    //     _self.setData({
    //       message : t
    //     })
    // })
    // wx.onSocketClose(function(res) {
    //   console.log('WebSocket 已关闭！')
    //   socketOpen = false;
    //   setTimeout(function() {
    //     that.connect();
    //   }, 10000);
    // })
    // this.connect();
    // 页面渲染完成
    var _self = this
    wx.setNavigationBarTitle({
      title: "论重要性"
    })
    this.animation = wx.createAnimation();
    this.animation_2 = wx.createAnimation()
  },
  cleartap: function() {
    this.setData({
      tap: "tapOff",
      showAboutPanel: "none",
      showCallPanel: "none",
      showMask: "none"
    });
  },
  getAboutPanel: function(){
    var _self = this;
    if(_self.data.tap=="tapOff"){
      _self.setData({
          showAboutPanel: "block",
          tap:"tapOn",
          showMask: "block"
      })
    }else{
      _self.setData({
          showAboutPanel: "none",
          tap:"tapOff",
          showMask: "none"
      })
    }
  },
  tapCallButton: function(){
    var _self = this;
    if(_self.data.tap=="tapOff"){
      _self.setData({
          showCallPanel: "block",
          tap:"tapOn",
          showMask: "block"
      })
    }else{
      _self.setData({
          showCallPanel: "none",
          tap:"tapOff",
          showMask: "none"
      })
    }
    console.log(this.data.showCallPanel)
  },
  sendMessage: function() {
    let that = this;
    
    util.sendMessage(that.data.sendMsg, that.data.postId)
  },
  inputfun:function(e){
    this.setData({
        sendMsg: e.detail.value
    })
  },
  showElseBtn:function(){
    // console.log(e);
    var _self = this;
    if(_self.data.showElsePanel=="none"){
      _self.animation_2.height("55%").step();
      _self.setData({ animation_2: _self.animation_2.export() })
      _self.setData({
          showElsePanel: "block"
      })
    }else{
      _self.animation_2.height("90%").step();
      _self.setData({ animation_2: _self.animation_2.export() })
      _self.setData({
          showElsePanel: "none"
      })
    }
  },
  chooseImg:function(){
    var _self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var t = _self.data.message;
        t.push({
          img: _self.data.userInfo.avatarUrl,
          imgList: tempFilePaths,
          u: {_id: "12", username: "你是我"}
        })
        _self.setData({
          message:t
        })
      },
      fail: function() {
        wx.showToast({
          title: '图片选择失败！',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },
  getlocat:function(){
    var _self = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        console.log(res)
        _self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude,
            name: '时代一号',
            desc: '现在的位置'
          }],
          covers: [{
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: '/images/green_tri.png',
            rotate: 10
          }]
        })
        var t = _self.data.message;
          t.push({
            img:_self.data.userInfo.avatarUrl,
            me:true,
            map:true
          })
          _self.setData({
            message:t
          })
      },
      fail: function() {
        wx.showToast({
          title: '位置选择失败！',
          icon: 'error',
          duration: 2000
        })
      }
    })
      
  },
  getvoice:function(){
    console.log("开始录音")
    wx.startRecord({
      // success: function(res) {
      //   console.log("录音成功")
      //   var tempFilePath = res.tempFilePath 
      //   var t = _self.data.message;
      //   t.push({
      //     img:_self.data.userInfo.avatarUrl,
      //     text:"语音消息",
      //     me:true,
      //     voice:tempFilePath
      //   })
      //   _self.setData({
      //     message:t
      //   })
      //   wx.playVoice({
      //     filePath: tempFilePath,
      //     complete: function(){
      //       console.log(播放完毕)
      //     }
      //   })
      // },
      success: function(res) {
        console.log("录音成功")
        var tempFilePath = res.tempFilePath 
      },
      complete:function(res){
        console.log("complete"+res)
      },
      fail: function(res) {
        //录音失败
        console.log("fail"+res)
      }
    })
  },
  stopvoice:function(){
    wx.stopRecord()
    console.log("stop")
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  thumup: function () {
  },
  changeNav:function(event){
      this.setData({
        navIndex:event.target.dataset.index
      })
  },
  connect:function(){
    console.log("connect")
    wx.connectSocket({
        url: app.globalData.wsip
    })
  },
  swiperChange:function(event){
      this.setData({
        navIndex:event.detail.current
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let video = this.data.videoDetail.videoId
    return {
      title: this.data.videoDetail.name,
      path: '/pages/detail/detail?video=' + video + '&index=1',
      imageUrl: this.data.videoDetail.cover,
      success: function (res) {
        // 转发成功.
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      }
    }
  }
})