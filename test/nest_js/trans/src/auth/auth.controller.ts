import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

export const Redirect_URI = `http://localhost/auth/get_jwt`;

@Controller('auth')
export class AuthController {
    private user_redirect_url:string;

    constructor(
        private readonly authService:AuthService,
        private readonly configService:ConfigService){
            const data = new URLSearchParams();
            data.append('client_id',    this.configService.get<string>('OAUTH_UID'));
            data.append('redirect_uri', Redirect_URI);
            data.append('response_type', 'code');
            this.user_redirect_url = this.configService.get<string>('USER_REDIRECT_ENDPOINT') + '?' + data.toString();
        }

    @Get('login_by_42')
    @Redirect()
    login_by_42_account(){
        return {
            url: this.user_redirect_url,
            statusCode: 302
        };
    }

    @Get('get_jwt')
    async get_jwt(@Query('code')authorization_code: string):Promise<string>{
        const user_data = await this.authService.get_userdata(authorization_code);
        console.log(user_data);
        return `you're name is ${user_data['usual_full_name']}`;
    }

}
