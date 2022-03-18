# A-Frame

Repository: [https://github.com/zestymarket/sdk/tree/main/aframe](https://github.com/zestymarket/sdk/tree/main/aframe)

:::note
You will first need to create a Space NFT in order to get started checkout [For Creators](../../create-space.md) for more instructions.
:::


### Importing the SDK

**NPM Project** - install it like so:

```
npm install '@zestymarket/aframe-sdk'
```

Once installed, import the ZestyBanner component:

```
import * as Zesty from '@zestymarket/aframe-sdk';
```


**HTML Tag** - Paste this into the `<head>`:

Zesty can be imported through a single HTML page, no need to install it as a Node Package.

```
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-aframe-sdk.js"></script>
```

### Bringing the Zesty Banner into your scene

In the `<a-scene>`, copy and paste:

```
<a-entity visible="true" zesty-banner="space: 0; creator: 0x0000000000000000000000000000000000000000; format: tall; style: standard" position="0 2 0"></a-entity>
```

Replace `space: ` and  `creator: ` with your space number and wallet address

To opt into enabling a beacon for your space, copy and paste:

```
<a-entity visible="true" zesty-banner="space: 0; creator: 0x0000000000000000000000000000000000000000; format: tall; style: standard; beacon: true" position="0 2 0"></a-entity>
```

### Customizing your banner display

These are the available attributes for your banner:

:::info
**adSpace**
*optional*

The name of your space

`adSpace: { type: 'string' }`

**space**
*required*

The ID of your space

`space: { type: 'string' }`

**creator**
*required*

The wallet address of the creator of the space

`creator: { type: 'string' }`

**network**
*optional - defaults to `polygon`*

The network in which your space NFT was minted

`network: { type: 'string', default: 'polygon', oneOf: ['matic', 'polygon', 'rinkeby'] }`

**adFormat**
*optional*

Specify format of accepted ads `tall`, `wide`, or `square`

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

`adFormat: { type: 'string', oneOf: ['tall', 'wide', 'square'] }`

**format**
*required*

Specify format of your ad space `tall`, `wide`, or `square`

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

`adFormat: { type: 'string', oneOf: ['tall', 'wide', 'square'] }`

**style**
*optional*

Style of your placeholder image, which notifies viewers that the ad space is available

`style: { type: 'string', default: defaultStyle, oneOf: ['standard', 'minimal'] }`

**height**
*optional*

Scale the banner to your liking. Default value is `1`

`height: { type: 'float', default: 1 }`

**beacon**
*optional*

Setting beacon to `true` allows you to view analytics on your space page

`beacon: { type: 'boolean', default: false }`
:::