import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '局部广告-小说底部广告',
      actionCd: 25000, // 猜的时间
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: [
        {
          key: 0,
          name: '点击广告箭头',
          matches:
            'FrameLayout[id="com.dragon.read:id/cv_"] > ImageView[vid="b8d"]',
          snapshotUrls: 'https://i.gkd.li/i/15922031',
        },
        {
          key: 1,
          name: '点击关闭广告',
          matches: 'TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15922175',
          preKeys: [0],
        },
      ],
    },
  ],
});
