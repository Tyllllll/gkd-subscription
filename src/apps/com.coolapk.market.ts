import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '局部广告-卡片广告',
      fastQuery: true,
      activityIds: [
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
        'com.coolapk.market.view.main.MainActivity',
        'com.coolapk.market.view.node.DynamicNodePageActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击右上角x按钮',
          matches: [
            'TextView[text*="广告"][visibleToUser=true]',
            'ImageView[id="com.coolapk.market:id/close_view"][desc="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16105393',
            'https://i.gkd.li/i/16105564',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          matches: ['[text*="今日免广告"]', 'Button[text="关闭"]'],
          snapshotUrls: 'https://i.gkd.li/i/16105456',
        },
      ],
    },
  ],
});
