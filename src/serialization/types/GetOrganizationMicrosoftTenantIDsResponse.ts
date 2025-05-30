/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { OrganizationMicrosoftTenantIDs } from "./OrganizationMicrosoftTenantIDs";

export const GetOrganizationMicrosoftTenantIDsResponse: core.serialization.ObjectSchema<
    serializers.GetOrganizationMicrosoftTenantIDsResponse.Raw,
    Tesseral.GetOrganizationMicrosoftTenantIDsResponse
> = core.serialization.object({
    organizationMicrosoftTenantIds: OrganizationMicrosoftTenantIDs.optional(),
});

export declare namespace GetOrganizationMicrosoftTenantIDsResponse {
    export interface Raw {
        organizationMicrosoftTenantIds?: OrganizationMicrosoftTenantIDs.Raw | null;
    }
}
