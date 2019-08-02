import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChatsComponent } from './screens/chats/chats.component';
import { ContactsComponent } from './screens/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'chats',
        component: ChatsComponent
      },
      {
        path: 'contacts', 
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardPage,
    ChatsComponent,
    ContactsComponent
  ]
})
export class DashboardPageModule {}
