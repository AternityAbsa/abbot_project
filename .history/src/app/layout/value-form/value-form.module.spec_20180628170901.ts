import { QueuePageModule } from './val';

describe('QueuePageModule', () => {
    let queuePageModule: QueuePageModule;

    beforeEach(() => {
        queuePageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
