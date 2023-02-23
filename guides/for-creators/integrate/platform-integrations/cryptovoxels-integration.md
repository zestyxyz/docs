# Cryptovoxels

Repository: [https://github.com/zestyxyz/sdk/tree/main/cryptovoxels](https://github.com/zestyxyz/sdk/tree/main/cryptovoxels)

:::note
You will first need to create a Space NFT in order to get started. Check out [For Creators](../../create-space.md) for more instructions.
:::

## Instructions

#### Create an image

![Add Image button in Cryptovoxels](https://i.imgur.com/P0BgYjR.png)

Add an 'image from URL' to your Cryptovoxels parcel.

#### Configure Image

**Step 1**

Set the scale of the image to correspond with your space's format. For reference, the aspect ratios on each format are:

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

Change the Blend mode from Multiply to Combine, unless you would like the image to be affected by lighting.

**Step 2**

Set the Transparency mode to Alpha Blended.

**Step 3**

Under Display, make sure Stretch is checked.

#### Add the script

**At the beginning of the script section**, copy these lines to set your banner's configuration:

```js
const settings = `
const SPACE = 0;
const NETWORK = 'polygon';
const FORMAT = 'square';
const STYLE = 'transparent';
const BEACON = true;
`;
```

Replace `0` with your space ID.

You can also set BEACON to `true` if you would like to opt into Zesty Analytics. Anyone will be able to view this on your Space's page, where it will display a history of visits to your space and clicks on your banner. Further configuration options are given in the following section of this guide.

After the settings block, copy and paste this code block:

```js
fetch("https://forward.zesty.market/cvscript").then((res) => {
  res.text().then((text) => {
    eval(settings + text);
  });
});
```

This will dynamically fetch the latest version of the Cryptovoxels integration script and then execute it.

![The Cryptovoxels image loaded and placed against a wall.](https://i.imgur.com/fyyTTXQ.png)

#### Customizing your banner display

These are the available attributes for your banner:

:::info
**space**
_required_

String: The ID of your space.

**network**
_required_

String: The network in which your space NFT was minted. Should be set to either `polygon` or `rinkeby`

**format**
_required_

String: Determines the aspect ratio of your ad space. Valid options are `tall`, `wide`, or `square`.

- Tall - 3:4
- Wide - 4:1
- Square - 1:1

**style**
_required_

String: Style of your placeholder image, which notifies viewers that the ad space is available.
Valid options are `standard`, `minimal`, and `transparent`.

**beacon**
_optional_

Boolean: Setting beacon to `true` allows you to view analytics on your space page.
:::info

### Source Reference

```javascript
async function loadBanner(space, creator, network, format, style, beacon = false)
```
