// Reexport the native module. On web, it will be resolved to ExpoFingerprintAuthModule.web.ts
// and on native platforms to ExpoFingerprintAuthModule.ts
export { default } from './ExpoFingerprintAuthModule';
export { default as ExpoFingerprintAuthView } from './ExpoFingerprintAuthView';
export * from  './ExpoFingerprintAuth.types';
