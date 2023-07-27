import { Module } from '@nestjs/common';
import { DatabaseModule } from 'database.module';

import { projectProviders } from 'src/project.provider';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [DatabaseModule],
  exports: [...projectProviders],
  controllers: [ProjectController],
  providers: [ProjectService,...projectProviders],
})
export class ProjectModule {}
