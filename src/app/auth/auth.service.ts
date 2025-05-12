import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { MOCK_USERS } from '../shared/mock/users.mock';
import { Router } from '@angular/router';

interface userDetails {
    email: string;
    password: string;
}


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedInUser: any = null;
    private loginDelay = 800;
    isLoggedIn: boolean = false;

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    login(userCredentials: userDetails): Observable<boolean> {
        const user = MOCK_USERS.find((user) =>
            user.email === userCredentials.email &&
            user.password === userCredentials.password
        );

        return of(!!user).pipe(
            delay(this.loginDelay),
            tap(success => {
                if (success) {
                    this.loggedInUser = user;
                    localStorage.setItem('user', JSON.stringify(user));
                }
            })
        )
    }

    logout(): void {
        this.loggedInUser = null;
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
        this.isLoggedIn = false;
    }

    isAuthenticated(): boolean {
        if (!this.loggedInUser) {
            const storedUser = localStorage.getItem('user');
            this.loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        }
        return !!this.loggedInUser;
    }

    getCurrentUser(): any {
        return this.loggedInUser;
    }
}
