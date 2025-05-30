/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { Role } from "./Role";

export const GetRoleResponse: core.serialization.ObjectSchema<
    serializers.GetRoleResponse.Raw,
    Tesseral.GetRoleResponse
> = core.serialization.object({
    role: Role.optional(),
});

export declare namespace GetRoleResponse {
    export interface Raw {
        role?: Role.Raw | null;
    }
}
