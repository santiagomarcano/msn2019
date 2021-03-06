import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavigationPage } from './navigation.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChatsComponent } from './screens/chats/chats.component';
import { ContactsComponent } from './screens/contacts/contacts.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationPage,
    children: [
      {
        path: 'chats',
        component: ChatsComponent
      },
      {
        path: 'contacts', 
        component: ContactsComponent
      },
      {
        path: 'home', 
        component: HomeComponent
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
    NavigationPage,
    HomeComponent,
    ChatsComponent,
    ContactsComponent
  ]
})
export class NavigationPageModule {}
