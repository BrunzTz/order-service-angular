import { Convenio } from "./convenio";
import { Exame } from "./exame";
import { Medico } from "./medico";
import { Paciente } from "./paciente";
import { PostoColeta } from "./posto-coleta";

export interface OrderService {
    id: number,
    date: Date | number,
    paciente: Paciente,
    convenio: Convenio,
    posto_coleta: PostoColeta,
    medico: Medico,
    exame: Exame
}