import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'listTask', component: ListTaskComponent, pathMatch: 'full' },
  { path: 'saveTask', component: SaveTaskComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signUp', component: RegisterComponent, pathMatch: 'full' },
  { path: 'registerUser', component: RegisterComponent, pathMatch: 'full' },
  { path: 'listUser', component: ListUserComponent, pathMatch: 'full' },
  { path: 'updateUser', component: ListUserComponent, pathMatch: 'full' },
  { path: 'registerRole', component: RegisterComponent, pathMatch: 'full' },
  { path: 'listRole', component: ListRoleComponent, pathMatch: 'full' },
  { path: 'updateRole', component: UpdateRoleComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
