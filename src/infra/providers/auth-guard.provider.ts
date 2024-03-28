import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractHeaderTokenFromHeader(request);
        
        if(!token) throw new UnauthorizedException();
        
        try {
           const payload =  await this.jwtService.verifyAsync(token, {
                secret: 'cc9132d2ea1b006271fc2bed432a9da4'
            })

            request['user'] = payload;
            return true;
            
        } catch (error) {
            throw new UnauthorizedException();
        }

    }

    private extractHeaderTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;
    }
}