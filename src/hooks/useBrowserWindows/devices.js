// source: firefox browser dev tools

export const DEVICES = {
  iOS: [
    {
      name: 'iPhone 5/SE',
      width: 320,
      height: 568,
      is_default: true,
    },
    {
      name: 'iPhone 6/7/8',
      width: 375,
      height: 667,
    },
    {
      name: 'iPhone 6/7/8 Plus',
      width: 414,
      height: 736,
    },
    {
      name: 'iPhone X/XS',
      width: 375,
      height: 812,
    },
    {
      name: 'iPhone XS Max',
      width: 414,
      height: 896,
      is_default: true,
    },
    {
      name: 'iPhone XR',
      width: 414,
      height: 896,
    },
    {
      name: 'iPad',
      width: 768,
      height: 1024,
      is_default: true,
    },
    {
      name: 'iPad Mini',
      width: 768,
      height: 1024,
    },
    {
      name: 'iPad Pro (10.5 inch)',
      width: 834,
      height: 1112,
    },
    {
      name: 'iPad Pro (12.9 inch)',
      width: 1024,
      height: 1366,
    },
  ],
  Android: [
    {
      name: 'Galaxy Note 9',
      width: 414,
      height: 846,
    },
    {
      name: 'Galaxy S5',
      width: 360,
      height: 640,
      is_default: true,
    },
    {
      name: 'Galaxy S9/S9 Plus',
      width: 360,
      height: 740,
    },
    {
      name: 'Pixel 2',
      width: 411,
      height: 731,
    },
    {
      name: 'Pixel 2 XL',
      width: 411,
      height: 823,
    },
  ],
  Desktop: [
    {
      name: 'Laptop (MDPI)',
      width: 1280,
      height: 800,
      is_default: true,
    },
    {
      name: 'Laptop (HiDPI)',
      width: 1440,
      height: 900,
    },
  ],
}
