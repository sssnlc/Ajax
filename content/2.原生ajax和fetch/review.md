# 原生ajax

- 创建对象
- 初始化
- 发送数据
- 事件绑定,处理客户端的数据

# fetch

* 当接收到一个代表错误的 HTTP 状态码时，从 `fetch()` 返回的 Promise  **不会被标记为 reject** ，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve（如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 [`ok`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/ok "ok") 属性为 false），仅当网络故障时或请求被阻止时，才会标记为 reject。
* `fetch`  **不会发送跨域 cookie** ，除非你使用了 *credentials* 的[初始化选项](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch#%E5%8F%82%E6%95%B0)。（自 [2018 年 8 月](https://github.com/whatwg/fetch/pull/585)以后，默认的 credentials 政策变更为 `same-origin`。Firefox 也在 61.0b13 版本中进行了修改）


# 一些常用操作

- 客户端发送 请求体 xhr.send()  接收响应体 xhr.respond
- 设置请求头内容,可以做一些身份校验 ,由于是自定义了请求头内容,所以会报错,需要设置响应头,并将服务端设置成all,能接收所有请求
- nodemon 启动服务端(服务端一直修改,然后需要自己重启麻烦)  nodemon 服务端.js这样运行
- 关于延迟,超时,和网络的问题
  -- timeout ontimeout  onerror
- 如何多次解决重复请求问题
  --  使用一个标识符,并用abort函数取消请求
  --- 细节点,由于是异步请求,所以修改标识会在请求后,所以在这个期间你点击的时候就会触发abort函数,取消请求,并且判断写在最上面,获取新的xhr写在下面,是因为取消的是上一次的xhr
