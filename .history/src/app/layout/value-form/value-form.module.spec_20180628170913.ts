import { ValueFormModule } from './value-form.module';

describe('ValueFormModule', () => {
    let queuePageModule: ValueFormModule;

    beforeEach(() => {
        queuePageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
