import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { LimsPage } from '../pages/lims/lims.page';
import { CrmPage } from '../pages/crm/crm.page';
import { SurveyPage } from '../pages/survey/survey.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lims',
        outlet: 'lims',
        component: LimsPage,
      },
      {
        path: 'crm',
        outlet: 'crm',
        component: CrmPage
      },
      {
        path: 'survey',
        outlet: 'survey',
        component: SurveyPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
