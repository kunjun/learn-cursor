export const videos = [
    {
      id: '1',
      url: 'https://youtu.be/sKxUEnylsQg',
      platform: 'youtube',
      category: '基础教程'
    },
    {
      id: '2',
      url: 'https://youtu.be/gqUQbjsYZLQ',
      platform: 'youtube',
      category: '基础教程'
    },
    {
      id: '3',
      url: 'https://youtu.be/1CC88QGQiEA',
      platform: 'youtube',
      category: '基础教程'
    },
    {
      id: '4',
      url: 'https://youtu.be/yk9lXobJ95E',
      platform: 'youtube',
      category: '功能演示'
    },
    {
      id: '5',
      url: 'https://youtu.be/V9_RzjqCXP8',
      platform: 'youtube',
      category: '功能演示'
    },
    {
      id: '6',
      url: 'https://youtu.be/fv1rkctrEPk',
      platform: 'youtube',
      category: '功能演示'
    },
    {
      id: '7',
      url: 'https://youtu.be/u3wPImWBz7c',
      platform: 'youtube',
      category: '实战案例'
    },
    {
      id: '8',
      url: 'https://youtu.be/tjFnifSEEjQ',
      platform: 'youtube',
      category: '实战案例'
    },
    {
      id: '9',
      url: 'https://youtu.be/42zmF9ARSWM',
      platform: 'youtube',
      category: '实战案例'
    },
    {
      id: '10',
      url: 'https://youtu.be/_SN7fqSNThg',
      platform: 'youtube',
      category: '进阶技巧'
    },
    {
      id: '11',
      url: 'https://youtu.be/nUTR11D8q08',
      platform: 'youtube',
      category: '进阶技巧'
    },
    {
      id: '12',
      url: 'https://youtu.be/oBDdcVaRhUk',
      platform: 'youtube',
      category: '进阶技巧'
    },
    {
      id: 'bilibili-1',
      url: 'https://www.bilibili.com/video/BV1e3t4etExj',
      platform: 'bilibili',
      category: 'B站教程'
    }
  ];

export const categories = [
  '全部',
  '基础教程',
  '功能演示',
  '实战案例',
  '进阶技巧',
  'B站教程'
] as const;

export type Category = typeof categories[number];