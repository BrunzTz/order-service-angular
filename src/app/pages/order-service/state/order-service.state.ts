import { Injectable } from "@angular/core";
import { StateCollection } from "src/app/utils/state-collection";
import { StateDocument } from "src/app/utils/state-document";
import { Convenio } from "../models/convenio";
import { Exame } from "../models/exame";
import { Medico } from "../models/medico";
import { OrderService } from "../models/order-service";
import { Paciente } from "../models/paciente";
import { PostoColeta } from "../models/posto-coleta";

@Injectable({
    providedIn: 'root'
})
export class OrderServiceState {
    public orderService = new StateCollection<OrderService>([]);
    public orderServiceUpdate = new StateDocument<OrderService | null>(null);
    public convenio = new StateCollection<Convenio>([]);
    public exame = new StateCollection<Exame>([]);
    public paciente = new StateCollection<Paciente>([]);
    public postoColeta = new StateCollection<PostoColeta>([]);
    public medico = new StateCollection<Medico>([]);
}