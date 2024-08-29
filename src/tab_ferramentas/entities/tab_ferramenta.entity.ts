import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tab_ferramenta' })
export class TabFerramenta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nome_ferramenta: string;

  @Column({ type: 'timestamptz' })
  data_criacao: Date;

  @Column({ type: 'timestamptz' })
  data_atualizacao: Date;

  @Column({ type: 'text' })
  usuario_criacao: string;

  @Column({ type: 'text' })
  diretorio: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'text' })
  tipo: string;

  @Column({ type: 'text' })
  url: string;
}