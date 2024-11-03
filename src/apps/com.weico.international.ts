import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: 1,
      name: '评价提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        matches: 'TextView[text*="请给我们评分"]',
        action: 'back',
      },
      snapshotUrls: 'https://i.gkd.li/i/16046977',
    },
  ],
});
