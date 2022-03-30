微信小程序获取 openid 的两种方法
Pt.2020-11-0564661 浏览 10 评论
两种方法获取小程序用户 openid，一种使用云开发，一种使用自己的后台。

第一种：使用云开发

这种比较简单，只需要开通云开发，创建云函数，调用云函数就可获得。

调用云函数 Promise Cloud.callFunction(Object object) 返回一个 Promise 对象，所以不用考虑异步问题。

callFunction 说明 https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/functions/Cloud.callFunction.html
具体代码如下：

我这里云函数名为 helloCloud

// helloCloud-index.js 云函数入口函数
exports.main = async (event, context) => {
let{ APPID,OPENID}=cloud.getWXContext()
return {
APPID,
OPENID
}

//------------------------------------------------------
//云函数调用
wx.cloud.callFunction({
name:'helloCloud',
data:{
message:'helloCloud',
}
}).then(res=>{
console.log(res)//res 就将 appid 和 openid 返回了
//做一些后续操作，不用考虑代码的异步执行问题。
})

第二种：不使用云开发

这种方式就需要开发者有自己的后台了。

首先需要在微信小程序调用登录开放接口 wx.login() 获取用户登陆凭证 code。

wx.login()接口说明 https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html

然后，向自己的服务器发送请求，并将 code 一起发送过去。

```
wx.login({
  success (res) {
    if (res.code) {
      // 发起网络请求
      wx.request({
        url: '自己的服务器请求接口',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
```

接下来，在自己的服务端调用 auth.code2Session 接口，我这里是用 Java 后台。

auth.code2Session 接口说明 https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html

```
@RequestMapping("/testopenid")
public String getUserInfo(@RequestParam(name = "code") String code) throws Exception {
System.out.println("code" + code);
String url = "https://api.weixin.qq.com/sns/jscode2session";
url += "?appid=xxxxxxxxxxxxx";//自己的 appid
url += "&secret=xxxxxxxxxxxxxxxxxxx";//自己的 appSecret
url += "&js_code=" + code;
url += "&grant_type=authorization_code";
url += "&connect_redirect=1";
String res = null;
CloseableHttpClient httpClient = HttpClientBuilder.create().build();
// DefaultHttpClient();
HttpGet httpget = new HttpGet(url); //GET 方式
CloseableHttpResponse response = null;
// 配置信息
RequestConfig requestConfig = RequestConfig.custom() // 设置连接超时时间(单位毫秒)
.setConnectTimeout(5000) // 设置请求超时时间(单位毫秒)
.setConnectionRequestTimeout(5000) // socket 读写超时时间(单位毫秒)
.setSocketTimeout(5000) // 设置是否允许重定向(默认为 true)
.setRedirectsEnabled(false).build(); // 将上面的配置信息 运用到这个 Get 请求里
httpget.setConfig(requestConfig); // 由客户端执行(发送)Get 请求
response = httpClient.execute(httpget); // 从响应模型中获取响应实体
HttpEntity responseEntity = response.getEntity();
System.out.println("响应状态为:" + response.getStatusLine());
if (responseEntity != null) {
res = EntityUtils.toString(responseEntity);
System.out.println("响应内容长度为:" + responseEntity.getContentLength());
System.out.println("响应内容为:" + res);
}
// 释放资源
if (httpClient != null) {
httpClient.close();
}
if (response != null) {
response.close();
}
JSONObject jo = JSON.parseObject(res);
String openid = jo.getString("openid");
System.out.println("openid" + openid);
return openid;
}
```

部分参考 https://blog.csdn.net/qq_42940875/article/details/82706638?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

这样就获得 openid 了。

但是在实际应用场景中，往往需要在界面展示之前获得 openid 来做一些操作或者什么。

用以上代码会发现，openid 后台虽然获取到了，但是小程序端页面刚展示时好像并没有获取到 openid,但是之后查看数据能看到 openid。

这是因为 wx.request()是异步请求。也就是在请求的过程中，小程序的其他工作没有因为请求而停止。

所以，我们需要将请求封装成一个返回 Promise 对象的函数。

廖雪峰老师讲的 Promise 使用 https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544

这样就能在请求完做一些后续操作。

代码如下：

```
//封装wx.request()
function request(requestMapping, data, requestWay, contentType) {
  wx.showLoading({
    title: '请稍后',
  })
  return new Promise(function(resolve, reject) {
    console.log('请求中。。。。。')
    wx.request({
      url: '自己的服务器地址' + requestMapping,
      data: data,
      header: {
        'content-type': contentType // 默认值
      },
      timeout: 3000,
      method: requestWay,
      success(res) {
        //console.log(res)
        if (res.data.success == false || res.data.statusCode == 404) {
          reject(res)
        } else {
          resolve(res)
        }
      },
      fail: (e) => {
        wx.showToast({
          title: '连接失败',
          icon: 'none'
        })},
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}
```

```
//获取openid
function getOpenId(app, that){
  return new Promise(function (resolve, reject) {
        wx.login({
          success: function (yes) {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            var requestMapping = '/testopenid'
            var data = {
              code: yes.code
            }
            var requestWay = 'GET'
            var contentType = 'application/json'
            var p =request(requestMapping, data, requestWay, contentType)
            p.then(res => {
              //console.log(res) 做一些后续操作
              app.globalData.openId = res.data;
                    resolve(res)
            }).catch(e => {
              reject(e)
            })
          },
          fail(e) {
            console.log(e)
          }
        })
  })
}
```
