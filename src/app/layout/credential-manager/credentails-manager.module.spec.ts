import { CredentialsManagerModule } from './credentials-manager.module';

describe('CredentialsManagerModule', () => {
  let credentialsManagerModule: CredentialsManagerModule;

  beforeEach(() => {
    credentialsManagerModule = new CredentialsManagerModule();
  });

  it('should create an instance', () => {
    expect(credentialsManagerModule).toBeTruthy();
  });
});
