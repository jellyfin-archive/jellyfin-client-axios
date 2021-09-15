<h1 align="center">Jellyfin API Client for Axios</h1>
<h3 align="center">Part of the <a href="https://jellyfin.media">Jellyfin Project</a></h3>

---

<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/branding/SVG/banner-logo-solid.svg?sanitize=true"/>
<br/>
<br/>
<a href="https://www.npmjs.com/package/@jellyfin/client-axios">
<img alt="stable npm" src="https://img.shields.io/npm/v/@jellyfin/client-axios/stable"/>
</a>
<a href="https://www.npmjs.com/package/@jellyfin/client-axios">
<img alt="unstable npm" src="https://img.shields.io/npm/v/@jellyfin/client-axios/unstable"/>
</a>
<a href="https://github.com/jellyfin/jellyfin-client-axios">
<img alt="MIT License" src="https://img.shields.io/github/license/jellyfin/jellyfin-client-axios.svg"/>
</a>
<a href="https://opencollective.com/jellyfin">
<img alt="Donate" src="https://img.shields.io/opencollective/all/jellyfin.svg?label=backers"/>
</a>
<a href="https://features.jellyfin.org">
<img alt="Feature Requests" src="https://img.shields.io/badge/fider-vote%20on%20features-success.svg"/>
</a>
<a href="https://matrix.to/#/+jellyfin:matrix.org">
<img alt="Chat on Matrix" src="https://img.shields.io/matrix/jellyfin:matrix.org.svg?logo=matrix"/>
</a>
<a href="https://www.reddit.com/r/jellyfin">
<img alt="Join our Subreddit" src="https://img.shields.io/badge/reddit-r%2Fjellyfin-%23FF5700.svg"/>
</a>
</p>

> ## WARNING: The current 10.7.8 package for this project is the one matching the 10.7.7 server API due to a bug in our deployment. New versions should be fixed and follow the server versioning.

This library is meant to help clients written in JavaScript or TypeScript interact with Jellyfin's REST API. It's generated
automatically using [OpenAPITools generator](https://github.com/OpenAPITools/openapi-generator) and it's fully typed
for TypeScript

## Compatibility

This library depends on [Axios](https://github.com/axios/axios).

### TypeScript typings

You can also use this library as a development dependency just for the
TypeScript typings. Types are located under the `models` subfolder:

```js
import type TYPE_NAME from "@jellyfin/client-axios/models";
```

## Usage

Install it in your project:

```bash
npm i @jellyfin/client-axios
```

This library follows the API pattern you can get on https://api.jellyfin.org/ or on your own server at `/api-docs/swagger/index.html` or `/api-docs/redoc/index.html`.

### Basic example

```typescript
// Get server infos
import { SystemApi } from "@jellyfin/client-axios";

const systemApi = new SystemApi(
  undefined, // OpenAPI configuration object, found in `configuration.ts`
  "https://demo.jellyfin.org/stable", // Base URL
  undefined // Axios base object to use for queries, can be used to set base URL or headers
);
const infos = (await systemApi.getPublicSystemInfo()).data;
console.log(infos);
```

### Authentication

```typescript
import { v4 } from "uuid"; // Used to generate random string
import { UserApi } from "@jellyfin/client-axios";

const base_token = `MediaBrowser Client="My New Client", Device="${
  window.navigator.userAgent
}", DeviceId="${v4()}", Version="1.0.0"`;

const vanilla_token = `${base_token}, Token=""`; // We need a vanilla token to authenticate

const ax = axios.create({
  headers: {
    "X-Emby-Authorization": vanilla_token
  },
  baseURL: "https://demo.jellyfin.org/stable"
}); // Prepare the authentification header

const userApi = new UserApi(undefined, "", ax); // If using the baseURL from Axios, you need to set the baseURL to an empty string in the API object
const res = (
  await userApi.authenticateUserByName({
    authenticateUserByName: {
      Username: "demo",
      Pw: ""
    }
  })
).data;

const logged_token = `${base_token}, Token="${res.AccessToken}"`; // Re-use our base token to append the newly fetched one
const userId = res.User?.Id;
console.log(logged_token);
console.log(userId);
```

### API calls

```typescript
const ax = axios.create({
  baseURL: url,
  headers: {
    "X-Emby-Authorization": token
  }
});

const libraryApi = new LibraryApi(undefined, "", ax);
const libs = (await libraryApi.getMediaFolders()).data;
console.log(libs);

const artistsApi = new ArtistsApi(undefined, "", ax);
const artist = (
  await artistsApi.getArtistByName({
    name: "Flume"
  })
).data; // Each API parameter is typed and available as method's parameters
console.log(artist);
```

## Build Process

This API client is built automatically every midnight for the stable and unstable API releases. You can build it yourself using Docker:

#### Stable API (>= Jellyfin Server 10.7.0)

```sh
docker run --rm openapitools/openapi-generator-cli generate -i https://api.jellyfin.org/openapi/jellyfin-openapi-stable.json
-g typescript-axios --additional-properties=npmName=@jellyfin/client-axios
--additional-properties=supportsES6=true
--additional-properties=useSingleRequestParameter=true
--additional-properties=withSeparateModelsAndApi=true
--additional-properties=modelPackage=models
--additional-properties=apiPackage=api
--enable-post-process-file
-o /output/dir
```

#### Unstable API (current Jellyfin Server master branch)

```sh
docker run --rm openapitools/openapi-generator-cli generate -i https://api.jellyfin.org/openapi/jellyfin-openapi-unstable.json
-g typescript-axios --additional-properties=npmName=@jellyfin/client-axios
--additional-properties=supportsES6=true
--additional-properties=useSingleRequestParameter=true
--additional-properties=withSeparateModelsAndApi=true
--additional-properties=modelPackage=models
--additional-properties=apiPackage=api
--enable-post-process-file
-o /output/dir
```

If you want to compile the TypeScript sources to JavaScript, check the `README` of the generated
output, as it will contain up to date instructions of how to do it yourself.

## Examples

We use this API client at [Jellyfin Vue](https://github.com/jellyfin/jellyfin-vue) and
[Jellyfin Chromecast](https://github.com/jellyfin/jellyfin-chromecast)
