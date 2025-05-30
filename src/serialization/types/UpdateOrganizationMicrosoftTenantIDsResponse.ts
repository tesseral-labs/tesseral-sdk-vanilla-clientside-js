/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { OrganizationMicrosoftTenantIDs } from "./OrganizationMicrosoftTenantIDs";

export const UpdateOrganizationMicrosoftTenantIDsResponse: core.serialization.ObjectSchema<
    serializers.UpdateOrganizationMicrosoftTenantIDsResponse.Raw,
    Tesseral.UpdateOrganizationMicrosoftTenantIDsResponse
> = core.serialization.object({
    organizationMicrosoftTenantIds: OrganizationMicrosoftTenantIDs.optional(),
});

export declare namespace UpdateOrganizationMicrosoftTenantIDsResponse {
    export interface Raw {
        organizationMicrosoftTenantIds?: OrganizationMicrosoftTenantIDs.Raw | null;
    }
}
