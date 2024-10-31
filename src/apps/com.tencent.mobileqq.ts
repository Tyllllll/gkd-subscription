import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 0,
      name: '更新提示-消息页面弹窗',
      desc: '需要点圆形X关闭',
      quickFind: true,
      matchTime: 8000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: '@[desc="关闭"] <2 * >2 Button[text^="立即"][text.length=4]',
      snapshotUrls: [
        'https://i.gkd.li/i/13386719',
        'https://i.gkd.li/i/13526551',
      ],
    },
    {
      key: 1,
      name: '辅助功能-自动发原图',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: '@CheckBox[checked=false] + [text="原图"]',
      activityIds: [
        'com.tencent.mobileqq.activity.SplashActivity',
        'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
        'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12705556', // 未勾选原图
        'https://i.gkd.li/i/12705559', // 已勾选原图
        'https://i.gkd.li/i/13295142',
        'https://i.gkd.li/i/13476247',
      ],
    },
    {
      key: 2,
      name: '更新提示-消息页面顶部',
      quickFind: true,
      matchTime: 8000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@ImageView[clickable=true] <n * > [text*="版本更新"]',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      snapshotUrls: [
        'https://i.gkd.li/i/13255493', //desc值为null快照
        'https://i.gkd.li/i/13843140',
        'https://i.gkd.li/i/14138340',
        'https://i.gkd.li/i/13931212',
      ],
    },
    {
      key: 3,
      name: '更新提示-消息页面顶部安装提示',
      quickFind: true,
      matchTime: 8000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text="立即安装"] + ImageView',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
    },
  ],
});
