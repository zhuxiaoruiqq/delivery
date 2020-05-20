import ajax from './api'
const url_Address = '/api/test/get/withoutparams_01'
const url_Category = '/api/test/get/withoutparams_01'
const url_ShopList = 'api/test/post/withparams_03?keyWord=meituan'
export const reqAddress = () => ajax(url_Address, {}, 'Get')
export const reqCategory = () => ajax(url_Category, {}, 'Get')
export const reqShopList = (keyword) => ajax(url_ShopList, {keyword: keyword}, 'Post')
export const reqSearchItem = (keyword) => ajax(url_ShopList, {keyword: keyword}, 'Post')
export const reqShopInfo = (keyword) => ajax(url_ShopList, {keyword: keyword}, 'Post')
