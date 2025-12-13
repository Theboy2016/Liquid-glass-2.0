import { useEffect } from 'react';
import { requestAllPermissions } from './src/utils/permissions';
import LiquidGlassCamera from './components/LiquidGlassCamera';

export default function App() {
  useEffect(() => {
    requestAllPermissions();
  }, []);

  return <LiquidGlassCamera />;
}
