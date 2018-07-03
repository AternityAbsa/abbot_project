import { ValueFormModule } from './value-form.module';

describe('QueuePageModule', () => {
    let queuePageModule: ValueFormModule;

    beforeEach(() => {
        queuePageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
