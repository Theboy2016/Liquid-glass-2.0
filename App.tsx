import React, { useEffect } from 'react';
import LiquidGlassCamera from './components/LiquidGlassCamera';

import { Camera } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

async function requestPermissions() {
  if (!Capacitor.isNativePlatform()) return;

  // Camera permission
  await Camera.requestPermissions({
    permissions: ['camera', 'photos']
  });

  // Storage / Files permission
  await Filesystem.requestPermissions();
}

export default function App() {
  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-black text-white relative overflow-hidden">
      <LiquidGlassCamera />
    </div>
  );
}
