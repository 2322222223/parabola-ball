// index.js
Page({
  data: {
    dataList: [],
    count : 0,
    //是否展示动画
    show: false,
    //坐标位置
    startX: 0,
    startY: 0
  },

  onLoad: function () {
    let list = this.generateTestData(20)
    this.setData({
      dataList:list
    })
  },

  //生成一些测试数据
  generateTestData(count) {
    const testData = [];
    for (let i = 1; i <= count; i++) {
      testData.push({
        id: `${i}`,
        text: `食物${i}`,
        info: {
          "能量": `${Math.floor(Math.random() * 500) + 50}千卡`,
        },
      });
    }
    return testData;
  },

  //条目点击记录坐标
  selectGoods(event){
    this.setData({
      startX: event.touches[0].clientX,
      startY: event.touches[0].clientY,
      show: true,    
    });
  },

  //结束动画
  handleAnimationEnd() {
    this.setData({
      show: false,
      count: this.data.count += 1
    });
  }
  
});