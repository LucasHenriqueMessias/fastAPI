import { CanActivate, ExecutionContext, Injectable, SetMetadata, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';


@Injectable()
export class AuthGuard implements CanActivate {
constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private reflector: Reflector
) {}


    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass()
        ]);	
        
        if(isPublic){
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if(!token){
            throw new UnauthorizedException('Token aaaaa encontrado');
        }

        try{
            const payload = await this.jwtService.verifyAsync(token, {
                secret: '$2b$10$YhkLR0gjroEtpcrkv81ueOjIwCZqA7dFpXVVg5yby67lPPr6t1ncK'
            }
            );
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException('Token inválido');
        }
return true;
    }
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token: undefined;
    }
}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);