import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskResolver } from './tasks/task/task.resolver';
import { TaskService } from './tasks/task/task.service';
import { GraphqlModule } from './graphql/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Module({
  imports: [GraphqlModule, TypeOrmModule.forFeature([Task])],
  controllers: [AppController],
  providers: [AppService, TaskResolver, TaskService],
})
export class AppModule {}
