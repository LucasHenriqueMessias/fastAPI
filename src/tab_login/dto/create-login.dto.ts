import { TabLoja } from "src/tab_cliente/entities/tab_loja.entity";

export class CreateLoginDto {

    
user: string;
salt: string;
hash: string;
loja: TabLoja;
active: boolean;

}
