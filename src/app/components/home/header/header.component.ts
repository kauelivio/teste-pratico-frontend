import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    constructor(private _authService: AuthService) {}

    ngOnInit(): void {

    }

    logout() {
        this._authService.logout()
    }
}
