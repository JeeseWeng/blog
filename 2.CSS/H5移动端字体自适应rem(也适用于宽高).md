# H5 移动端字体自适应 rem(也适用于宽高) -- rem 的使用方法

## 方法一：纯 css 方法, 精确度高，IOS 和 安卓 字体大小同等比例，1 rem = 10 px

说明：以 16px 为基准，在根元素 html 下，字体为 62.5%，此时 1rem=10px.

```
/* css代码 */
/* 在根元素html下，font-size 设置为62.%; */
html {
  /* 10÷16=62.5% */
  font-size: 62.5%;
}

body {
  font-size: 12px;
  /* 12÷10=1.2 */
  font-size: 1.2rem;
}
```

## 方法二：纯 css 方法, 精确度高，IOS 和 安卓 字体大小同等比例

说明：在 css 里，设置 html 元素的字体 font-size 为 50px;字体和元素宽度用 rem，字体和元素的实际大小等于：rem 乘以 100 除以 2，即 rem 乘以 50。此时 1rem = 50px.

```
/* css代码 */
/* 在根元素html下，font-size 设置为,50px; */
html{
  // 此处为重点
  font-size: 50px;
}

body{
  font-size: 12px;
}

/* 示例 设置一个宽为400px 高为150px 字体大小为 24px 的div盒子 */
.div {
  font-size: 0.48rem;
  width: 8rem ;
  height: 3rem;
  background-color: red;
}
/* 以上结果为：
*  width:400px;
* height:150px;
* font-size:24px;
* /
```

## 方法三：使用 JS，通过识别设备是 IOS 还是 安卓，用 JS 动态计算 rem 转换 px

说明：此方法 rem 转 px 精确不是高，以 iphone6 为例，rem 转 px 零误差；以三星 S5 为例，rem 转 px 误差 0002，ios 上 1rem=10px;安卓上，1rem=1.5px 到 1.4168px 之间;因此使用了 ismobile 方法判断设备平台，使 rem 转转 px,尽量在 IOS 和 安卓上 单位长度保持统一，此时 1rem=10px

```
// JS JS动态计算rem转换p
function fontSize() {
    var mobileType = ismobile(0)
    //通过navigator判断是否是移动设备
    if ((navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        ))) {
        //在移动端
        (function(doc, win) {
        //  html
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // console.log("ty",mobileType);
            if (mobileType == "Android") {
                console.log("我是安卓----------");
                clientWidth = (clientWidth > 768) ? 768 : clientWidth;
                docEl.style.fontSize = 10.4168 * (clientWidth / 375) + 'px'; //这个10可以根据自己使用的数据来调整
            }
            if (mobileType == "iPhone") {
                console.log("我是苹果----------");
                clientWidth = (clientWidth > 768) ? 768 : clientWidth;
                docEl.style.fontSize = 10 * (clientWidth / 375) + 'px'; //这个10可以根据自己使用的数据来调整
            }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        recalc();
        })(document, window);
        //移动端  文字适配
    } else { //如果是pc端我们可以像微信公众号那样，设置最大宽度为740px
        document.documentElement.style.margin = "0 auto"
        //PC端
    }
}

// 识别IOS还是安卓
// param test: 0:iPhone    1:Android
function ismobile(test) {
    var u = navigator.userAgent,
        app = navigator.appVersion
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (
        /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
        .test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
        try {
            if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
            return "iPhone";
            } else {
            return "Android";
            }
        } catch (e) {
            //            alert(e);
        }
        }
    } else if (app.indexOf('iPad') > -1 || app.indexOf('iPhone') > -1) {
        return "iPhone";
    } else {
        return "Android";

    }
};
```
