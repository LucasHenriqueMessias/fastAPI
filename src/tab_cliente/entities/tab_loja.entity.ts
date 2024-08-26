import { Login } from "src/tab_login/entities/login.entity";
import { TabCnaeSecundario } from "src/tab_cnae_secundario/entities/tab_cnae_secundario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tab_loja' })
export class TabLoja {

    @PrimaryGeneratedColumn('increment')
    id_loja: number;

    @OneToMany(() => Login, (login) => login.loja)
    login: Login[];

    @Column({ type: 'text' })
    uf: string;

    @Column({ type: 'int' })
    cep: number;

    @Column({ type: 'text' })
    cnpj: string;

    @Column({ type: 'text', nullable: true })
    pais: string;

    @Column({ type: 'text', nullable: true })
    email: string;

    @Column({ type: 'text' })
    porte: string;

    @Column({ type: 'text' })
    bairro: string;

    @Column({ type: 'text' })
    numero: string;

    @Column({ type: 'text' })
    ddd_fax: string;

    @Column({ type: 'text' })
    municipio: string;

    @Column({ type: 'text' })
    logradouro: string;

    @Column({ type: 'int' })
    cnae_fiscal: number;

    @Column({ type: 'int', nullable: true })
    codigo_pais: number;

    @Column({ type: 'text' })
    complemento: string;

    @Column({ type: 'int' })
    codigo_porte: number;

    @Column({ type: 'text' })
    razao_social: string;

    @Column({ type: 'text' })
    nome_fantasia: string;

    @Column({ type: 'float', nullable: true })
    capital_social: number;

    @Column({ type: 'text' })
    ddd_telefone_1: string;

    @Column({ type: 'text' })
    ddd_telefone_2: string;

    @Column({ type: 'bool' })
    opcao_pelo_mei: boolean;

    @Column({ type: 'text' })
    descricao_porte: string;

    @Column({ type: 'int' })
    codigo_municipio: number;

    @Column({ type: 'text' })
    natureza_juridica: string;

    @Column({ type: 'text' })
    situacao_especial: string;

    @Column({ type: 'bool' })
    opcao_pelo_simples: boolean;

    @Column({ type: 'int' })
    situacao_cadastral?: number;

    @Column({ type: 'timestamptz', nullable: true })
    data_opcao_pelo_mei?: Date;

    @Column({ type: 'timestamptz', nullable: true })
    data_exclusao_do_mei?: Date;

    @Column({ type: 'text' })
    cnae_fiscal_descricao: string;

    @Column({ type: 'int' })
    codigo_municipio_ibge: number;
    
    @Column({ type: 'timestamptz' })
    data_inicio_atividade: Date;

    @Column({ type: 'timestamptz', nullable: true })
    data_situacao_especial?: Date;

    @Column({ type: 'timestamptz' })
    data_opcao_pelo_simples: Date;

    @Column({ type: 'timestamptz' })
    data_situacao_cadastral: Date;

    @Column({ type: 'text' })
    nome_cidade_no_exterior: string;

    @Column({ type: 'int' })
    codigo_natureza_juridica: number;

    @Column({ type: 'timestamptz', nullable: true })
    data_exclusao_do_simples: Date;

    @Column({ type: 'int' })
    motivo_situacao_cadastral: number;

    @Column({ type: 'text' })
    ente_federativo_responsavel: string;

    @Column({ type: 'int' })
    identificador_matriz_filial: number;

    @Column({ type: 'int' })
    qualificacao_do_responsavel: number;

    @Column({ type: 'text' })
    descricao_situacao_cadastral: string;

    @Column({ type: 'text' })
    descricao_tipo_de_logradouro: string;

    @Column({ type: 'text' })
    descricao_motivo_situacao_cadastral: string;

    @Column({ type: 'text' })
    descricao_identificador_matriz_filial: string;

    @Column({ type: 'float', nullable: true })
    renda_bruta_inicial: number;

    @Column({ type: 'float', nullable: true })
    renda_bruta_atual: number;

    @Column({ type: 'float', nullable: true })
    renda_liquida_inicial: number;

    @Column({ type: 'float', nullable: true })
    renda_liquida_atual: number;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    data_alteracao: Date;



}
