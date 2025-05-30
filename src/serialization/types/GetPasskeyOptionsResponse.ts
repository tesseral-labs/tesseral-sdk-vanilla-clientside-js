/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const GetPasskeyOptionsResponse: core.serialization.ObjectSchema<
    serializers.GetPasskeyOptionsResponse.Raw,
    Tesseral.GetPasskeyOptionsResponse
> = core.serialization.object({
    rpId: core.serialization.string().optional(),
    rpName: core.serialization.string().optional(),
    userId: core.serialization.string().optional(),
    userDisplayName: core.serialization.string().optional(),
});

export declare namespace GetPasskeyOptionsResponse {
    export interface Raw {
        rpId?: string | null;
        rpName?: string | null;
        userId?: string | null;
        userDisplayName?: string | null;
    }
}
