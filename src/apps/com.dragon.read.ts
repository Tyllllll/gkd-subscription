import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-小说底部广告',
      actionCd: 25000, // 猜的时间
      rules: [
        {
          key: 0,
          name: '点击广告箭头',
          quickFind: true,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: 'FrameLayout[id="com.dragon.read:id/cv_"] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15922031',
        },
        {
          key: 1,
          name: '点击关闭广告',
          matches: 'TextView[text="关闭此条广告"]',
          quickFind: true,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          snapshotUrls: 'https://i.gkd.li/i/15922175',
          preKeys: [0],
        },
      ],
    },
  ],
});
