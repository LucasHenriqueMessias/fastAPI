import { TabLoja } from 'src/tab_cliente/entities/tab_loja.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'tab_login' })
export class Login {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ unique: true, type: 'text' })
    user: string;
    @Column({ type: 'text' })
    salt: string;

    @Column({ type: 'text' })
    hash: string;

    @ManyToOne(() => TabLoja, (loja) => loja.id_loja) 
    loja: TabLoja;
    
    @Column({ type: 'boolean', default: true })
    active: boolean;
}