var app = getApp()
Page({
  data:{
    animation: "slideInUp",
    showPpublic: "block",
    showPrivate: "none",
    showNotOnNet: "block",
    showOnNet: "none",
    webDestination: false,

    freeePrice: false,
    showNotFreePrice: "block",
    showFreePrice: "none",

    showBottomModalOfDestination: "none",
    showBottomModalOfPrice: "none",
    showCate: "none",
    showMask: "none",
    tap: "tapOff",
    cate: "智能初始化标签",
    title: "",
    content: "",
    isPublic: true,
    location: "",
    destination: "",
    destinationRegion: "",
    date: "",
    time: "",
    region: "",
    customItem: '全部',
    tmpPrice: "",
    price: "",
    cateId: "",
    formateId: ""
    // text:"这是一个页面"
  },
  showModal: function() {
    this.setData({
      animation: "slideInUp",
      tap: "tapOn",
      showMask: "block"
    })
  },
  cleartap: function() {
    let self = this;
    this.setData({
      animation: "slideOutDown",
    })
    setTimeout(function() {
        self.setData({
          showBottomModalOfDestination: "none",
          showBottomModalOfPrice: "none",
          tap: "tapOff",
          showMask: "none"
        })
    }, 200);
  },
  onLoad:function(options){
    let now = new Date();
    let end = new Date(now.getTime() + 3600 * 1000 * 24 * 180);
    this.setData({
      starDate: now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
      endDate: end.getFullYear() + "-" + (end.getMonth() + 1) + "-" + end.getDate(),
      title: app.globalData.debateEdit.title,
      content: app.globalData.debateEdit.content,
      isPublic: app.globalData.debateEdit.isPublic,
      location: app.globalData.debateEdit.location,
      thumbs: app.globalData.debateEdit.thumbs,
      cateId: app.globalData.debateEdit.cateId,
      cate: app.globalData.debateEdit.cateName
    })

    console.log(app, this.data);
    this.fetchFormates();
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成

  },
  confirmPrice: function() {
    this.changePrice()
    if (this.data.freeePrice) {
      app.globalData.debateEdit.price = 0
      this.setData({
        price: this.data.tmpPrice
      })
    } else {
      app.globalData.debateEdit.price = this.data.tmpPrice;
      this.setData({
        price: this.data.tmpPrice
      })
    }
  },
  confirmDestination: function() {
    if (!this.data.webDestination && (this.data.destination == "" || this.data.destinationRegion == "")) {
      return;
    }

    this.changeDestination();
    if (this.data.webDestination) {
      app.globalData.debateEdit.destination = "线上活动"
      this.setData({
        destinationRegion: "",
        destination: "线上活动"
      })
    } else {
      app.globalData.debateEdit.destination = this.data.destinationRegion[0] + this.data.destinationRegion[1] + this.data.destinationRegion[2] + this.data.destination;
      
    }
    
  },
  actvieFormate: function(e) {
    if (e.currentTarget.dataset.id == this.data.formateId) {
      return "active"
    }
    return ""
  },
  fetchDebate(id) {
    wx.request({
      url: "http://127.0.0.1:3000/api/v1/debate/formate/list",
      data: {
        limit: 10,
        offset: 0
      },
      header: {
        'x-user-id': globalData.userInfo._id,
        'x-auth-token': globalData.userInfo.token,
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType: "json",
      method: 'post',
      success: function (res) {
        wx.hideLoading()
        console.log(res);
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
  fetchFormates() {
    let that = this;
    // formate
    wx.request({
      url: "http://127.0.0.1:3000/api/v1/debate/formate/list",
      data: {
          limit: 10,
          offset: 0
      },
      header: {
          'x-user-id': app.globalData.userInfo._id,
          'x-auth-token': app.globalData.userInfo.token,
          'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType: "json",
      method: 'get',
      success: function (res) {
        console.log(res.data)
          wx.hideLoading()
          that.setData({
              formates: res.data
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
  onShow:function(){
    // 页面显示
    this.setData({
      title: app.globalData.debateEdit.title,
      content: app.globalData.debateEdit.content,
      isPublic: app.globalData.debateEdit.isPublic,
      location: app.globalData.debateEdit.location,
      thumbs: app.globalData.debateEdit.thumbs,
      cateId: app.globalData.debateEdit.cateId,
      cate: app.globalData.debateEdit.cateName
    })
    console.log(app);
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindDestinationTextAreaBlur: function(e) {
    this.setData({
      destination: e.detail.value
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
    app.globalData.debateEdit.content = e.detail.value;
  },
  bindTitleAreaBlur: function(e) {
    console.log(e.detail.value)
    app.globalData.debateEdit.title = e.detail.value;
  },
  changFreepriceStatus: function(e) {
    if (this.data.showNotFreePrice == "block") {
      this.setData({
        freeePrice: true,
        tmpPrice: "0",
        showNotFreePrice: "none",
        showFreePrice: "block"
      })
    } else {
      this.setData({
        freeePrice: false,
        showNotFreePrice: "block",
        showFreePrice: "none"
      })
    }
  },
  changePublicStatus: function(e) {
    if (this.data.showPpublic == "block") {
      app.globalData.debateEdit.isPublic = false;
      this.setData({
        isPublic: false,
        showPpublic: "none",
        showPrivate: "block"
      })
    } else {
      app.globalData.debateEdit.isPublic = true;
      this.setData({
        isPublic: true,
        showPpublic: "block",
        showPrivate: "none"
      })
    }
  },
  delThumb: function(e) {
    console.log(e.currentTarget.dataset.id);
    let temp = []
    app.globalData.debateEdit.thumbs.forEach(function(item, index) {
      if (item.id != e.currentTarget.dataset.id) {
        temp.push(item)
      }
    })
    app.globalData.debateEdit.thumbs = temp;
    this.setData({
      thumbs: app.globalData.debateEdit.thumbs
    })
    console.log(app.globalData.debateEdit.thumbs)
  },
  changOnNetStatus: function(e) {
    if (this.data.showNotOnNet == "block") {
      this.setData({
        webDestination: true,
        showNotOnNet: "none",
        showOnNet: "block"
      })
    } else {
      this.setData({
        webDestination: false,
        showNotOnNet: "block",
        showOnNet: "none"
      })
    }
  },
  changeDestination: function(e) {

    if (this.data.showBottomModalOfDestination == "none") {
      this.showModal();
      this.setData({
        showBottomModalOfDestination: "block"
      })
    } else {
      this.cleartap();
    }
    
  },
  changeCate: function(e) {
    // this.setData({
    //   showCate: "block"
    // })
    wx.navigateTo({
        url: '../cate/cate'
    })
  },
  changePrice: function(e) {
    if (this.data.showBottomModalOfPrice == "none") {
      this.showModal();
      this.setData({
        showBottomModalOfPrice: "block"
      })
    } else {
      this.cleartap();
    }
    
  },
  comfireCate: function (e) {
    this.setData({
      showCate: "none",
      cateId: e.currentTarget.dataset.id,
      cate: e.currentTarget.dataset.cate
    })
  },
  confirmFormate: function (e) {
    console.log(e.currentTarget.dataset)
    this.setData({
      showCate: "none",
      formateId: e.currentTarget.dataset.id
    })
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res
        })
        that.update()
      }
    })
  },
  bindDestinationRegionChange: function(e) {
    this.setData({
      destinationRegion: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  backPrice: function() {
    if (this.data.freeePrice) {
      return;
    }
    this.setData({
      tmpPrice: this.data.tmpPrice.substr(0, this.data.tmpPrice.length - 1)
    })
  },
  trashPrice: function() {
    if (this.data.freeePrice) {
      return;
    }
    this.setData({
      tmpPrice: ""
    })
  },
  makePrice: function(e) {
    if (this.data.freeePrice) {
      return;
    }

    if (this.data.tmpPrice.indexOf(".")) {
      if (this.data.tmpPrice.substr(this.data.tmpPrice.indexOf(".")).length > 2) {
        return;
      }
    }
    if (this.data.tmpPrice.length == 0 &&  e.currentTarget.dataset.val == ".") {
      e.currentTarget.dataset.val = "0."
    }

    this.setData({
      tmpPrice: this.data.tmpPrice + e.currentTarget.dataset.val
    })
  },
  publishDebate: function() {
    let self = this;
    // 检查
    if (this.data.title == "") {
      wx.showToast({
        title: '标题不能为空',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.content == "") {
      wx.showToast({
        title: '内容不能为空',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.destination == "") {
      wx.showToast({
        title: '活动地址不能为空',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.date == "") {
      wx.showToast({
        title: '活动开始日期必须',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.time == "") {
      wx.showToast({
        title: '活动时间必须',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.price == "") {
      wx.showToast({
        title: '报名费用无效',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.cateId == "") {
      wx.showToast({
        title: '活动分类必须',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    if (this.data.formateId == "") {
      wx.showToast({
        title: '辩论形式至少选择一个',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    
    wx.showLoading({
      title: '保存数据中...'
    })
    //访问网络  
    // publish
    wx.request({
      url: "http://127.0.0.1:3000/api/v1/debate/create",
      data: {
        title: self.data.title,
        content: self.data.content,
        isPublic: self.data.isPublic,
        thumbs: self.data.thumbs,
        location: self.data.location,
        destination: self.data.destination,
        destinationRegion: self.data.destinationRegion,
        date: self.data.date,
        time: self.data.time,
        price: self.data.price,
        cateId: self.data.cateId,
        formateId: self.data.formateId
      },
      header: {
        'x-user-id': globalData.userInfo._id,
        'x-auth-token': globalData.userInfo.token,
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType: "json",
      method: 'post',
      success: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '辩论活动创建成功！',
          icon: 'success',
          duration: 2000
        })
      },
      fail:function(err){
        wx.hideLoading()
        wx.showToast({
          title: '辩论活动创建失败！',
          icon: 'error',
          duration: 2000
        })
      }
    })
  }
})