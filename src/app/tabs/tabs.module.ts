import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
//import { ContactPageModule } from '../contact/contact.module';
//import { AboutPageModule } from '../about/about.module';
//import { HomePageModule } from '../home/home.module';
import { LimsPageModule } from '../pages/lims/lims.module';
import { CrmPageModule } from '../pages/crm/crm.module';
import { SurveyPageModule } from '../pages/survey/survey.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    //HomePageModule,
    //AboutPageModule,
    //ContactPageModule,
    LimsPageModule,
    CrmPageModule,
    SurveyPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
