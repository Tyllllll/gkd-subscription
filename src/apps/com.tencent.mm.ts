import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '辅助功能-自动选中发送原图',
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          matches: 'ImageButton[id="com.tencent.mm:id/km5"][desc*="未选中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12840865',
            'https://i.gkd.li/i/15923995',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-朋友圈内部广告',
      quickFind: true,
      activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      rules: [
        {
          key: 0,
          name: '点击广告箭头',
          matches: '@LinearLayout >2 [text="广告"]',
          position: {
            left: 'width * 0.9223',
            top: 'width * 0.0349',
          },
          snapshotUrls: [
            'https://i.gkd.li/i/14783802',
            'https://i.gkd.li/i/15531539',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击关闭广告',
          matches: 'TextView[text^="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13926578',
        },
      ],
    },
  ],
});
