import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gem.tastyfood',
  name: '食行生鲜',
  groups: [
    {
      key: 0,
      name: '自动签到',
      matchTime: 5000,
      actionMaximum: 1,
      activityIds: 'com.gem.tastyfood.ui.ResultBackActivity',
      rules: 'Button[text="立即签到"][clickable=true]',
    },
  ],
});
