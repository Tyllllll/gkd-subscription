import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '更新提示',
      fastQuery: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.meituan.android.upgrade.ui.f',
      rules:
        'TextView[text^="新版本"] - Button[id="com.sankuai.meituan:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12614559',
    },
  ],
});
