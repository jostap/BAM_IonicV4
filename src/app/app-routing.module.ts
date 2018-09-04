import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  //{ path: 'lims', loadChildren: './pages/lims/lims.module#LimsPageModule' },
  //{ path: 'crm', loadChildren: './pages/crm/crm.module#CrmPageModule' },
  //{ path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
