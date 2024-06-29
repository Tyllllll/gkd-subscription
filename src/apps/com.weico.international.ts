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
          matches: 'TextView[text="热推"] +n ImageView[desc="关闭广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16026346',
            'https://i.gkd.li/i/16026365',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          matches: 'TextView[text="不感兴趣"] < View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/16026402',
        },
      ],
    },
  ],
});
