import {
  RECEIVE_USERINFO,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPLIST,
  RECEIVE_SEARCHITEM,
  RECEIVE_SHOPINFO
} from './mutation-types'
export default {
  [RECEIVE_USERINFO](state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  [RECEIVE_ADDRESS](state, {
    address
  }) {
    state.address = address
  },
  [RECEIVE_CATEGORY](state, {
    category
  }) {
    state.category = category
  },
  [RECEIVE_SHOPLIST](state, {
    shopList
  }) {
    state.shopList = shopList
  },
  [RECEIVE_SEARCHITEM](state, {
    searchItem
  }) {
    state.searchItem = searchItem
  },
  [RECEIVE_SHOPINFO](state, {
    shopInfo
  }) {
    state.shopInfo = shopInfo
  }
}
