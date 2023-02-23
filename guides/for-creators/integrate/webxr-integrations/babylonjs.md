# babylon.js

Repository: [https://github.com/zestyxyz/sdk/tree/main/babylonjs](https://github.com/zestyxyz/sdk/tree/main/babylonjs)

:::note
You will first need to create a Space NFT in order to get started. Check out [For Creators](../../create-space.md) for more instructions.
:::

### Importing the SDK

**NPM Project** - install it like so:

```sh
npm install '@zestymarket/babylonjs-sdk'
```

Once installed, import the ZestyBanner component:

```js
import * as Zesty from '@zestymarket/babylonjs-sdk';
```

**Warning**: Make sure you are using the same babylon.js version as the Zesty package. You can check here: https://github.com/zestyxyz/sdk/blob/main/babylonjs/package.json

If you are using an unsupported version, you can import a specific version of babylon.js from CDNs like Skypack: [https://cdn.skypack.dev/babylonjs@version](https://cdn.skypack.dev/babylonjs@4.2.1)

**HTML Script Tag** - Paste this into the `<head>`:

```html
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-babylonjs-sdk.js"></script>
```

### Bringing the Zesty Banner into your scene

Make sure you have a reference to your scene and WebXRHelper (if applicable), then copy and paste:

```js
const zestyBanner = new ZestyBanner("0", "tall", "standard", 3, scene, xrHelper);
```

Replace `0` with your own Space ID.

Substitute variable names as needed. The last parameter for the WebXRHelper is optional.

You can also pass the argument `true` if you would like to opt into Zesty Analytics. Anyone will be able to view this on your Space's page, where it will display a history of visits to your space and clicks on your banner.

Adding a banner to the previous example would look like this:

```js
const zestyBanner = new ZestyBanner("0", "tall", "standard", 3, scene, xrHelper, true);
```

### Customizing your banner display

These are the available attributes for your banner:

:::info
**space**
*required*

String: The ID of your space.

**network**
*required*

String: The network in which your space NFT was minted. Should be set to either `polygon` or `rinkeby`.

**format**
*required*

String: Determines the aspect ratio of your ad space. Valid options are `tall`, `wide`, or `square`.

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

**style**
*required*

String: Style of your placeholder image, which notifies viewers that the ad space is available.
Valid options are `standard`, `minimal`, and `transparent`.

**height**
*required*

Integer: Scales the banner to your liking.

**scene**
*required*

A reference to your babylon.js scene.

**webXRExperienceHelper**
*optional*

A reference to a babylon.js WebXR Experience helper, if applicable. Can otherwise be omitted unless you are changing beacon settings, in which case it should be set to null.

**beacon**
*optional*

Boolean: Setting beacon to `true` allows you to view analytics on your space page.
:::

### Source Reference

```javascript
export default class ZestyBanner {
  constructor(space, network, format, style, height, scene, webXRExperienceHelper = null, beacon = false) {
    const options = {
      height: height,
      width: formats[format].width * height
    };
```
