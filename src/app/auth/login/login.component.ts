import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { cpfOrEmailValidator } from 'src/app/validators/cpf-email.validator';
import { isCpf } from 'src/app/utils/isCpf';
import { cpfFormatter } from 'src/app/utils/cpfFormatter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    @ViewChild('loginInput') loginInput!: MatInput;

    loginForm!: FormGroup;

    isLoading = false;
    errorMessage: string | null = null;
    hide = true;

    constructor(
        private formBuider: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuider.group({
            login: ['', [Validators.required, cpfOrEmailValidator()]],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.isLoading = true;
            this.errorMessage = null;

            let userDetails = {
                login: this.login?.value ?? '',
                password: this.password?.value ?? ''
            }
            this.authService.login(userDetails).subscribe({
                next: (success) => {
                    this.isLoading = false;
                    if (success) {
                        this.router.navigate(['/contribuicao-mensal']);
                    } else {
                        this._snackBar.open('Credenciais incorretas', 'OK', {
                            duration: 3000,
                            panelClass: 'warning-snack-bar'
                        });
                        this.clearForm();
                    }
                },
                error: () => {
                    this.isLoading = false;
                    this._snackBar.open('Erro ao tentar fazer login', 'OK', {
                        duration: 3000,
                        panelClass: 'warning-snack-bar'
                    });
                    this.clearForm();
                }
            });
        }
    }

    clearForm() {
        this.login?.setValue('');
        this.password?.setValue('');
        this.loginInput.focus();
    }

    formatCpfOnBlur() {
        const field = this.loginForm.get('login');
        if (!field) return;
        const value = field.value;
        if (!value) return;
        if (!isCpf(value)) return;
        field.setValue(cpfFormatter(value), { emitEvent: false });
    }

    get login() {
        return this.loginForm.get('login');
    }

    get password() {
        return this.loginForm.get('password');
    }
}
