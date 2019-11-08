import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',  // Đường dẫn URL, nếu gõ localhost:4200 thì hiển thị 'localhost:4200/login',
        redirectTo: 'login',
        pathMatch: 'full' // Bắt buộc url phải gõ full mới redirect đến localhost:4200/login'
    },
    // localhost:4200/login
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // localhost:4200/main
    { path: 'main', loadChildren: './main/main.module#MainModule' }

]