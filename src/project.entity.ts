import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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

  @OneToMany(() => Task, (tasks) => tasks.project)
  tasks: Task[];
}
