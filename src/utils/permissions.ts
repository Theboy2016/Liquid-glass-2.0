import { Camera } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

export async function requestAllPermissions() {
  if (!Capacitor.isNativePlatform()) return;

  await Camera.requestPermissions();
  await Filesystem.requestPermissions();
}
