import { Column, PrimaryGeneratedColumn } from "typeorm";

export class TabTiposMovimentacao {
    
    @PrimaryGeneratedColumn('increment')
    id_movimentacao: number;

    @Column({ type: 'text' })
    descricao: string;
    
    @Column({ type: 'text' })
    classificacao: string;
    
    @Column({type: 'boolean'})
    tipo: boolean;
}
