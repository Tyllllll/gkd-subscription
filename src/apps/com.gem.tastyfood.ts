import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gem.tastyfood',
  name: '食行生鲜',
  groups: [
    {
      key: 0,
      name: '局部广告-首页浮窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      rules: 'ImageView[vid="ivClose"]',
      snapshotUrls: 'https://i.gkd.li/i/16172258',
    },
    {
      key: 1,
      name: '辅助功能-自动签到',
      matchTime: 5000,
      actionMaximum: 1,
      activityIds: 'com.gem.tastyfood.ui.ResultBackActivity',
      rules: 'Button[text="立即签到"][clickable=true]',
    },
  ],
});
