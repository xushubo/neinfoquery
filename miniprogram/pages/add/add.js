// pages/add/add.js
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  addData: function(event){
    wx.cloud.callFunction({
      name: 'addData'
    }).then(res => {
      console.log(res)
    })
    // console.log(event)
    // productsCollection.add({
    //   data :{
    //     title: "Product 2",
    //     image: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
    //     tags: ["tag1", "tag3"],
    //     price: 20.12,
    //     color: "blue"
    //   }
    // }).then( res => {
    //   console.log(res)
    // })
  }
})