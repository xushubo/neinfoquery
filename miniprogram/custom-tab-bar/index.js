Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'search',
				text: '搜索',
				url: '/pages/index/index'
			},
			{
				icon: 'apps-o',
				text: '分类',
				url: '/pages/info/info'
      },
      {
        icon: 'user-circle-o',
        text: '我的',
        url: '/pages/myinfo/myinfo'
      }
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});


// Page({
//   navigateToAdd: function(event){
//     wx.navigateTo({
//       url: '../add/add',
//     })
//   },
//   navigateToIndex: function(event){
//     wx.navigateTo({
//       url: '../index/index',
//     })
//   },
//   navigateToComplex: function(event){
//     wx.navigateTo({
//       url: '../complex/complex',
//     })
//   }
// })