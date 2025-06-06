/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Tesseral from "../../../../../api/index";
import * as core from "../../../../../core";

export const RegisterPasskeyRequest: core.serialization.Schema<
    serializers.RegisterPasskeyRequest.Raw,
    Tesseral.RegisterPasskeyRequest
> = core.serialization.object({
    attestationObject: core.serialization.string().optional(),
    rpId: core.serialization.string().optional(),
});

export declare namespace RegisterPasskeyRequest {
    export interface Raw {
        attestationObject?: string | null;
        rpId?: string | null;
    }
}
