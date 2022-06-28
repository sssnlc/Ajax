# cros 

其实我们前面就已经多次用过了,毕竟我们使用本地的js发起了ajax请求到另一个源 后台,

那我们之前不就是设置的cros 响应头嘛

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ' *');
    res.header('Access-Control-Allow-Headers', ' *');
