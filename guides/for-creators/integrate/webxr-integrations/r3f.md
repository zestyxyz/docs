# React Three Fiber

Repository: [https://github.com/zestymarket/sdk/tree/main/r3f](https://github.com/zestymarket/sdk/tree/main/r3f)

:::note
You will first need to create a Space NFT in order to get started checkout [For Creators](../create-space.md) for more instructions.
:::


### Importing the SDK

**NPM Project** - install it like so:

```
npm install `@zestymarket/r3f-sdk'
```

Once installed, import the ZestyBanner component:

```
import * as Zesty from '@zestymarket/r3f-sdk';
```


**HTML Tag** - Paste this into the `<head>`:

Zesty can be imported through a single HTML page, no need to install it as a Node Package.

```
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-r3f-sdk.js"></script>
```

### Bringing the Zesty Banner into your scene

In your VR Canvas component, copy and paste:

```
<ZestyBanner space={'0'} creator={'0x0000000000000000000000000000000000000000'} format={'tall'} style={'standard'} position={[0, 2, 0]} />
```

replace `space= ` with your Space ID and `creator= ` with your wallet address.

You can also pass the argument `beacon={true}` if you would like to opt into Zesty Analytics. Anyone will be able to view this on your Space's page, where it will display a history of visits to your space and clicks on your banner.

Adding a banner to the previous example would look like this:

```
<ZestyBanner space={'0'} creator={'0x0000000000000000000000000000000000000000'} format={'tall'} style={'standard'} beacon={true} position={[0, 2, 0]} />
```

### Customizing your banner display

These are the available attributes for your banner:

**space**
*required*

String: The ID of your space.

`space={'YOUR_SPACE_ID'}`

**creator**
*required*

String: The wallet address of the creator of the space

`creator={'YOUR_CREATOR_ID'}`

**format**
*required*

String: Specify format of your ad space `tall`, `wide`, or `square`

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

`format={'YOUR_SPACE_FORMAT'}`

**style**
*optional - defaults to `standard`*

String: Style of your placeholder image, which notifies viewers that the ad space is available

`style={'YOUR_DESIRED_BANNER_STYLE'}`

**height**
*optional - defaults to `1`*

Integer: Scale the banner to your liking.

**beacon**
*optional*

Boolean: Setting beacon to `true` allows you to view analytics on your space page

**Source**

```
<ZestyBanner
   space={'YOUR_SPACE_ID'}
   creator={'YOUR_CREATOR_ID'}
   format={'YOUR_SPACE_FORMAT'}
   style={'YOUR_DESIRED_BANNER_STYLE'}
   beacon={true}
   position={[X, Y, Z]} />
```