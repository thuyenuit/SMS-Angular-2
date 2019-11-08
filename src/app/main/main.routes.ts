import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: '',  // Đường dẫn URL, nếu gõ localhost:4200 thì hiển thị 'localhost:4200/home',
                redirectTo: 'home/index',
                pathMatch: 'full' // Bắt buộc url phải gõ full mới redirect đến localhost:4200/home'
            },
            { path: 'main', loadChildren: './main.module#MainModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' }
        ]
    }
]