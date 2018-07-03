import { ValueFormModule } from './value-form.module';

describe('ValueFormModule', () => {
    let valueFormModule: ValueFormModule;

    beforeEach(() => {
        queuePageModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
