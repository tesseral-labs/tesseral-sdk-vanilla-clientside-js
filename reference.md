# Reference

<details><summary><code>client.<a href="/src/Client.ts">refresh</a>({ ...params }) -> Tesseral.RefreshResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.refresh();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.RefreshRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TesseralClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## ApiKeyRoleAssignments

<details><summary><code>client.apiKeyRoleAssignments.<a href="/src/api/resources/apiKeyRoleAssignments/client/Client.ts">listApiKeyRoleAssignments</a>({ ...params }) -> Tesseral.ListApiKeyRoleAssignmentsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeyRoleAssignments.listApiKeyRoleAssignments();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.ApiKeyRoleAssignmentsListApiKeyRoleAssignmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeyRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeyRoleAssignments.<a href="/src/api/resources/apiKeyRoleAssignments/client/Client.ts">createApiKeyRoleAssignment</a>({ ...params }) -> Tesseral.CreateApiKeyRoleAssignmentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeyRoleAssignments.createApiKeyRoleAssignment();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.CreateApiKeyRoleAssignmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeyRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeyRoleAssignments.<a href="/src/api/resources/apiKeyRoleAssignments/client/Client.ts">deleteApiKeyRoleAssignment</a>(id, { ...params }) -> Tesseral.DeleteApiKeyRoleAssignmentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeyRoleAssignments.deleteApiKeyRoleAssignment("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.ApiKeyRoleAssignmentsDeleteApiKeyRoleAssignmentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeyRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApiKeys

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">listApiKeys</a>({ ...params }) -> Tesseral.ListApiKeysResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List API Keys.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.listApiKeys();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.ApiKeysListApiKeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">createApiKey</a>({ ...params }) -> Tesseral.CreateApiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an API Key for an Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.createApiKey();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.CreateApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">getApiKey</a>(id) -> Tesseral.GetApiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.getApiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">deleteApiKey</a>(id) -> Tesseral.DeleteApiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.deleteApiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">updateApiKey</a>(id, { ...params }) -> Tesseral.UpdateApiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.updateApiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.UpdateApiKeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.apiKeys.<a href="/src/api/resources/apiKeys/client/Client.ts">revokeApiKey</a>(id) -> Tesseral.RevokeApiKeyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke an API Key.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apiKeys.revokeApiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Organizations

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganizationGoogleHostedDomains</a>({ ...params }) -> Tesseral.GetOrganizationGoogleHostedDomainsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganizationGoogleHostedDomains();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.OrganizationsGetOrganizationGoogleHostedDomainsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganizationGoogleHostedDomains</a>({ ...params }) -> Tesseral.UpdateOrganizationGoogleHostedDomainsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganizationGoogleHostedDomains({
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.OrganizationsUpdateOrganizationGoogleHostedDomainsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganizationMicrosoftTenantIDs</a>({ ...params }) -> Tesseral.GetOrganizationMicrosoftTenantIDsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganizationMicrosoftTenantIDs();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.OrganizationsGetOrganizationMicrosoftTenantIDsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganizationMicrosoftTenantIDs</a>({ ...params }) -> Tesseral.UpdateOrganizationMicrosoftTenantIDsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganizationMicrosoftTenantIDs({
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.OrganizationsUpdateOrganizationMicrosoftTenantIDsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getOrganization</a>() -> Tesseral.GetOrganizationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.getOrganization();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">updateOrganization</a>({ ...params }) -> Tesseral.UpdateOrganizationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.updateOrganization({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.Organization`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Me

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">whoami</a>() -> Tesseral.WhoamiResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.whoami();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">getAuthenticatorAppOptions</a>() -> Tesseral.GetAuthenticatorAppOptionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.getAuthenticatorAppOptions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">registerAuthenticatorApp</a>({ ...params }) -> Tesseral.RegisterAuthenticatorAppResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.registerAuthenticatorApp();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.RegisterAuthenticatorAppRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">listMyPasskeys</a>({ ...params }) -> Tesseral.ListMyPasskeysResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.listMyPasskeys();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.MeListMyPasskeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">getPasskeyOptions</a>() -> Tesseral.GetPasskeyOptionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.getPasskeyOptions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">registerPasskey</a>({ ...params }) -> Tesseral.RegisterPasskeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.registerPasskey();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.RegisterPasskeyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">deleteMyPasskey</a>(id) -> Tesseral.DeleteMyPasskeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.deleteMyPasskey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">setPassword</a>({ ...params }) -> Tesseral.SetPasswordResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets a user's password.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.setPassword();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.SetPasswordRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.me.<a href="/src/api/resources/me/client/Client.ts">listSwitchableOrganizations</a>() -> Tesseral.ListSwitchableOrganizationsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.me.listSwitchableOrganizations();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Me.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Projects

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">getProject</a>() -> Tesseral.GetProjectResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.getProject();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Roles

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">listRoles</a>({ ...params }) -> Tesseral.ListRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Roles.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.listRoles();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.RolesListRolesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">createRole</a>({ ...params }) -> Tesseral.CreateRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a Role.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.createRole({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.Role`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">getRole</a>(id) -> Tesseral.GetRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a Role.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.getRole("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">deleteRole</a>(id) -> Tesseral.DeleteRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Role.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.deleteRole("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.roles.<a href="/src/api/resources/roles/client/Client.ts">updateRole</a>(id, { ...params }) -> Tesseral.UpdateRoleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Role.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.roles.updateRole("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.Role`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SamlConnections

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">listSamlConnections</a>({ ...params }) -> Tesseral.ListSamlConnectionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.listSamlConnections();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.SamlConnectionsListSamlConnectionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">createSamlConnection</a>({ ...params }) -> Tesseral.CreateSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.createSamlConnection({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.SamlConnection`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">getSamlConnection</a>(id) -> Tesseral.GetSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.getSamlConnection("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">deleteSamlConnection</a>(id) -> Tesseral.DeleteSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.deleteSamlConnection("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.samlConnections.<a href="/src/api/resources/samlConnections/client/Client.ts">updateSamlConnection</a>(id, { ...params }) -> Tesseral.UpdateSamlConnectionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.samlConnections.updateSamlConnection("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.SamlConnection`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SamlConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ScimApiKeys

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">listScimapiKeys</a>({ ...params }) -> Tesseral.ListScimapiKeysResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.listScimapiKeys();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.ScimApiKeysListScimapiKeysRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">createScimapiKey</a>({ ...params }) -> Tesseral.CreateScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.createScimapiKey({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.ScimapiKey`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">getScimapiKey</a>(id) -> Tesseral.GetScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.getScimapiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">deleteScimapiKey</a>(id) -> Tesseral.DeleteScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.deleteScimapiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">updateScimapiKey</a>(id, { ...params }) -> Tesseral.UpdateScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.updateScimapiKey("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.ScimapiKey`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.scimApiKeys.<a href="/src/api/resources/scimApiKeys/client/Client.ts">revokeScimapiKey</a>(id) -> Tesseral.RevokeScimapiKeyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.scimApiKeys.revokeScimapiKey("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScimApiKeys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## UserInvites

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">listUserInvites</a>({ ...params }) -> Tesseral.ListUserInvitesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.listUserInvites();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UserInvitesListUserInvitesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">createUserInvite</a>({ ...params }) -> Tesseral.CreateUserInviteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.createUserInvite({
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UserInvitesCreateUserInviteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">getUserInvite</a>(id) -> Tesseral.GetUserInviteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.getUserInvite("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userInvites.<a href="/src/api/resources/userInvites/client/Client.ts">deleteUserInvite</a>(id) -> Tesseral.DeleteUserInviteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userInvites.deleteUserInvite("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserInvites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## UserRoleAssignments

<details><summary><code>client.userRoleAssignments.<a href="/src/api/resources/userRoleAssignments/client/Client.ts">listUserRoleAssignments</a>({ ...params }) -> Tesseral.ListUserRoleAssignmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List User Role Assignments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userRoleAssignments.listUserRoleAssignments();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UserRoleAssignmentsListUserRoleAssignmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userRoleAssignments.<a href="/src/api/resources/userRoleAssignments/client/Client.ts">createUserRoleAssignment</a>({ ...params }) -> Tesseral.CreateUserRoleAssignmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a User Role Assignment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userRoleAssignments.createUserRoleAssignment({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UserRoleAssignment`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userRoleAssignments.<a href="/src/api/resources/userRoleAssignments/client/Client.ts">getUserRoleAssignment</a>(id) -> Tesseral.GetUserRoleAssignmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a User Role Assignment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userRoleAssignments.getUserRoleAssignment("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.userRoleAssignments.<a href="/src/api/resources/userRoleAssignments/client/Client.ts">deleteUserRoleAssignment</a>(id) -> Tesseral.DeleteUserRoleAssignmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a User Role Assignment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.userRoleAssignments.deleteUserRoleAssignment("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UserRoleAssignments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUsers</a>({ ...params }) -> Tesseral.ListUsersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUsers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Tesseral.UsersListUsersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getUser</a>(id) -> Tesseral.GetUserResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getUser("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deleteUser</a>(id) -> Tesseral.DeleteUserResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deleteUser("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateUser</a>(id, { ...params }) -> Tesseral.UpdateUserResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateUser("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Tesseral.User`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
