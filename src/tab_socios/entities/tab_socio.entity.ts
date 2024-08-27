import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tab_socios'})
export class TabSocio {
    @PrimaryGeneratedColumn('increment')
    ID_Socio: number;

    @Column({type: 'text'})
    cnpj_empresa: string;
    
    @Column({type: 'text', nullable: true})
    pais: string;
    
    @Column({type: 'text'})
    nome_socio: string;
    
    @Column({type: 'text', nullable: true})
    codigo_pais: string;
    
    @Column({type: 'text'})
    faixa_etaria: string;
    
    @Column({type: 'text'})
    cnpj_cpf_do_socio: string;
    
    @Column({type: 'text'})
    qualificacao_socio: string;
    
    @Column({type: 'int'})
    codigo_faixa_etaria: number;
    
    @Column({type: 'timestamptz'})
    data_entrada_sociedade: Date;
    
    @Column({type: 'int'})
    identificador_de_socio: number;
    
    @Column({type: 'text'})
    cpf_representante_legal: string;
    
    @Column({type: 'text'})
    nome_representante_legal: string;
    
    @Column({type: 'int'})
    codigo_qualificacao_socio: number;
    
    @Column({type: 'text'})
    qualificacao_representante_legal: string;

    @Column({type: 'int'})
    codigo_qualificacao_representante_legal: number;

    @Column({type: 'text', nullable: true})
    disc: string;

    @Column({type: 'text' , nullable: true})
    serdip: string;

    @Column({type: 'text', nullable: true})
    eneagrama: string;

    @Column({type: 'text', nullable: true})
    hobbies: string;

    @Column({type: 'text',  nullable: true})
    relatorio_prospeccao: string;


}
