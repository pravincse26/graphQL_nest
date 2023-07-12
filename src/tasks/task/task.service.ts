import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id: id });

    // findOne(id);
  }

  async create(title: string, description: string): Promise<Task> {
    const task = this.taskRepository.create({ title, description });
    return this.taskRepository.save(task);
  }

  async update(id: number, title: string, description: string): Promise<Task> {
    await this.taskRepository.update(id, { title, description });
    return this.taskRepository.findOneBy({ id: id });
  }

  async delete(id: number): Promise<boolean> {
    const deleteResult = await this.taskRepository.delete(id);
    return deleteResult.affected > 0;
  }
}
