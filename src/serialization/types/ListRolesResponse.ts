/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { Role } from "./Role";

export const ListRolesResponse: core.serialization.ObjectSchema<
    serializers.ListRolesResponse.Raw,
    Tesseral.ListRolesResponse
> = core.serialization.object({
    roles: core.serialization.list(Role).optional(),
    nextPageToken: core.serialization.string().optional(),
});

export declare namespace ListRolesResponse {
    export interface Raw {
        roles?: Role.Raw[] | null;
        nextPageToken?: string | null;
    }
}
