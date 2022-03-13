# babylon.js

Repository: [https://github.com/zestymarket/sdk/tree/main/threejs](https://github.com/zestymarket/sdk/tree/main/threejs)

:::note
You will first need to create a Space NFT in order to get started checkout [For Creators](../create-space.md) for more instructions.
:::


### Importing the SDK

**NPM Project** - install it like so:

```
npm install `@zestymarket/threejs-sdk'
```

Once installed, import the ZestyBanner component:

```
import * as Zesty from '@zestymarket/threejs-sdk';
```

**Warning**: Make sure you are using the same three.js version as the Zesty package. You can check here: https://github.com/zestymarket/sdk/blob/main/threejs/package.json

If you are using an unsupported version, you can import a specific version of three.js from services like CDN: [https://cdn.skypack.dev/three@version](https://cdn.skypack.dev/three@0.130.1)

**HTML Tag** - Paste this into the `<head>`:

Zesty can be imported through a single HTML page, no need to install it as a Node Package.

```
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-threejs-sdk.js"></script>
```

### Bringing the Zesty Banner into your scene

In the your scene setup, copy and paste:

```
const zestyBanner = new ZestyBanner("0", "0x0000000000000000000000000000000000000000", "tall", "standard", 3);
scene.add(zestyBanner);
```
Replace `0` with your Space ID and  `0x0000000000000000000000000000000000000000` with your wallet address

You can also pass the argument `true` if you would like to opt into Zesty Analytics. Anyone will be able to view this on your Space's page, where it will display a history of visits to your space and clicks on your banner.

Adding a banner to the previous example would look like this:

```
const zestyBanner = new ZestyBanner("0", "0x0000000000000000000000000000000000000000", "tall", "standard", 3, null, true);
scene.add(zestyBanner);
```

### Customizing your banner display

These are the available attributes for your banner:

**space**
*required*

String: The ID of your space.

**creator**
*required*

String: The wallet address of the creator of the space

**network**
*optional - defaults to `polygon`*

String: The network in which your space NFT was minted

**format**
*required*

String: Specify format of your ad space `tall`, `wide`, or `square`

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

**style**
*optional - defaults to `standard`*

String: Style of your placeholder image, which notifies viewers that the ad space is available

**height**
*optional - defaults to `1`*

Integer: Scale the banner to your liking.

**beacon**
*optional*

Boolean: Setting beacon to `true` allows you to view analytics on your space page

**Source**

```
/**
   * @constructor
   * @param {string} space The space ID
   * @param {string} creator The wallet ID of the creator
   * @param {string} network The network to connect to ('rinkeby' or 'polygon')
   * @param {string} format The format of the default banner
   * @param {Number} height Height of the banner
   * @param {THREE.WebGLRenderer} renderer Optional field to pass in the WebGLRenderer in a WebXR project
   */
  constructor(space, creator, network, format, style, height, renderer = null, beacon = false) {
    super();
```