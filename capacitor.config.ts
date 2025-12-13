import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.psjdbd.liquidglass',
  appName: 'LiquidGlassCamera',
  webDir: 'dist',
  bundledWebRuntime: false,

  android: {
    allowMixedContent: true
  }
};

export default config;
