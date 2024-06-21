import { defineGkdGlobalGroups } from '@gkd-kit/define';

const appList = [
  { id: 'com.baidu.BaiduMap', name: '百度地图' },
  { id: 'com.dragon.read', name: '番茄免费小说' },
  { id: 'com.sina.weibo', name: '微博' },
  // { id: 'com.szgov.entrance', name: '苏周到' },
];

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    order: 10,
    matchTime: 5000,
    actionMaximum: 2,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: 1,
        matches:
          '[childCount=0][visibleToUser=true][((text*="跳过" || text*="跳過" || text~="(?is).*skip.*") && text.length<10) || ((desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*") && desc.length<10) || id~="(?is).*tt_splash_skip_btn" || vid~="(?is).*skip.*" || (vid~="(?is).*count.*" && vid~="(?is).*down.*" && vid!~="(?is).*load.*" && vid!~="(?is).*time.*" && vid!~="(?is).*hour.*" && vid!~="(?is).*minute.*" && vid!~="(?is).*second.*" && vid!~="(?is).*add.*" && vid!~="(?is).*ead.*" && text!~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]")]',
      },
      {
        key: 2,
        quickFind: true,
        matches:
          'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
      },
    ],
    apps: appList.map((a) => ({ id: a.id })),
  },
]);
