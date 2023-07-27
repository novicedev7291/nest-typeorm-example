import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Project } from 'src/project.entity';

@Injectable()
export class ProjectService {
  constructor(@Inject("project-repo") private projectRepo: Repository<Project>) {}

  getAll(): Promise<Project[]> {
    return this.projectRepo.find();
  }
}
