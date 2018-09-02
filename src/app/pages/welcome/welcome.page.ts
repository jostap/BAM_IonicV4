import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TabsPage } from '../../tabs/tabs.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private userService: UserService,
    public router: Router) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data)
      this.router.navigate(['/tabs']);
    });
  }

}
