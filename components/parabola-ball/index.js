Component({
  properties: {
    //是否展示动画
    show: {
      type: Boolean,
      value: false
    },
    //起始位置
    startX: {
      type: Number,
      value: 0
    },
    startY: {
      type: Number,
      value: 0
    },
    //结束的位置 可以是百分比或px
    endX: {
      type: String,
      value: '15vw'
    },
    endY: {
      type: String,
      value: '95vh'
    }
  },
  //设置小球的样式
  //endX endY非必传 默认在左下方
  observers: {
    'startX, startY': function(startX, startY) {
      let style = `--startX:${startX}px;--startY:${startY}px;--endX: ${this.data.endX};--endY: ${this.data.endY};`;
      this.setData({
        style
      });
    }
  },
  methods: {
    //动画结束
    onAnimaEnd(res) {
      if (res?.detail?.animationName === "show-hide") {
        this.triggerEvent("animationHasDone");
      }
    }
  }
});
