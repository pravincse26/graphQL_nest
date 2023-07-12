import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { Task } from 'src/task.entity';
import { TaskResolver } from 'src/tasks/task/task.resolver';
import { TaskService } from 'src/tasks/task/task.service';
import { ApolloDriver } from '@nestjs/apollo';
//import * as path from 'path';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'kit#July~2022',
      database: 'test',
      entities: [Task],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      //autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      debug: true, // Set to true for debugging (optional)
      playground: true, // Set to true to enable the GraphQL Playground (optional)
      driver: ApolloDriver,
    }),
    TypeOrmModule.forFeature([Task]),
  ],
  providers: [TaskResolver, TaskService],
})
export class GraphqlModule {}
