import { Body, Controller ,Get, HttpCode, Param, ParseIntPipe, Post, Sse} from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {

    constructor (private chat_s:ChatService){}

    @Get()
    msg_length(){
        return this.chat_s.msg.length;
    }

    @Get(':line')
    get_message(@Param('line', ParseIntPipe) l:number){
        return this.chat_s.get_line(l);
    }

    @Post()
    @HttpCode(204)
    set_message(@Body('message') msg:string){
        return this.chat_s.add_line(msg);
    }

    @Sse('sse')
    wait_event(){
        return this.chat_s.create_connection();
    }
}
