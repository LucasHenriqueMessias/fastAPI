import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TabRoi {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    cnpj: string;

    @Column({ type: 'varchar' })
    usuario: string;

    @Column({ type: 'timestamptz' })
    data_criacao: Date;

    @Column({ type: 'varchar' })
    maquina_cartao: string;

    @Column({ type: 'varchar' })
    emprestimos_financiamentos: string;

    @Column({ type: 'varchar' })
    telefonia: string;

    @Column({ type: 'varchar' })
    contabilidade: string;

    @Column({ type: 'varchar' })
    taxas_bancarias: string;

    @Column({ type: 'varchar' })
    taxas_administrativas: string;

    @Column({ type: 'varchar' })
    investimentos: string;

    @Column({ type: 'varchar' })
    juridico: string;

    @Column({ type: 'varchar' })
    mensalidade_roi: string;

    @Column({ type: 'varchar' })
    ferias: string;

    @Column({ type: 'varchar' })
    aumento_equipe: string;
}