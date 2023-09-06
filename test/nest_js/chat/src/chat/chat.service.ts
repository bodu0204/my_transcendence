import { BadRequestException, Injectable, MessageEvent } from '@nestjs/common';
import { Subject, Observable } from 'rxjs'


@Injectable()
export class ChatService {
    private send :Subject<null>;
    public msg :string[];
    
    
    constructor(){
        this.send = new Subject();
        this.msg = [];
    }
    
    create_connection(): Observable<MessageEvent>{
        const target :Subject<MessageEvent> = new Subject();
        this.send.subscribe((()=>{target.next({data:{line: this.msg.length}});}).bind(this));
        return target;
    }

    get_line(line: number): string{
        console.log('this is get_line');
        if (line >= this.msg.length)
            throw new BadRequestException();
        return this.msg[line];
    }

    add_line(message: string): void{
        this.msg.push(message);
        this.send.next(null);
        return ;
    }
}
