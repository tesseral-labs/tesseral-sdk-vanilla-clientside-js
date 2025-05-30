/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { Role } from "./Role";

export const CreateRoleResponse: core.serialization.ObjectSchema<
    serializers.CreateRoleResponse.Raw,
    Tesseral.CreateRoleResponse
> = core.serialization.object({
    role: Role.optional(),
});

export declare namespace CreateRoleResponse {
    export interface Raw {
        role?: Role.Raw | null;
    }
}
