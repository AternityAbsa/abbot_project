import { ResourcePageModule } from './resource.module';

describe('ResourcePageModule', () => {
    let blankPageModule: ResourcePageModule;

    beforeEach(() => {
        blankPageModule = new BlankPageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
