import { ResourcePageModule } from './resource.module';

describe('ResourcePageModule', () => {
    let blankPageModule: ResourcePageModule;

    beforeEach(() => {
        blankPageModule = new ResourcePageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
