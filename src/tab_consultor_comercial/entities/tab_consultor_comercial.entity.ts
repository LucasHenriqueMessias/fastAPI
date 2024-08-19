import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tab_consultor_comercial' })
export class TabConsultorComercial {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ unique: true, type: 'text' })
    nome_consultor: string;
    @Column({ unique: true, type: 'text' })
    login: string;
    @Column({ type: 'int' })
    clientes_totais: number;
    @Column({ type: 'int' })
    clientes_atuais: number;
    @Column({ type: 'float' })
    ticket_medio: number;
    @Column({ type: 'int' })
    visitas_mes: number;
    @Column({ type: 'int' })
    reunioes_mes: number;
    @Column({ type: 'float' })
    meta_mes: number;
}
