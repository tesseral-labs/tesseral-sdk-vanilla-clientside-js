/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Tesseral from "../../api/index";
import * as core from "../../core";
import { SwitchableOrganization } from "./SwitchableOrganization";

export const ListSwitchableOrganizationsResponse: core.serialization.ObjectSchema<
    serializers.ListSwitchableOrganizationsResponse.Raw,
    Tesseral.ListSwitchableOrganizationsResponse
> = core.serialization.object({
    switchableOrganizations: core.serialization.list(SwitchableOrganization).optional(),
});

export declare namespace ListSwitchableOrganizationsResponse {
    export interface Raw {
        switchableOrganizations?: SwitchableOrganization.Raw[] | null;
    }
}
