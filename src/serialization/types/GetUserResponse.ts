/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { User } from "./User";

export const GetUserResponse: core.serialization.ObjectSchema<
    serializers.GetUserResponse.Raw,
    Tesseral.GetUserResponse
> = core.serialization.object({
    user: User.optional(),
});

export declare namespace GetUserResponse {
    export interface Raw {
        user?: User.Raw | null;
    }
}
