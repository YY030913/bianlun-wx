var app = getApp()
Page({
    data: {
        users: [{
            id: 1,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            follow: true,
            introduction: "10"
        }, {
            id: 2,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 3,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 4,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 5,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 6,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 7,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 8,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 9,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 10,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }, {
            id: 11,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            introduction: "10"
        }],
        navIndex: 0,
        showFooter: "none",
        userInfo: {
            avatar: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp",
            followersCount: 10,
            followingsCount: 11,
            cover: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp',
            country: "中国",
            city: "背景",
            province: "背景",
            introduction: "创作人",
            name: "ewfr"
        },
        list:[
            {
                id: 1,
                list_tool:[
                    {
                        id: 1,
                        img:"../../image/photo.png",
                        name:"相册"
                    },
                    {
                        id: 2,
                        img:"../../image/sc_2.png",
                        name:"收藏(现在是上传和下载)",
                        url:"../upload/upload"
                    }
                ]
            },
            {
                id: 2,
                list_tool:[
                    {
                        id: 1,
                        img:"../../image/money.png",
                        name:"钱包(现在是播放器)",
                        url:"../audio/audio"
                    },
                    {
                        id: 2,
                        img:"../../image/card.png",
                        name:"卡包（picker&switch）",
                        url:"../picker/picker"
                    }
                ]
            },
            {
                id: 3,
                list_tool:[
                    {
                        id: 1,
                        img:"../../image/bq_2.png",
                        name:"表情"
                    },
                    {
                        id: 2,
                        img:"../../image/setting.png",
                        name:"设置（系统信息）",
                        url:"../info/info"
                    }
                ]
            },
        ]
    },
    goPublish: function () {
        wx.navigateTo({
            url: '../publish/publish'
        })
    },
    goHome: function () {
        wx.navigateTo({
            url: '../list/list'
        })
    },
    swiperChange:function(event){
        this.setData({
            navIndex: event.detail.current
        })
    },
    goPage:function(event){
        console.log(event.currentTarget.dataset.log);
        wx.navigateTo({
            url: event.currentTarget.dataset.url
        })
    },
    changeNav:function(event){
        this.setData({
            navIndex: event.target.dataset.index
        })
    },
    onLoad: function (options) {
        if (options.uid == null || options.type == null) {
            wx.showToast({
              title: '参数错误',
              icon: 'error',
              duration: 2000
            })
            return;
        }

        // wx.showNavigationBarLoading();
        var that = this
        //调用应用实例的方法获取全局数据
        // that.setData({
        //     userInfo:app.globalData.userInfo
        // })
        if (options && options.uid && options.type) {
            that.setData({
                uid: options.uid,
                type: options.type
            })
            if (options.type == "follower") {
                if (app.globalData.userInfo == null || options.uid != app.globalData.userInfo.uid) {
                    wx.setNavigationBarTitle({
                        name: "他的粉丝"
                    })
                } else {
                    wx.setNavigationBarTitle({
                        name: "我的粉丝"
                    })
                }
            } else if (options.type == "following") {
                if (app.globalData.userInfo == null || options.uid != app.globalData.userInfo.uid) {
                    wx.setNavigationBarTitle({
                        name: "他的关注"
                    })
                } else {
                    wx.setNavigationBarTitle({
                        name: "我的关注"
                    })
                }
            }
            
        } else {
            return;
        }
        
    }
})
