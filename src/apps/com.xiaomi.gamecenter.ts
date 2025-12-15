import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.gamecenter',
  name: '游戏中心',
  groups: [
    {
      key: 0,
      name: 'in-app|RQLj1cji0JuwhQ_qJnj0CM1FbQjakEeXORw6mU9idh4=.png',
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
            'android.widget.FrameLayout > android.widget.LinearLayout > android.widget.FrameLayout > android.widget.FrameLayout[id="com.xiaomi.gamecenter:id/action_bar_overlay_layout"] > android.widget.FrameLayout[id="android:id/content"] > android.widget.FrameLayout[id="com.xiaomi.gamecenter:id/root_view"] > android.widget.LinearLayout[id="com.xiaomi.gamecenter:id/dialog_view"] > android.widget.TextView[id="com.xiaomi.gamecenter:id/success"][text="同意"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13183946',
        },
      ],
    },
  ],
});
