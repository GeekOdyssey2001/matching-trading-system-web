import { createStore } from 'vuex'

export default createStore({

  state: {
      //存放全局变量
      posiData: [],
      orderData: [],
      tradeData: [],
      balance: 0,
  },
  getters: {
  },
  mutations: {
    //此处用于修改全局变量
    updatePosi(state,psoiInfo){
      //state:上面的值，第二个参数是希望更新的值
      state.posiData = psoiInfo;
    },
    updateOrder(state,orderInfo){
      state.orderData = orderInfo;
    },
    updateTrade(state,tradeInfo){
      state.tradeData = tradeInfo;
    },
    updateBalance(state,balance){
      state.balance = balance;
    },
  },
  //异步操作，类似mutations
  // actions: {
  // },
  //类似state，是用module方式保存变量
  // modules: {
  // }
})
