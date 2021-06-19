import { Convenio } from "./convenio";
import { Medico } from "./medico";
import { Paciente } from "./paciente";
import { PostoColeta } from "./posto-coleta";

export interface OrderServico {
    id: number,
    data: Date,
    paciente: Paciente,
    convenio: Convenio,
    postoColeta: PostoColeta,
    medico: Medico
}