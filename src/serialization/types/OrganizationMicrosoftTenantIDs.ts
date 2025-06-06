/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";

export const OrganizationMicrosoftTenantIDs: core.serialization.ObjectSchema<
    serializers.OrganizationMicrosoftTenantIDs.Raw,
    Tesseral.OrganizationMicrosoftTenantIDs
> = core.serialization.object({
    microsoftTenantIds: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace OrganizationMicrosoftTenantIDs {
    export interface Raw {
        microsoftTenantIds?: string[] | null;
    }
}
