import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from 'src/task.entity';
import { TaskService } from './task.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  async tasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Query(() => Task)
  async task(@Args('id') id: number): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Mutation(() => Task)
  async createTask(
    @Args('title') title: string,
    @Args('description') description: string,
  ): Promise<Task> {
    return this.taskService.create(title, description);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: number,
    @Args('title') title: string,
    @Args('description') description: string,
  ): Promise<Task> {
    return this.taskService.update(id, title, description);
  }

  @Mutation(() => Boolean)
  async deleteTask(@Args('id') id: number): Promise<boolean> {
    return this.taskService.delete(id);
  }
}
