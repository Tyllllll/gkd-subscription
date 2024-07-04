import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: 0,
      name: '局部广告-微博热推',
      activityIds: [
        'com.weico.international.activity.MainFragmentActivity',
        'com.weico.international.ui.search.SearchActivity',
      ],
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: [
            'TextView[text="热推"] +n ImageView[desc="关闭广告"]',
            'TextView[text="广告"] +n ImageView[desc="关闭广告"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16026346',
            'https://i.gkd.li/i/16026365',
            'https://i.gkd.li/i/16093937',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          quickFind: true,
          matches: 'TextView[text="不感兴趣"] < View[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16026402',
            'https://i.gkd.li/i/16094011',
          ],
        },
      ],
    },
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
