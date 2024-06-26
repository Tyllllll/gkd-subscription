import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 0,
      name: '局部广告-地图上方横幅',
      quickFind: true,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
      snapshotUrls: 'https://i.gkd.li/i/15916609',
    },
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 5000,
      actionMaximum: 1,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      resetMatch: 'app',
      rules: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
      snapshotUrls: 'https://i.gkd.li/i/12909385',
    },
  ],
});
