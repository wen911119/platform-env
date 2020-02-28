const load  = (src, success, fail) => {
  const script = document.createElement('script')
  script.src = src
  script.onload = success
  script.onerror = fail
  document.body.appendChild(script)
}

import indicator from 'h5-indicator'

export const getWechatWx = () => {
  if (window.wx) {
    return window.wx
  }
  return new Promise((resolve, reject)=>{
    const lid = indicator.showLoading()
    load('https://res.wx.qq.com/open/js/jweixin-1.6.0.js', () => {
      indicator.hideLoading(lid)
      resolve(window.wx)
    }, () => {
      indicator.hideLoading(lid)
      reject('wx script loading fail')
    })
  })
}