import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-底部广告',
      fastQuery: true,
      activityIds: '.reader.ui.ReaderActivity',
      rules: '[vid="b8d"]',
    },
  ],
});
