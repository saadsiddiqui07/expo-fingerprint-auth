import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoFingerprintAuthViewProps } from './ExpoFingerprintAuth.types';

const NativeView: React.ComponentType<ExpoFingerprintAuthViewProps> =
  requireNativeView('ExpoFingerprintAuth');

export default function ExpoFingerprintAuthView(props: ExpoFingerprintAuthViewProps) {
  return <NativeView {...props} />;
}
