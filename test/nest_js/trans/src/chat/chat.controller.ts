import { Body, Controller ,Get, Header, HttpCode, MessageEvent, Param, ParseIntPipe, Post, Res, Sse} from '@nestjs/common';
import { ChatService } from './chat.service';
import { join } from 'path';
import { readFileSync } from 'fs';
import { Response } from 'express';
import { Observable } from 'rxjs';

@Controller('chat')
export class ChatController {
    constructor (private chat_s:ChatService){}

    @Get('index')
    index(@Res() response: Response) {
      response
        .type('text/html')
        .send(readFileSync(join(__dirname, '../../html/index.html')).toString());
    }

    @Get()
    msg_length(){
        return this.chat_s.msg.length;
    }

    @Get(':line')
    get_message(@Param('line', ParseIntPipe) l:number){
        return {message: this.chat_s.get_line(l)};
    }

    @Post()
    @HttpCode(204)
    set_message(@Body('message') msg:string){
        this.chat_s.add_line(msg);
    }
  
}
