// pages/roominfo/roominfo.js
const db = wx.cloud.database()
const roomInfoCollection = db.collection('RoomInfo')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  navigateToRoom: function () {
    wx.openLocation({
      latitude: this.data.roomInfo[0].latitude,
      longitude: this.data.roomInfo[0].longitude,
    })
  },

  callFirstPhone: function () {
    wx.makePhoneCall({
      phoneNumber: String(this.data.roomInfo[0].firstphone),
    })
  },

  callSecondPhone: function () {
    wx.makePhoneCall({
      phoneNumber: String(this.data.roomInfo[0].secondphone),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.room)
    roomInfoCollection.where({
      room: options.room
    }).get().then(res => {
      this.setData({
        roomInfo: res.data
      })
      console.log(this.data.roomInfo)
    })
    // console.log(this.data.roomInfo)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})