import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { OrderService } from "../models/order-service";
import { Convenio } from "../models/convenio";
import { Paciente } from "../models/paciente";
import { PostoColeta } from "../models/posto-coleta";
import { Medico } from "../models/medico";
import { Exame } from "../models/exame";

@Injectable({
    providedIn: 'root'
})
export class OrderServiceApi {
  
    constructor(private http: HttpClient) { }
  
    list(): Observable<OrderService[]> {
      return this.http.get<OrderService[]>(`${environment.api}/api/order-service`);
    }

    getById(id: string): Observable<OrderService> {
      return this.http.get<OrderService>(`${environment.api}/api/order-service/${id}`);
    }
  
    create(orderService: OrderService): Observable<OrderService> {
      return this.http.post<OrderService>(`${environment.api}/api/order-service`, orderService);
    }
  
    remove(id: number): Observable<OrderService> {
      return this.http.delete<OrderService>(`${environment.api}/api/order-service/${id}`);
    }
  
    update(id: number, orderService: OrderService): Observable<OrderService> {
      return this.http.put<OrderService>(`${environment.api}/api/order-service/${id}`, orderService);
    }

    getConvenio(){
      return this.http.get<Convenio[]>(`${environment.api}/api/convenio`);
    }
    
    getPaciente(){
      return this.http.get<Paciente[]>(`${environment.api}/api/paciente`);
    }
    
    gePostoColeta(){
      return this.http.get<PostoColeta[]>(`${environment.api}/api/posto-coleta`);
    }
    
    getMedico(){
      return this.http.get<Medico[]>(`${environment.api}/api/medico`);
    }

    getExame(){
      return this.http.get<Exame[]>(`${environment.api}/api/exame`);
    }
  }