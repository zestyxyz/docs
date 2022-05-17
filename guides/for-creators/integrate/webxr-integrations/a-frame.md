# A-Frame

Repository: [https://github.com/zestymarket/sdk/tree/main/aframe](https://github.com/zestymarket/sdk/tree/main/aframe)

:::note
You will first need to create a Space NFT in order to get started. Check out [For Creators](../../create-space.md) for more instructions.
:::

### Importing the SDK

**NPM Project** - install it like so:

```sh
npm install '@zestymarket/aframe-sdk'
```

Once installed, import the ZestyBanner component:

```js
import * as Zesty from '@zestymarket/aframe-sdk';
```

**HTML Script Tag** - Paste this into the `<head>`:

```html
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-aframe-sdk.js"></script>
```

### Bringing the Zesty Banner into your scene

In the `<a-scene>`, copy and paste:

```html
<a-entity visible="true" zesty-banner="space: 0; format: tall; style: standard" position="0 2 0"></a-entity>
```

Replace `space: 0` with your own space ID.

To opt into enabling a beacon for your space, copy and paste:

```html
<a-entity visible="true" zesty-banner="space: 0; format: tall; style: standard; beacon: true" position="0 2 0"></a-entity>
```

### Customizing your banner display

These are the available attributes for your banner:

:::info
**space**
*required*

The ID of your space

`space: { type: 'string' }`

**network**
*optional - defaults to `polygon`*

The network in which your space NFT was minted.

`network: { type: 'string', default: 'polygon', oneOf: ['matic', 'polygon', 'rinkeby'] }`

**format**
*required*

Detemrines the aspect ratio of your ad space. Valid options are `tall`, `wide`, or `square`.

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

`format: { type: 'string', oneOf: ['tall', 'wide', 'square'] }`

**style**
*optional*

Style of your placeholder image, which notifies viewers that the ad space is available.

`style: { type: 'string', default: defaultStyle, oneOf: ['standard', 'minimal'] }`

**height**
*optional*

Scales the banner to your liking. Default value is `1`.

`height: { type: 'float', default: 1 }`

**beacon**
*optional*

Setting beacon to `true` allows you to view analytics on your space page.

`beacon: { type: 'boolean', default: false }`

**adSpace**
*optional*

Identical to space. Kept for backwards compatibility.

`adSpace: { type: 'string' }`

**adFormat**
*optional*

Identical to format. Kept for backwards compatibility.

`adFormat: { type: 'string', oneOf: ['tall', 'wide', 'square'] }`
:::
