import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

    @Column({ type: 'boolean', default: true })
    active: boolean;
}
