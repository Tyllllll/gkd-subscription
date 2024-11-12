import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 0,
      name: '辅助功能-看看交通卡便宜没',
      fastQuery: true,
      actionDelay: 500,
      matchTime: 3000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: 'com.vivo.pay.buscard.activity.SelectBuscardActivity',
          matches: 'LinearLayout[id="com.vivo.wallet:id/btn_open_card"]',
        },
      ],
    },
  ],
});
