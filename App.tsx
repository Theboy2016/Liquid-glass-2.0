import React, { useEffect } from 'react';
import LiquidGlassCamera from './components/LiquidGlassCamera';
import { requestAllPermissions } from './permissions';

export default function App() {

  useEffect(() => {
    requestAllPermissions();
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden">
      <LiquidGlassCamera />
    </div>
  );
}
