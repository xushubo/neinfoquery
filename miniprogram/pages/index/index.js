const db = wx.cloud.database()
const neInfoCollection = db.collection('NeInfo')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getNeData: function(e){
    this.setData({
      sNeInfo: e.detail.value
    })
    console.log(e.detail.value)
  },

  searchNeInfo: function(options){
    // console.log(this.data.sNeInfo)
    neInfoCollection.where({
      "nename": this.data.sNeInfo
    }).get().then(res =>{
      this.setData({
        neInfo: res.data
      })
      // console.log(this.data.neInfo)
    })
    // console.log(this.data.neInfo)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // productsCollection.get().then(res =>{
    //   this.setData({
    //     products: res.data
    //   })
    // })
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
    this.getTabBar().init();
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