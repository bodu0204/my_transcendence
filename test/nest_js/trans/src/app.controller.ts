import { Body, Controller, Get, HttpCode, MessageEvent, Post, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, interval, map } from 'rxjs';
import { ChatService } from './chat/chat.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private chatService: ChatService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post()
  @HttpCode(204)
  echo(@Body() msg:object){
    console.log(msg);
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return this.chatService.create_connection();
  }

}
