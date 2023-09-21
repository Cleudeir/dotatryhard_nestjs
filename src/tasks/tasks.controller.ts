import { Controller, Get } from '@nestjs/common';
import { TaskService } from './shared/task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  getHello(): string {
    return this.taskService.getHello();
  }
}
