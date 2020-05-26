var app = getApp()
Page({
    data: {
        showSuggestUser: "none",
        animationData: {},
        animation: "slideInDown",
        uid: "",
        List1: [{
            id: 1,
            title: "fjdslafjdslajfsladjfsadljfsladjflsadjfsapdifjeimdlksdsiafaisjfaspdjfaps",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 2,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 3,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 4,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 5,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 6,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 7,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 8,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 9,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 10,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 11,
            title: "title",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }],
        suggestUser: [{
            id: 1,
            name: "fjdslafjdslajfsladjfsadljfsladjflsadjfsapdifjeimdlksdsiafaisjfaspdjfaps",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 2,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 3,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 4,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 5,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 6,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 7,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 8,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 9,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 10,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }, {
            id: 11,
            name: "title",
            avatar: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            participantCount: 10,
            followCount: 110
        }],
        List2: [{
            id: 1,
            title: "fjdslafjdslajfsladjfsadljfsladjflsadjfsapdifjeimdlksdsiafaisjfaspdjfaps",
            debate: "小船姐姐，刚毕业的大学生，简历上着重写什么经历呢？在学校也没参加学生会什么的，感觉自己很平凡。",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            supportCount: 1,
            follow: true,
            replyCount: 10
        }, {
            id: 3,
            title: "title",
            debate: "debate",
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            supportCount: 1,
            replyCount: 10
        }, {
            id: 3,
            title: "title",
            debate: "debate",
            follow: true,
            imgSrc: 'https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg',
            supportCount: 1,
            replyCount: 10
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
            location: "南京",
            introduction: "创作人121212",
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
    goFollow: function(event) {
        wx.navigateTo({
            url: '../userlist/userlist?uid='+event.currentTarget.dataset.uid+"&type="+event.currentTarget.dataset.type
        })
    },
    changeSuggestUser: function() {
        let self = this;
        if (this.data.showSuggestUser == "none") {
            this.setData({
                animation: "slideInDown",
                showSuggestUser: "block"
            })
        } else {
            this.setData({
                animation: "slideOutUp"
            })
            setTimeout(function() {
                self.setData({
                    showSuggestUser: "none"
                });
            }, 200);
        }
        
    },
    onLoad: function (options) {
        // wx.showNavigationBarLoading();
        var that = this
        //调用应用实例的方法获取全局数据
        // that.setData({
        //     userInfo:app.globalData.userInfo
        // })
        this.uid = options.id;

        if (options && options.id && options.username) {
            that.setData({
                showFooter: "none"
            })
            wx.setNavigationBarTitle({
                title: options.username
            })
        } else {
            that.setData({
                showFooter: "block"
            })
            wx.setNavigationBarTitle({
                title: "我的"
            })
        }
        
    }
})
