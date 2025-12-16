import * as React from 'react';

import { ExpoFingerprintAuthViewProps } from './ExpoFingerprintAuth.types';

export default function ExpoFingerprintAuthView(props: ExpoFingerprintAuthViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
