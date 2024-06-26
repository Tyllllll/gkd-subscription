import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
  groups: [
    {
      key: 0,
      name: '辅助功能-看看交通卡便宜没',
      quickFind: true,
      actionDelay: 500,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: 'com.vivo.pay.cardbag.activity.CardTransferActivity',
          matches: 'LinearLayout[id="com.vivo.wallet:id/ll_search_layout"]',
        },
        {
          key: 1,
          preKeys: [0],
          activityIds:
            'com.vivo.pay.buscard.activity.SearchBusCityListActivity',
          matches: 'Button[text="苏州市"] < LinearLayout',
        },
        {
          key: 2,
          preKeys: [1],
          activityIds:
            'com.vivo.pay.buscard.activity.SearchBusCityListActivity',
          matches: 'LinearLayout[id="com.vivo.wallet:id/layout_re_main"]',
        },
      ],
    },
  ],
});
