import { ValueFormModule } from './value-form.module';

describe('ValueFormModule', () => {
    let valueFormModule: ValueFormModule;

    beforeEach(() => {
        valueFormModule = new QueuePageModule();
    });

    it('should create an instance', () => {
        expect(queuePageModule).toBeTruthy();
    });
});
