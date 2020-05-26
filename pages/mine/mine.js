var app = getApp()
Page({
    data: {
        showFooter: "none",
        navIndex: 0,
        userInfo: {
            avatar: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp",
            followersCount: 10,
            followingsCount: 11,
            cover: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2312848796.webp',
            country: "中国",
            city: "背景",
            province: "背景",
            introduction: "chuangzuoren",
            name: "ewfr"
        },
        list:[
            {
                id: 1,
                list_tool:[
                    {
                        id: 1,
                        img:"../../image/photo.png",
                        name:"关注"
                    },
                    {
                        id: 2,
                        img:"../../image/sc_2.png",
                        name:"粉丝",
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
                        name:"话题",
                        url:"../audio/audio"
                    }
                ]
            }
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
    goPage:function(event){
        console.log(event.currentTarget.dataset.log);
        wx.navigateTo({
            url: event.currentTarget.dataset.url
        })
    },
    onLoad: function (options) {
        // wx.showNavigationBarLoading();
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
        //         title: "buzhidao"
        //     })
        // } else {
        //     that.setData({
        //         showFooter: "block"
        //     })
        //     wx.setNavigationBarTitle({
        //         title: "我的"
        //     })
        // }
        
    }
})
