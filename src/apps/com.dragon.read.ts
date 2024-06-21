import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 1,
      name: '局部广告-小说底部广告',
      quickFind: true,
      rules: [
        {
          key: 1,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: 'FrameLayout[id="com.dragon.read:id/cv_"] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15922031',
        },
        {
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: 'TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15922175',
          preKeys: [1],
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 2,
      matchTime: 5000,
      rules: [
        {
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches: 'TextView[text="跳过广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15922984',
        },
      ],
    },
  ],
});
