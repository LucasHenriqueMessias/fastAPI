import { TabCnaeSecundario } from "src/tab_cnae_secundario/entities/tab_cnae_secundario.entity";

export class CreateTabLojaDto {

    uf: string;
    cep: number;
    cnpj: string;
    pais: null;
    email: null;
    porte: string;
    bairro: string;
    numero: string;
    ddd_fax: string;
    municipio: string;
    logradouro: string;
    cnae_fiscal: number;
    codigo_pais: null;
    complemento: string;
    codigo_porte: number;
    razao_social: string;
    nome_fantasia: string;
    capital_social: number;
    ddd_telefone_1: string;
    ddd_telefone_2: string;
    opcao_pelo_mei: boolean;
    descricao_porte: string;
    codigo_municipio: number;
    natureza_juridica: string;
    situacao_especial: string;
    opcao_pelo_simples: boolean;
    situacao_cadastral?: number;
    data_opcao_pelo_mei?: null;
    data_exclusao_do_mei?: null;
    cnae_fiscal_descricao: string;
    codigo_municipio_ibge: number;
    data_inicio_atividade: string;
    data_situacao_especial?: null;
    data_opcao_pelo_simples: string;
    data_situacao_cadastral: string;
    nome_cidade_no_exterior: string;
    codigo_natureza_juridica: number;
    data_exclusao_do_simples: null;
    motivo_situacao_cadastral: number;
    ente_federativo_responsavel: string;
    identificador_matriz_filial: number;
    qualificacao_do_responsavel: number;
    descricao_situacao_cadastral: string;
    descricao_tipo_de_logradouro: string;
    descricao_motivo_situacao_cadastral: string;
    descricao_identificador_matriz_filial: string
    renda_bruta_inicial?: number;
    renda_bruta_atual?: number;
    renda_liquida_inicial?: number;
    renda_liquida_atual?: number;
    data_criacao?: Date;
    data_alteracao?: Date;
    cnae_secundario: TabCnaeSecundario;
    
}
