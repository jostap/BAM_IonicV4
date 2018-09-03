import { Component, OnInit } from '@angular/core';
import { SurveyPage } from '../../pages/survey/survey.page';
import { CrmPage } from '../../pages/crm/crm.page';
import { LimsPage } from '../../pages/lims/lims.page';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tab1root = LimsPage;
  tab2root = CrmPage;
  tab3root = SurveyPage;

}
