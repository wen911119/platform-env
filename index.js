const load  = (src, success, fail) => {
  const script = document.createElement('script')
  script.src = src
  script.onload = success
  script.onerror = fail
  document.body.appendChild(script)
}

export const getWechatWx = () => {
  if (window.wx) {
    return window.wx
  }
  return new Promise((resolve, reject)=>{
    load('https://res.wx.qq.com/open/js/jweixin-1.6.0.js', () => {
      resolve(window.wx)
    }, reject)
  })
}