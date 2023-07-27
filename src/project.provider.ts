import { DataSource } from 'typeorm';

import { Project } from 'src/project.entity';

export const projectProviders = [
  {
    inject: ['data-source'],
    useFactory: (ds: DataSource) => ds.getRepository(Project),
    provide: 'project-repo',
  },
];
