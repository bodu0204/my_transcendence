import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redirect_URI } from './auth.controller';

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService
    ){}

    private async get_sccess_token(authorization_code: string):Promise<string>{

        const data = new URLSearchParams();
        data.append('grant_type',   'authorization_code');
        data.append('client_id',    this.configService.get<string>('OAUTH_UID'));
        data.append('client_secret',    this.configService.get<string>('OAUTH_SECRET'));
        data.append('code',   authorization_code);
        data.append('redirect_uri',   Redirect_URI);
        const Init :RequestInit = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data.toString()
        };

        return await fetch(this.configService.get<string>('ACCESS_TOKEN_ENDPOINT'), Init)
            .then((data)=>data.json())
            .then((data)=>{if (typeof data?.access_token === 'string'){return data.access_token;} console.log(data); throw new InternalServerErrorException();});
    }

    async get_userdata(authorization_code: string):Promise<object>{
        const sccess_token = await this.get_sccess_token(authorization_code);
        const Init = {
            method: "GET",
            headers: {
                Authorization: "bearer " + sccess_token,
            },
          };

        return fetch(this.configService.get<string>('USER_DATA_ENDPOINT'), Init)
        .then((data)=>data.json())
        .then((data)=>{if (typeof data === 'object'){return data;} throw new InternalServerErrorException();});;
    }
}
