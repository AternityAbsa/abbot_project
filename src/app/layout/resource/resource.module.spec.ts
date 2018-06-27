import { ResourcePageModule } from './resource.module';

describe('ResourcePageModule', () => {
    let resourcePageModule: ResourcePageModule;

    beforeEach(() => {
        resourcePageModule = new ResourcePageModule();
    });

    it('should create an instance', () => {
        expect(resourcePageModule).toBeTruthy();
    });
});
