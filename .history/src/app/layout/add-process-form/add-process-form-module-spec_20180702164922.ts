import { AddProcessFormModule } from './add-process-module';

describe('AddProcessFormModule', () => {
    let addProcessModule: AddProcessFormModule;

    beforeEach(() => {
        addProcessModule = new AddProcessFormModule();
    });

    it('should create an instance', () => {
        expect(addProcessModule).toBeTruthy();
    });
});