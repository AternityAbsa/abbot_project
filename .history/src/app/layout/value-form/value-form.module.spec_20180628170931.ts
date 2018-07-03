import { ValueFormModule } from './value-form.module';

describe('ValueFormModule', () => {
    let valueFormModule: ValueFormModule;

    beforeEach(() => {
        valueFormModule = new ValueFormModule();
    });

    it('should create an instance', () => {
        expect(valueFormModule).toBeTruthy();
    });
});
