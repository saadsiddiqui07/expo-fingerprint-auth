import { registerWebModule, NativeModule } from 'expo';

import { ExpoFingerprintAuthModuleEvents } from './ExpoFingerprintAuth.types';

class ExpoFingerprintAuthModule extends NativeModule<ExpoFingerprintAuthModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoFingerprintAuthModule, 'ExpoFingerprintAuthModule');
