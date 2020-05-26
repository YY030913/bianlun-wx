App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    __disPlayURLCheckWarning = false;
        __wxConfig.debug = true
        __devtoolsConfig.setting.urlCheck = false
        __devtoolsConfig.urlCheck = false;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        //console.log(res.authSetting)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              //console.log(this.globalData.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }

      }
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    wsip: "ws://"+"127.0.0.1"+":3000/websocket",
    userInfo: {},
    debateEdit: {
      thumbs: [{
        id: 1,
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
      }, {
        id: 2,
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
      }, {
        id: 3,
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
      }, {
        id: 4,
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
      }],
    }
  }
})
