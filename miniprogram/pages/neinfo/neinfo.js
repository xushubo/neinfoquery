// pages/neinfo/neinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  copyWgip: function(){
    wx.setClipboardData({
      data: this.data.searchResult[this.data.index].wgip,
    })
  },
  callAccendant: function(){
    var callNumber = this.data.searchResult[this.data.index].accendant.match(/\((.*)\)/)[1];
    wx.makePhoneCall({
      phoneNumber: callNumber,
    })
  },
  // callRoom: function(){
  //   var roomNumberList = {
  //     xds: '13924135551',
  //     xy: '18802045281',
  //     zc: '13922231493',
  //     hd: '13556087571',
  //     ch: '13928828564',
  //     xh: '13926204206',
  //     fc: '13928843412',
  //     kxc: '13925185454',
  //     qhd: '13925185461',
  //     fh: '13925185462',
  //     ns: '13922263314'
  //   };
  //   switch(this.data.searchResult[this.data.index].room){
  //     case '西德胜':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.xds,
  //       })
  //       break
  //     case '信源':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.xy,
  //       })
  //       break
  //     case '增城':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.zc,
  //       })
  //       break
  //     case '花都':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.hd,
  //       })
  //       break
  //     case '从化':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.ch,
  //       })
  //       break
  //     case '西华':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.xh,
  //       })
  //       break
  //     case '芳村':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.fc,
  //       })
  //       break
  //     case '科学城':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.kxc,
  //       })
  //       break
  //     case '清河东':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.qhd,
  //       })
  //       break
  //     case '富华':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.fh,
  //       })
  //       break
  //     case '南沙':
  //       wx.makePhoneCall({
  //         phoneNumber: roomNumberList.ns,
  //       })
  //       break
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index
    })
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
    this.setData({
      searchResult: wx.getStorageSync('searhResult')
    })
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