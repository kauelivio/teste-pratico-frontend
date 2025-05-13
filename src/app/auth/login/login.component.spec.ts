import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authServiceSpy: jasmine.SpyObj<AuthService>;

    let routerSpy: jasmine.SpyObj<Router>;

    beforeEach(async () => {
        const authSpy = jasmine.createSpyObj('AuthService', ['login']);
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                MatFormFieldModule,
                ReactiveFormsModule,
                HttpClientModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatSnackBarModule,
                SharedModule
            ],
            providers: [{ provide: AuthService, useValue: authSpy }],
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('deve ser válido com e-mail e senha válidos', () => {
        component.loginForm.setValue({ login: 'email@domain.com', password: '123456' });
        expect(component.loginForm.valid).toBeTrue();
    });

    it('deve ser válido com CPF e senha válidos', () => {
        component.loginForm.setValue({ login: '88872427045', password: '123456' });
        component.loginForm.setValue({ login: '888.724.270-45', password: '123456' });
        expect(component.loginForm.valid).toBeTrue();
    });

    it('deve ser inválido se os campos estiverem vazios', () => {
        expect(component.loginForm.valid).toBeFalse();
    });

    it('deve ser inválido com e-mail inválido', () => {
        component.loginForm.setValue({ login: 'email@', password: '123456' });
        expect(component.loginForm.valid).toBeFalse();
        component.loginForm.setValue({ login: 'email@teste', password: '123456' });
        expect(component.loginForm.valid).toBeFalse();
        component.loginForm.setValue({ login: 'email', password: '123456' });
        expect(component.loginForm.valid).toBeFalse();
    });

    it('deve ser inválido com CPF inválido', () => {
        component.loginForm.setValue({ login: '000000', password: '123456' });
        expect(component.loginForm.valid).toBeFalse();
        component.loginForm.setValue({ login: '1230391203129', password: '123456' });
        expect(component.loginForm.valid).toBeFalse();
    });

    it('deve chamar authService.login se o formulário for válido', () => {
        spyOn(routerSpy, 'navigate');
        authServiceSpy.login.and.returnValue(of(true));

        component.loginForm.setValue({
            login: 'email@domain.com',
            password: '123456'
        });

        component.onSubmit();

        expect(authServiceSpy.login).toHaveBeenCalled();
        expect(routerSpy.navigate).toHaveBeenCalledWith(['/contribuicao-mensal']);
    });

    it('não deve chamar authService.login se o formulário for inválido', () => {
        spyOn(routerSpy, 'navigate');
        authServiceSpy.login.and.returnValue(of(false));

        component.loginForm.setValue({
            login: '',
            password: ''
        });

        component.onSubmit();

        expect(authServiceSpy.login).not.toHaveBeenCalled();
        expect(routerSpy.navigate).not.toHaveBeenCalledWith(['/contribuicao-mensal']);
    });

});
