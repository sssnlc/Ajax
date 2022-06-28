# jqueryAjax

## 三种形式

#### 通用

url

type:类型

data:传输数据

dataType:响应体内容

成功和失败回调函数

```js
  $("button").eq(2).click(()=>{
      $.ajax({
        // url
        url:"http://localhost:1234/post",
        // type
        type:"post",
        // data
        data:{a:100,b:200},
        dataType:"josn",
        // 回调
        success(data,status,xhr){
          console.log(data)
          console.log(status)
          console.log(xhr)
        },
        error(error,status,xhr){
            console.log(error)
            console.log(status)
          console.log(xhr)
        }
      })
    })
```

#### get

#### post

$.post("url",{data},(回调)=>{},"josn")

- 地址
- 传输数据
- 回调函数
- 数据类型

```js
    $("button").eq(1).click(()=>{
      $.post("http://localhost:1234/post",{type:"post"},
      (data)=>{console.log(data)},
      "josn")
    })
```
