var app = getApp()
Page({
    data: {
        cates: [{
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
    changeCate: function (e) {
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
    comfireCate: function(event) {
        app.globalData.debateEdit.cateId = event.target.dataset.id;
        app.globalData.debateEdit.cateName = event.target.dataset.cate;
        console.log(app)
        wx.navigateBack();
    },
    onLoad: function (options) {
        console.log(app)
        // loading start
        wx.showNavigationBarLoading();
        wx.showLoading({
            title: '加载中...'
        })

        // loading end
        var that = this
        //调用应用实例的方法获取全局数据
        // that.setData({
        //     userInfo:app.globalData.userInfo
        // })
        // if (options && options.id) {
        //     that.setData({
        //         showFooter: "none"
        //     })
        //     wx.setNavigationBarTitle({
        //         name: "buzhidao"
        //     })
        // } else {
        //     that.setData({
        //         showFooter: "block"
        //     })
        //     wx.setNavigationBarTitle({
        //         name: "我的"
        //     })
        // }
        // 加载网络请求
        wx.request({
            url: "http://127.0.0.1:3000/api/v1/debate/cate/list",
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
                wx.hideLoading()
                that.setData({
                    cates: res.data
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
        
    }
})
