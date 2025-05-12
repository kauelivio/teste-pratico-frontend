import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IconRegistryService } from 'src/app/shared/icon-registry.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent {
    loginForm = this.formBuider.group({
        email: ['usuario@exemplo.com', [Validators.required, Validators.email]], // Valor inicial para testes
        password: ['senha123', Validators.required] // Valor inicial para testes
    });

    isLoading = false;
    errorMessage: string | null = null;
    hide = true;

    constructor(
        private formBuider: FormBuilder,
        private authService: AuthService,
        private router: Router,
        iconRegistry: IconRegistryService
    ) { }

    onSubmit() {
        console.log('oi');
        
        if (this.loginForm.valid) {
            this.isLoading = true;
            this.errorMessage = null;

            let userDetails = {
                email: this.email?.value ?? '',
                password: this.password?.value ?? ''
            }
            this.authService.login(userDetails).subscribe({
                next: (success) => {
                    this.isLoading = false;
                    if (success) {
                        this.router.navigate(['/']);
                    } else {
                        this.errorMessage = 'E-mail ou senha incorretos';
                    }
                },
                error: () => {
                    this.isLoading = false;
                    this.errorMessage = 'Erro ao tentar fazer login';
                }
            });
        }
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }
}
