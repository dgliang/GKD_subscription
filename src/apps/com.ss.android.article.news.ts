import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'in-app|S2f3A0JEG6nhgAk3mQwqaxuOrq6-iUkv-ceS4v42Aw8=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'com.bytedance.news.ad.immersivedetail.ImmersiveDetailActivity',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.LinearLayout[id="com.ss.android.article.news:id/ah2"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout[id="com.ss.android.article.news:id/dj2"] > android.widget.FrameLayout[id="com.ss.android.article.news:id/fvi"] > com.bytedance.platform.raster.viewpool.cache.compat.MeasureOnceRelativeLayout2[id="com.ss.android.article.news:id/kr"] > com.bytedance.platform.raster.viewpool.cache.compat.MeasureOnceRelativeLayout2[id="com.ss.android.article.news:id/apv"] > com.bytedance.platform.raster.viewpool.cache.compat.MeasureOnceRelativeLayout2[desc="视频播放器，双击屏幕打开播放控制"] > com.bytedance.platform.raster.viewpool.cache.compat.MeasureOnceRelativeLayout2 > android.widget.FrameLayout[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
