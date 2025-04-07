import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../services/messages/messages.service';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentDialog } from '../message-content-dialog.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [NgFor, NgIf, MatTableModule],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  encapsulation: ViewEncapsulation.None
})
export class MessagesListComponent {

  messages: any[] = [];
  displayedColumns: string[] = ['id', 'content', 'action'];

  text:string = "";
  aRoute:ActivatedRoute = inject(ActivatedRoute);

    constructor(private messageService: MessageService, private dialog: MatDialog) {
      this.text = this.aRoute.snapshot.data['title'];
    }

    ngOnInit(): void {
      this.messageService.getMessages()
      .subscribe({
        next: data => this.messages = data,
        error: error => console.error('Erreur lors du chargement des messages', error),
        complete: () => console.log('Completed!')
      });      
    }

    openDialog(message: any): void {
      this.dialog.open(DialogContentDialog, {
        data: { message }
      });
    }
}
