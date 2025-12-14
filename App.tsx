import { useState } from 'react';
import { requestAllPermissions } from './utils/permissions';
import LiquidGlassCamera from './components/LiquidGlassCamera';

export default function App() {
  const [granted, setGranted] = useState(false);

  async function handlePermission() {
    await requestAllPermissions();
    setGranted(true);
  }

  if (!granted) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Permission Required</h2>
        <p>Please allow camera and storage access</p>

        <button
          style={{
            padding: 12,
            fontSize: 16,
            marginTop: 10
          }}
          onClick={handlePermission}
        >
          Enable Camera Access
        </button>
      </div>
    );
  }

  return <LiquidGlassCamera />;
}
