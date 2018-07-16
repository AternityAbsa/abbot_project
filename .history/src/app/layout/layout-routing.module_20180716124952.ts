import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'login' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'process', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'app-user', loadChildren: './user/user.module#UserModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'credentials', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'credentials-manager', loadChildren: './credentials-manager/credentials-manager.module#CredentialsManagerModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'resource', loadChildren: './resource/resource.module#ResourcePageModule' },
            { path: 'queue', loadChildren: './queue/queue.module#QueuePageModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },          
            { path: 'app-add-user-form', loadChildren: './add-user-form/add-user-form.module#AddUserFormModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
