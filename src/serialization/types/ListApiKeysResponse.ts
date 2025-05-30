/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { ApiKey } from "./ApiKey";

export const ListApiKeysResponse: core.serialization.ObjectSchema<
    serializers.ListApiKeysResponse.Raw,
    Tesseral.ListApiKeysResponse
> = core.serialization.object({
    apiKeys: core.serialization.list(ApiKey).optional(),
    nextPageToken: core.serialization.string().optional(),
});

export declare namespace ListApiKeysResponse {
    export interface Raw {
        apiKeys?: ApiKey.Raw[] | null;
        nextPageToken?: string | null;
    }
}
