import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TabContrato {

    @PrimaryGeneratedColumn()
    id: number; //padrão

    @Column()
    data_criacao: Date; //padrão

    @Column()
    usuario: string; //padrão

    @Column()
    cliente: string; //padrão

    @Column()
    cnpj: string;

    @Column()
    tipo_documento: string; //contrato, recisão...

    @Column()
    contrato_id: number; //Contrato salvo pelo tab_upload, id declarada aqui
}