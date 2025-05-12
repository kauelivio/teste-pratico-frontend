import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    menuOpen = true;

    currentTitle: string = 'MEU PLANO';

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.setupRouteListener();
        this.setInitialTitle();
    }

    private setupRouteListener(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.updateCurrentTitle();
        });
    }

    private setInitialTitle(): void {
        this.updateCurrentTitle();
    }

    private updateCurrentTitle(): void {
        let child = this.route.firstChild;

        while (child) {
            if (child.firstChild) {
                child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
                this.currentTitle = child.snapshot.data['title'];
                return;
            } else {
                child = null;
            }
        }

        this.currentTitle = 'MEU PLANO';
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu() {
        if (this.menuOpen) {
            this.menuOpen = false;
        }
    }


}
