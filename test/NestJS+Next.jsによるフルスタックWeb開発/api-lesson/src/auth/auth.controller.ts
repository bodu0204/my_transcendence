import { Controller,
	Post,
	Body,
	HttpCode,
	HttpStatus,
	Res,
	Req,
	Get
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Csrf, Msg } from './interfaces/auth.interface';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('/csrf')
	getCsrfToken(@Req() req: Request): Csrf {
	  return { csrfToken: req.csrfToken() };
	}

	@Post('signup')
	// 送られてくるメッセージボディの中から必要な情報を抽出するための@Body
	signUp(@Body() dto: AuthDto): Promise<Msg> {
		return this.authService.signUp(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post('login')
	// return値をjson形式にすることとcookieの設定を同時に行えるようにするためのpassthroughを設定
	async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response): Promise<Msg> {
		const jwt = await this.authService.login(dto);
		res.cookie('access_token', jwt.accessToken, {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
			path: '/',
		});
		return {
			message: 'ok',
		};
	}

	@HttpCode(HttpStatus.OK)
	@Post('logout')
	logout(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response): Msg {
		res.cookie('access_token', '', {
			httpOnly: true,
			secure: true,
			sameSite: 'none',
			path: '/',
		});
		return {
			message: 'ok',
		};
	}
}
