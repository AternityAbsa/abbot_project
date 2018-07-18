import { ActionManagementModule } from './action-management.module';

describe('ChartsModule', () => {
    let actionManagementModule: ActionManagementModule;

    beforeEach(() => {
        actionManagementModule = new ActionManagementModule();
    });

    it('should create an instance', () => {
        expect(actionManagementModule).toBeTruthy();
    });
});
