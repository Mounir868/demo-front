import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private apiUrl = 'http://localhost:8080/api/partners';

  constructor(private http: HttpClient) { }

  // Récupérer la liste des partenaires
  getPartners(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un partenaire
  addPartner(partner: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, partner);
  }

  // Supprimer un partenaire
  deletePartner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
