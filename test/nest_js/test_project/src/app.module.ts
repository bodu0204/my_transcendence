import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, some_class } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

const some_obj = {
  value: 42;
}

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [AppService,{
    provide: some_class,
    useClass: some_obj,
  }],
})
export class AppModule {}
