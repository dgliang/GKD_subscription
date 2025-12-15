import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 0,
      name: 'in-app|mIdymA3hQfi5XPGyeRKzBQE_l9MFUw_J-ZOHpCgClbw=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="android:id/content"] > android.widget.LinearLayout > android.view.ViewGroup[clickable=true] > android.widget.LinearLayout > android.widget.TextView[id="com.youku.phone:id/dialog_ok_button"][text="不再提示"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
    {
      key: 1,
      name: 'in-app|_n_yLCl5EpqFISd1R84g85A23gl_Cvy6PABv3MB67K0=.png',
      actionDelay: 3000,
      actionMaximum: 3,
      resetMatch: 'app',
      priorityTime: 10000,
      matchRoot: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds: '',
          matches:
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.youku.phone:id/layermanager_penetrate_webview_container_id"] > android.widget.FrameLayout > android.widget.FrameLayout > android.widget.RelativeLayout > android.widget.ImageView[id="com.youku.phone:id/closeView"][desc="关闭弹层"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
