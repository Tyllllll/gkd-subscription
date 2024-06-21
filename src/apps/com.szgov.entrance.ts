import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.szgov.entrance',
  name: '苏周到',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.csztv.starfleet.MainActivity',
          matches: 'ImageView[id="com.szgov.entrance:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/15923389',
        },
      ],
    },
  ],
});
