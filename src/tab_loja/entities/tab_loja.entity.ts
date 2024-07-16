import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tab_loja'})
export class TabLoja {
    
    @PrimaryGeneratedColumn('increment')
    id_loja: number
    
    @Column({ type: 'text' })
        razao_social: string;
        
    @Column({ type: 'text' })
        nome_fantasia: string;
    
    @Column({type: 'text'})
        cnpj_me: string;
    
    @Column({ type: 'text' })
        nome_1: string;

    @Column({ type: 'text' })
        cpf_1: string;
    
    @Column({ type: 'text', nullable: true })
        nome_2: string;

    @Column({ type: 'text', nullable: true })
        cpf_2: string;

    @Column({ type: 'text' })
        logradouro: string;
    
    @Column({ type: 'text' })
        bairro: string;    
    
    @Column({ type: 'text' })
        cidade: string;

    @Column({ type: 'text' })
        uf: string;

    @Column({ type: 'text' })
        cep: string;

    @Column({ type: 'float' })
        renda_bruta_inicial: number;

    @Column({ type: 'float' })
        renda_bruta_atual: number;

    @Column({ type: 'float' })
        renda_liquida_inicial: number;

    @Column({ type: 'float' })
        renda_liquida_atual: number;
        
    @CreateDateColumn( {type: 'timestamptz'})
        data_criacao: Date;

    @UpdateDateColumn({type: 'timestamptz'})
        data_alteracao: Date;

    }
