export class CreateTabRoiDto {

    id: number; //padrão
    cnpj: string; //padrão
    usuario: string; //padrão
    data_criacao: Date; //padrão
    maquina_cartao: string;
    emprestimos_financiamentos: string;
    telefonia: string;
    contabilidade: string;
    taxas_bancarias: string;
    taxas_administrativas: string; //extra
    investimentos: string;
    juridico: string;
    mensalidade_roi: string; //indicador ROI
    ferias: string; //indicador intangível
    aumento_equipe: string; //indicador intangível

}
