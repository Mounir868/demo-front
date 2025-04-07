import { Routes } from '@angular/router';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { PartnerComponent } from './components/partners/partner/partner.component';


export const routes: Routes = [
    {path: 'messages', component: MessagesListComponent, data: { title: 'Liste des messages' }},
    {path: 'partners', component: PartnerComponent, data: { title: 'Liste des partenaires' }},
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
];
