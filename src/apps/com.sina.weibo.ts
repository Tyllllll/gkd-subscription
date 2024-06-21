import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 2,
      matchTime: 5000,
      rules: [
        {
          activityIds: 'com.sina.weibo.SplashActivity',
          matches: 'TextView[text="跳过"]',
        },
      ],
    },
  ],
});
