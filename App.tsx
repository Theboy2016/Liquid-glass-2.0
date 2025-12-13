import React, { useEffect } from 'react';
import LiquidGlassCamera from './components/LiquidGlassCamera';
import { requestAllPermissions } from './src/utils/permissions';

export default function App() {
  useEffect(() => {
    requestAllPermissions();
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-black text-white">
      <LiquidGlassCamera />
    </div>
  );
}
