import { Controller, Get } from '@nestjs/common';

import { ProjectService } from 'src/project.service';
import { ProjectResponse } from 'src/project.response';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/projects')
  async getProjects(): Promise<ProjectResponse[]> {
    let projects = await this.projectService.getAll();

    let projectResponses = new Array<ProjectResponse>();
    projects.forEach((project) =>
      projectResponses.push({
        id: project.id,
        name: project.name,
        version: project.version,
      }),
    );

    return projectResponses;
  }
}
