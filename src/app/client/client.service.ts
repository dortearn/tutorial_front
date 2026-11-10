import { Injectable } from '@angular/core';
import { CLIENT_DATA } from './model/mock-clients';
import { Observable, of } from 'rxjs';
import { Client } from "./model/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(): Observable<Client[]> {
          return of(CLIENT_DATA);
      }
  
      saveClient(client: Client): Observable<Client> {
          return of (null as any);
      }
  
      deleteClient(idClient : number): Observable<any> {
          return of (null);
      }  
  }
