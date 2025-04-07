import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../../services/partners/partner.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {
  partnerForm: FormGroup;
  partners: any[] = [];
  newPartner: any = { alias: '', type: '', direction: '', processedFlowType: '', description: '' };


  constructor(private partnerService: PartnerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchPartners();
    this.partnerForm = this.fb.group({
      alias: ['', Validators.required],
      type: ['', Validators.required],
      direction: ['', Validators.required],
      processedFlowType: ['', Validators.required],
      description: ['', [Validators.required]],
    });
  }

  fetchPartners(): void {
    this.partnerService.getPartners().subscribe(data => {
      this.partners = data;
    });
  }

  addPartner(): void {
    if(this.partnerForm.valid) {
      const partnerData = this.partnerForm.value;
      this.partnerService.addPartner(partnerData).subscribe(() => {
        this.fetchPartners();
        this.newPartner = { alias: '', type: '', direction: '', processedFlowType: '', description: '' };
      });
    } else {
      console.error('Formulaire invalide');
    }
  }

  deletePartner(id: number): void {
    this.partnerService.deletePartner(id).subscribe(() => {
      this.fetchPartners();
    });
  }
}
