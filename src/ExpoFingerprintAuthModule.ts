import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoFingerprintAuthModule extends NativeModule {
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoFingerprintAuthModule>('ExpoFingerprintAuth');
