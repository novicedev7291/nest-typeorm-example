import { ManyToOne, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Project } from 'src/project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
      name: "created_by"
  })
  createdBy: string;

  @Column({
      name: "created_at"
  })
  createdAt: Date;

  @Column({
      name: "updated_by" 
  })
  updatedBy: string;

  @Column({
      name: "udpated_at"    
  })
  updatedAt: Date;
  @Column()
  version: number;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
