import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TabSinalAmarelo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    cliente: string;

    @Column()
    status: string;

    @Column()
    data_criacao: Date;
}