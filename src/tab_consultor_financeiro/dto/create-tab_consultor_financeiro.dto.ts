export class CreateTabConsultorFinanceiroDto {

    usuario: string;
    nome_consultor_financeiro: string;
    email: string;
    telefone: string;
    celular: string;
    senha: string;
    salt: string;
    hash: string;
    active: boolean;
    nivel: number;
    data_criacao: Date;
    data_atualizacao: Date;
    usuario_criacao: string;
    usuario_atualizacao: string;
}
