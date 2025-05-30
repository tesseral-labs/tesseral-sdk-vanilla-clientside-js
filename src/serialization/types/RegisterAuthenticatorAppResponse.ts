/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const RegisterAuthenticatorAppResponse: core.serialization.ObjectSchema<
    serializers.RegisterAuthenticatorAppResponse.Raw,
    Tesseral.RegisterAuthenticatorAppResponse
> = core.serialization.object({
    recoveryCodes: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace RegisterAuthenticatorAppResponse {
    export interface Raw {
        recoveryCodes?: string[] | null;
    }
}
