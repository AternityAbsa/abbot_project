import { QueuePageModule } from './queue.module';

describe('QueuePageModule', () => {
    let queuePageModule: eu;

    beforeEach(() => {
        queuePageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
