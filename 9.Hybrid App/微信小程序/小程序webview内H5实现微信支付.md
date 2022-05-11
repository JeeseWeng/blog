# 小程序 webview 内 H5 实现微信支付

资料地址：https://blog.51cto.com/u_14368928/4984346

## 前言

小程序支持 webview 以后，我们开发的好多 h5 页面，就可以直接在小程序里使用了，比如我们开发的微信商城，文章详情页，商品详情页，就可以开发一套，多处使用了。我们今天来讲一讲。在小程序的 webview 里实现微信支付功能。因为微信不允许在小程序的 webview 里直接调起微信支付。所以我们这节课就要涉及到小程序和 webview 的交互了。

## 原理

我们在 webview 的 h5 页面里实现下单功能，然后点击支付按钮，我们点击支付按钮的时候会跳转到小程序页面，把订单号，订单总金额，传递到小程序里，然后小程序里使用订单号和订单金额去调起微信支付，实现付款，付款成功或者失败时都会有回调。我们再把对应的回调传递给 webview，刷新 webview 里的订单和支付状态。

## 步骤

### 一、开发小程序显示 H5 webview 页面

webview 的使用可以查看官方文档说明，用起来很简单。​ 就是用一个 webview 组件，显示我们的网页。

[qq.com/miniprogram/dev/component/web-view.html"](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html​​)

webview.wxml

```
<web-view src=""></web-view>
```

### 二、开发 h5 页面

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>小程序内嵌webview</title>
    <style>
        .btn {
            font-size: 70px;
            color: red;
        }
    </style>
</head>
<body>
<h1>我是webview里的h5页面</h1>
<a id="desc" class="btn" onclick="jumpPay()">点击支付</a>

<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script>
    console.log(location.href);

    let payOk = getQueryVariable("payOk");
    console.log("payOk", payOk)

    if(payOk){//支付成功
        document.getElementById('desc').innerText="支持成功"
        document.getElementById('desc').style.color="green"
    }else{
        document.getElementById('desc').innerText="点击支付"
    }

    //获取url里携带的参数
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }

    function jumpPay() {
        let orderId = Date.now();//这里用当前时间戳做订单号（后面使用你自己真实的订单号）
        let money = 1;//订单总金额（单位分）
        let payData = {orderId: orderId, money: money};

        let payDataStr = JSON.stringify(payData);//因为要吧参数传递给小程序，所以这里需要转为字符串
        const url = `../wePay/wePay?payDataStr=${payDataStr}`;
        wx.miniProgram.navigateTo({
            url: url
        });
        // console.log("点击了去支付", url)
        console.log("点击了去支付")
    }
</script>
</body>
</html>
```

### 三、小程序支付页

```
Page({
  //h5传过来的参数
  onLoad: function(options) {
    console.log("webview传过来的参数", options)
    //字符串转对象
    let payData = JSON.parse(options.payDataStr)
    console.log("orderId", payData.orderId)

    let that = this;
    wx.cloud.callFunction({
      name: "pay",
      data: {
        orderId: payData.orderId,
        money: payData.money
      },
      success(res) {
        console.log("获取成功", res)
        that.goPay(res.result);
      },
      fail(err) {
        console.log("获取失败", err)
      }
    })
  },

  //微信支付
  goPay(payData) {
    wx.requestPayment({
      timeStamp: payData.timeStamp,
      nonceStr: payData.nonceStr,
      package: payData.package,
      signType: 'MD5',
      paySign: payData.paySign,
      success(res) {
        console.log("支付成功", res)
        //你可以在这里支付成功以后，再跳会webview页，并把支付成功状态传回去
        wx.navigateTo({
          url: '../webview/webview?payOk=true',
        })
      },
      fail(res) {
        console.log("支付失败", res)
      }
    })
  }
})
```

## 源码地址
