import { QueuePageModule } from './queue.module';

describe('QueuePageModule', () => {
    let queuePageModule: QueuePageModule;

    beforeEach(() => {
        blankPageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
