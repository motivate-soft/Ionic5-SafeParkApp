import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'successmodal',
    loadChildren: () => import('./modals/successmodal/successmodal.module').then( m => m.SuccessmodalPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'user-management',
    loadChildren: () => import('./modals/user-management/user-management.module').then( m => m.UserManagementPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'user-view',
    loadChildren: () => import('./modals/user-view/user-view.module').then( m => m.UserViewPageModule)
  },
  {
    path: 'reset-password/:id',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'verify-code/:id',
    loadChildren: () => import('./verify-code/verify-code.module').then( m => m.VerifyCodePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-device',
    loadChildren: () => import('./add-device/add-device.module').then( m => m.AddDevicePageModule)
  },
  {
    path: 'device-manage',
    loadChildren: () => import('./device-manage/device-manage.module').then( m => m.DeviceManagePageModule)
  },
  {
    path: 'device-page',
    loadChildren: () => import('./modals/device-page/device-page.module').then( m => m.DevicePagePageModule)
  },
  {
    path: 'setting-page',
    loadChildren: () => import('./setting-page/setting-page.module').then( m => m.SettingPagePageModule)
  },
  {
    path: 'arm-page',
    loadChildren: () => import('./arm-page/arm-page.module').then( m => m.ArmPagePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then( m => m.WifiPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
