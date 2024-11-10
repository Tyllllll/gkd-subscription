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
          activityIds: 'com.vivo.pay.cardbag.activity.CardTransferActivity',
          matches: 'LinearLayout[id="com.vivo.wallet:id/btn_open_card"]',
        },
        // {
        //   key: 0,
        //   activityIds: 'com.vivo.pay.cardbag.activity.CardTransferActivity',
        //   matches: 'TextView[text="选择交通卡"] + LinearLayout > Button',
        //   exampleUrls: 'https://i.gkd.li/i/17348979',
        // },
        // {
        //   key: 1,
        //   preKeys: [0],
        //   activityIds:
        //     'com.vivo.pay.buscard.activity.SearchBusCityListActivity',
        //   matches: 'Button[text="苏州市"] < LinearLayout',
        // },
        // {
        //   key: 2,
        //   preKeys: [1],
        //   activityIds:
        //     'com.vivo.pay.buscard.activity.SearchBusCityListActivity',
        //   matches: 'LinearLayout[id="com.vivo.wallet:id/layout_re_main"]',
        // },
      ],
    },
  ],
});
