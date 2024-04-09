import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common"
import { Role, ROLES_KEY } from "./roles.decorators"
import { AuthGuard } from "src/infra/providers/auth-guard.provider"
import { RolesGuard } from "src/infra/providers/roles-guard.provider"



export function Auth(...roles: Role[]) {

    return applyDecorators(
        SetMetadata(ROLES_KEY, roles),
        UseGuards(AuthGuard, RolesGuard)
    )
}