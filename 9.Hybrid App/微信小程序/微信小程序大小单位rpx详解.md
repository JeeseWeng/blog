# 微信小程序大小单位 rpx 详解

rpx（responsive pixel） 单位是微信小程序中 css 的尺寸单位，rpx 可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，即 1rpx = 0.5px = 1 物理像素。具体在 iphone 版本上对应如下：

| 设备     | rpx 换算 px  | pa 换算 rpx |
| -------- | ------------ | ----------- |
| iPhone5  | 1rpx=0.42px  | 1px=2.34rpx |
| iPhone6  | 1rpx=0.5px   | 1px=2rpx    |
| iPhone6s | 1rpx=0.552px | 1px=1.91rpx |
