import { Login } from "src/login/entities/login.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tab_loja'})
export class TabLoja {
    
    @PrimaryGeneratedColumn('increment')
    id_loja: number;

    @OneToMany(() => Login, (login) => login.loja) 
    login: Login[];
    
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

    @Column({ type: 'text'})
        telefone_1: string;

    @Column({ type: 'text'})
        email_1: string;

    @Column({ type: 'text', nullable: true})
        linkedin_1: string;

    @Column({ type: 'text', nullable: true})
        instagram_1: string;

    @Column({ type: 'text', nullable: true})
        facebook_1: string;

    @Column({ type: 'text', nullable: true})
        tiktok_1: string;
    
    @Column({ type: 'text', nullable: true })
        nome_2: string;

    @Column({ type: 'text', nullable: true })
        cpf_2: string;

    @Column({ type: 'text', nullable: true })
        telefone_2: string;

    @Column({ type: 'text', nullable: true }) 
        email_2: string;

    @Column({ type: 'text', nullable: true }) 
        linkedin_2: string;
        
    @Column({ type: 'text', nullable: true }) 
        instagram_2: string;
    
    @Column({ type: 'text', nullable: true }) 
        facebook_2: string;
    
    @Column({ type: 'text', nullable: true }) 
        tiktok_2: string;
        
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
        
    @CreateDateColumn({ type: 'timestamptz' })
        data_criacao: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
        data_alteracao: Date;

    }
