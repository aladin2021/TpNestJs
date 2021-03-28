import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { testModule } from './testModule';
import { Test2Module } from './test2/test2.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { GenericsModule } from './generics/generics.module';
import { TodoServiceModule } from './todo-service/todo-service.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [testModule, Test2Module, SharedModuleModule, GenericsModule, TodoServiceModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
