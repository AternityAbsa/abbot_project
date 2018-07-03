import { AddProcessFormModule } from './add-process-module';

describe('ChartsModule', () => {
    let chartsModule: AddProcessFormModule;

    beforeEach(() => {
        chartsModule = new ChartsMoAddProcessFormModuledule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});