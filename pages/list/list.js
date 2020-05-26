var app = getApp()

var util = require('../../utils/util.js')

Page({
  data: {
    questions: [{
      id:1,
      qtype: 0,//0为限时免费、1为一元
      title: "fefeafd",
      content: '小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。',
      authorHead: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
      authorId: 'feif',
      authorName: '李小船',
      authorBio:'央企集团总部人力资源经理，百单行家',
      participantCount: 1,
      followCount: 1,
      price: 1,
      priceCondition: function() {
        let a = new Date();
        if (a % 10 == 0) {
          return true;
        } else {
          return false;
        }
      }(),
      priceConditionText: "活动价格",
      createTime: util.formatTime(new Date(1530626402868)),
      thumbs: [{
        id: 1,
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
      }, {
        id: 2,
        src: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp"
      }]
    }],
    searchSongList: [], //放置返回数据的数组  
    searchPageNum: 1,   // 设置加载的第几次，默认是第一次  
    offset: 0,
    limit: 10,
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false  //“没有数据”的变量，默认false，隐藏  
  },
  // 首次加载
  onLoad: function () {
    let that = this;
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.showLoading({
      title: '加载中...',
    })
    that.fetchSearchList();
    that.setData({
      searchPageNum: that.data.searchPageNum + 1,  //每次触发上拉事件，把searchPageNum+1  

    });
  },
  // 搜索，访问网络  
  fetchSearchList: function () {
    let that = this;
    let searchPageNum = that.data.searchPageNum//把第几次加载次数作为参数 
    
    // let getdata = []; 
    // if (searchPageNum !== 8){
    //    getdata = that.data.locallist;//模拟ajax拉取到的数据 发送至第7次止数组为空数组
    // }
    
    // if (getdata.length != 0) {
    //   let searchList = [];
    //   //拼接数组
    //   searchList = that.data.searchSongList.concat(getdata);
    //   that.setData({
    //     searchSongList: searchList, //获取数据数组  
    //     searchLoading: true   //把"上拉加载"的变量设为true，显示  
    //   });

    // } else {
    //   that.setData({
    //     searchLoadingComplete: true, //把“没有数据”设为true，显示  
    //     searchLoading: false  //把"上拉加载"的变量设为false，隐藏  
    //   });
    // }
    // wx.hideLoading()

    
    //访问网络  
    wx.request({
      url: "http://127.0.0.1:3000/api/v1/debate/list", //仅为示例，并非真实的接口地址
      data: {
        startTime: "2018-09-01 17:00",
        limit: that.data.limit,
        offset: that.data.offset
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      dataType: "json",
      method: 'get',
      success: function (res) {
        console.log(res.data)
        if (res.data.length != 0) {
          let searchList = [];
          //拼接数组
          searchList = that.data.searchSongList.concat(res.data);
          that.setData({
            searchSongList: searchList, //获取数据数组  
            searchLoading: true   //把"上拉加载"的变量设为true，显示  
          });

          if (res.data.length < that.data.limit) {
            that.setData({
              searchLoadingComplete: true, //把“没有数据”设为true，显示  
              searchLoading: false  //把"上拉加载"的变量设为false，隐藏  
            });
          }

        } else {
          that.setData({
            searchLoadingComplete: true, //把“没有数据”设为true，显示  
            searchLoading: false  //把"上拉加载"的变量设为false，隐藏  
          });
        }
        wx.hideLoading()
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

  //滚动到底部触发事件  
  searchScrollLower: function () {
    
    let that = this;
    if (that.data.searchLoading && !that.data.searchLoadingComplete) {
      that.setData({
        searchPageNum: that.data.searchPageNum + 1,  //每次触发上拉事件，把searchPageNum+1  
        searchLoading: false
      });
      that.fetchSearchList();
    }
  },
  goDetail: function (e) {
    wx.navigateTo({
        url: '../detail/detail?id='+e.currentTarget.dataset.id
    })
  },
  goPublish: function () {
    wx.navigateTo({
        url: '../publish/publish'
    })
  },
  goMe: function () {
    wx.navigateTo({
        url: '../user/user'
    })
  },
  goUser: function (e) {
    wx.navigateTo({
        url: '../user/user?id='+e.currentTarget.dataset.id
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "阿珊，你要我怎么做怎么说才会爱我？",
      path: '/pages/list/list',
      imageUrl: "http://p88om5yae.bkt.clouddn.com/basicprofile.jpeg",
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