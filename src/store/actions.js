import {
  RECEIVE_USERINFO,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPLIST,
  RECEIVE_SEARCHITEM,
  RECEIVE_SHOPINFO
} from './mutation-types'
import {
  reqAddress,
  reqCategory,
  reqShopList,
  reqSearchItem,
  reqShopInfo
} from '../api'
export default {
  //同步获取用户信息
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },
  async getAddress({commit}) {
    const result = await reqAddress()
    if (result.code === 0) {
      const address = result.data[0]
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategory({commit}) {
    const result = await reqCategory()
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, {category})
    }
  },
  async getShopList({commit}) {
    const result = await reqShopList('meituan')
    if (result.code === 0) {
      const shopList = result.data
      commit(RECEIVE_SHOPLIST, {shopList})
    }
  },
  async getSearchItem({commit}, keyword) {
    const result = await reqSearchItem(keyword)
    if (result.code === 0) {
      const searchItem = result.data
      commit(RECEIVE_SEARCHITEM, {searchItem})
    }
  },
  async getShopInfo({commit}, keyword) {
    const result = await reqShopInfo(keyword)
    if (result.code === 0) {
      const shopInfo = result.data[0]
      commit(RECEIVE_SHOPINFO, {shopInfo})
    }
  }
}
