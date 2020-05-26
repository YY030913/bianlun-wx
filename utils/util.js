const formatTime = date => {
  let now = new Date();

  let dif = now.getTime() - date.getTime();
  if (dif < 60000) {
    return Math.floor(dif / 1000) + "秒前"
  } else if (dif >= 60000 && dif < 3600000) {
    return Math.floor(dif / 60000) + "分钟前"
  } else if (dif >= 3600000 && dif < 24 * 3600 * 1000) {
    return Math.floor(dif / (1000 * 3600)) + "小时前"
  } else {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')

  }
}

function sendMessage(msg, id){
  wx.request({
      url: app.globalData.ip+'/sendMessage',
      data: {
        id:id,
        msg: msg
      },
      method: "POST",
      header: {
          'x-my-custom-header':'some value'
      },
      success: function(res) {
          console.log(res)
          obj.setData({
            message:res.data
        })
      },
      fail:function(err){
          console.log(err);
      }
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  sendMessage: sendMessage,
  formatTime: formatTime
}