import { AddProcessFormModule } from './add-process-module';

describe('addProcessModule', () => {
    let addProcessModule: AddProcessFormModule;

    beforeEach(() => {
        chartsModule = new AddProcessFormModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});