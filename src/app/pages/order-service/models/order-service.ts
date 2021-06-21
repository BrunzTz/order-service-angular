import { Convenio } from "./convenio";
import { Exame } from "./exame";
import { Medico } from "./medico";
import { Paciente } from "./paciente";
import { PostoColeta } from "./posto-coleta";

export interface OrderService {
    id: number,
    date: Date,
    paciente: Paciente,
    convenio: Convenio,
    postoColeta: PostoColeta,
    medico: Medico,
    exame: Exame
}