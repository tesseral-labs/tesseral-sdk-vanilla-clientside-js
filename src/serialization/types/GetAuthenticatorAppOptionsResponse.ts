/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const GetAuthenticatorAppOptionsResponse: core.serialization.ObjectSchema<
    serializers.GetAuthenticatorAppOptionsResponse.Raw,
    Tesseral.GetAuthenticatorAppOptionsResponse
> = core.serialization.object({
    otpauthUri: core.serialization.string().optional(),
});

export declare namespace GetAuthenticatorAppOptionsResponse {
    export interface Raw {
        otpauthUri?: string | null;
    }
}
