import { NativeModule, requireNativeModule } from 'expo';

import { ExpoFingerprintAuthModuleEvents } from './ExpoFingerprintAuth.types';

declare class ExpoFingerprintAuthModule extends NativeModule<ExpoFingerprintAuthModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoFingerprintAuthModule>('ExpoFingerprintAuth');
