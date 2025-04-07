import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-content-dialog',
  template: `
    <h1 mat-dialog-title>Détails du Message</h1>
    <div mat-dialog-content>
      <p><strong>Numéro :</strong> {{ data.message.id }}</p>
      <p><strong>Message :</strong> {{ data.message.content }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close (click)="closeDialog()">Fermer</button>
    </div>
  `,
})
export class DialogContentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogContentDialog>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
