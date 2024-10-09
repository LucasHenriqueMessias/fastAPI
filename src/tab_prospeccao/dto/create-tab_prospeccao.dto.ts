export class CreateTabProspeccaoDto {

    id: number;
    data: Date;
    consultor_comercial: string;
    empresa: string;
    cnpj_cpf: string;
    fundacao: string;
    localizacao: string;
    telefone: string;
    responsavel: string;
    email: string;
    indicacao: boolean; //se foi indicado, 1, senão, 0
    indicacao_nome: string; //nome de quem indicou
    bni: boolean; //se for indicação por bni, senão, 0
    parceiro_bni_grupo: string; //grupo do bni 

}
