import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TabParceriaFast {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data_criacao: Date;

    @Column()
    usuario: string;

    @Column()
    parceiro: string;

    @Column()
    justificativa: string;

    @Column()
    status: string;

    @Column()
    resultado: string;
}