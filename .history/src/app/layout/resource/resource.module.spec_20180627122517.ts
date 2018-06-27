import { ResourcePageModule } from './resource.module';

describe('ResourcePageModule', () => {
    let blankPageModule: ResourcePageModule;

    beforeEach(() => {
        resourcePageModule = new ResourcePageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
