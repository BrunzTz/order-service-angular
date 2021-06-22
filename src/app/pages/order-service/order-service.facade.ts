import { Injectable } from "@angular/core";
import { format } from "date-fns";
import { Observable } from "rxjs";
import { distinctUntilChanged, debounceTime, switchMap, filter, tap, map } from "rxjs/operators";
import { NotificationService } from "src/app/shared/services/notification/notification.service";
import { OrderServiceApi } from "./api/order-service.api";
import { Convenio } from "./models/convenio";
import { Exame } from "./models/exame";
import { Medico } from "./models/medico";
import { OrderService } from "./models/order-service";
import { Paciente } from "./models/paciente";
import { PostoColeta } from "./models/posto-coleta";
import { OrderServiceState } from "./state/order-service.state";

@Injectable()
export class OrderServiceFacade {

    constructor(
        private api: OrderServiceApi,
        private state: OrderServiceState,
        private notification: NotificationService,
    ) {}

    orderService$: Observable<OrderService[]> = this.state.orderService.collection$;
    convenio$: Observable<Convenio[]> = this.state.convenio.collection$;
    exame$: Observable<Exame[]> = this.state.exame.collection$;
    paciente$: Observable<Paciente[]> = this.state.paciente.collection$;
    postoColeta$: Observable<PostoColeta[]> = this.state.postoColeta.collection$;
    medico$: Observable<Medico[]> = this.state.medico.collection$;

    // listenToOrderServiceChanges(search$: Observable<string>): void {
    //     search$.pipe(
    //     distinctUntilChanged(),
    //     debounceTime(300),
    //     switchMap(search => this.api.list(search))
    //     )
    //     .subscribe(orderService => this.state.orderService.collection = orderService);
    // }

    init(){
        this.api.list().subscribe(
            orderService => {
                this.state.orderService.collection = orderService;
            }
        );
    }

    getById(id: string): Observable<OrderService>{
        return this.api.getById(id);
    }

    getDadosForm(){

        this.api.getConvenio().subscribe(
            convenio => this.state.convenio.collection = convenio
        );

        this.api.getPaciente().subscribe(
            paciente => this.state.paciente.collection = paciente
        );

        this.api.gePostoColeta().subscribe(
            postoColeta => this.state.postoColeta.collection = postoColeta
        );

        this.api.getMedico().subscribe(
            medico => this.state.medico.collection = medico
        );

        this.api.getExame().subscribe(
            exame => this.state.exame.collection = exame
        );

    }

    addOrderService(orderService: OrderService): void {

        this.state.orderService.add(orderService);

        this.api.create(orderService)
            .subscribe(
                orderService => {
                    this.notification.success('Ordem de Serviço cadastrado com sucesso!');
                },
                error => this.notification.error('Erro ao tentar cadastrar Ordem de Serviço!')
            );
    }

    removeOrderService(id: number): void {
        const todo = this.state.orderService.getById(id);
        

        this.api.remove(id).subscribe(
            () => {
                this.state.orderService.remove(id);
                this.notification.success('Ordem de Serviço removida!')
            },
            (error) => this.notification.error('Erro ao tentar cadastrar Ordem de Serviço!')
        );
    }

    updateOrderService(id: number, orderService: OrderService): void {

        this.state.orderService.updateById(id, orderService);

        this.api.update(id, orderService)
        .subscribe(
            () => this.notification.success(`Ordem de Serviço atualizada com sucesso!`),
            (error) => this.notification.error('Erro ao tentar atualizar Ordem de Serviço!')
        );
    }

}