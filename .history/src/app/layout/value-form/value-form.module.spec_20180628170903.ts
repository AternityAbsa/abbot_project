import { QueuePageModule } from './value-form.module';

describe('QueuePageModule', () => {
    let queuePageModule: QueuePageModule;

    beforeEach(() => {
        queuePageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
