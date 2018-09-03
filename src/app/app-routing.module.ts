import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'lims', loadChildren: './pages/lims/lims.module#LimsPageModule' },
  { path: 'crm', loadChildren: './pages/crm/crm.module#CrmPageModule' },
  { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' },  { path: 'mainmenu', loadChildren: './pages/mainmenu/mainmenu.module#MainmenuPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
