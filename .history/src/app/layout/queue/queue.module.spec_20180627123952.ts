import { QueuePageModule } from './queue.module';

describe('BlankPageModule', () => {
    let blankPageModule: QueuePageModule;

    beforeEach(() => {
        blankPageModule = new BlankPageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
