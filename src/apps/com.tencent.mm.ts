import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '辅助功能-自动选中发送原图',
      quickFind: true,
      matchTime: 3000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: 'ImageButton[id="com.tencent.mm:id/km5"][desc*="未选中"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12840865',
        'https://i.gkd.li/i/15923995',
      ],
    },
  ],
});
