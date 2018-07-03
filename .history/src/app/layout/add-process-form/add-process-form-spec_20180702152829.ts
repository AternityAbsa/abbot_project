import { AddProcessFormModule } from './add-process-module';

describe('ChartsModule', () => {
    let addProceeModule: AddProcessFormModule;

    beforeEach(() => {
        chartsModule = new AddProcessFormModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});