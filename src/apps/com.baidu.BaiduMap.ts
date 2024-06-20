import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 1,
      name: '局部广告-地图上方横幅',
      rules: [
        {
          activityIds: 'com.baidu.baidumaps.MapsActivity',
          matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
        },
      ],
    },
  ],
});
