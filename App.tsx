import React, { useEffect } from 'react';
import LiquidGlassCamera from './components/LiquidGlassCamera';

import { Camera } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

export default function App() {

  useEffect(() => {
    async function requestPermissions() {
      if (!Capacitor.isNativePlatform()) return;

      await Camera.requestPermissions();
      await Filesystem.requestPermissions();
    }

    requestPermissions();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-black text-white relative overflow-hidden">
      <LiquidGlassCamera />
    </div>
  );
}
