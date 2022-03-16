## Wonderland Engine

repository: [https://github.com/zestymarket/sdk/tree/main/wonderland](https://github.com/zestymarket/sdk/tree/main/wonderland)

:::note
You will first need to create a Space NFT in order to get started checkout [For Creators](../../create-space.md) for more instructions.
:::


#### Step 1a

To just use the bundled file, download it by right-clicking this link and saving it into your project folder: [https://ipfs.io/ipns/lib.zesty.market/zesty-wonderland-sdk.js](https://ipfs.io/ipns/lib.zesty.market/zesty-wonderland-sdk.js)

#### Step 1b

If you are using NPM in your Wonderland project, install it like so:

```
npm install '@zestymarket/wonderland-sdk'
```

**Warning**: Make sure you are using the same three.js version as the Zesty package. You can check here: [https://github.com/zestymarket/sdk/blob/main/wonderland/package.json](https://github.com/zestymarket/sdk/blob/main/wonderland/package.json)

#### Step 2

In your Wonderland project, open your Project Settings view and make sure that the SDK is being included in your JavaScript source paths.

![](https://i.imgur.com/cINXHxv.png)


#### Step 3

Create a new mesh, set its type to PrimitivePlane, and create a new material for it as well. Set the pipeline to either "Phong Opaque Textured" or "Flat Opaque Textured."

![](https://i.imgur.com/kwO2Uam.png)
![](https://i.imgur.com/PIZmivx.png)

#### Step 4

Add the zesty-banner component to your mesh's object and fill in the following fields as such:

**creator**\
`0x0000000000000000000000000000000000000000`

**space**\
`0`

**format**\
`tall`

**style**\
`standard`

![](https://i.imgur.com/BXMonQ9.png)
![](https://i.imgur.com/20BQWXh.png)

To opt into enabling a beacon on your space, simply check the "beacon" box on the zesty-banner component. This will allow you to see analytics like space visits and banner clicks within the Zesty app.

#### Run the test server

Press the play button to package, start server and open browser to see changes.

**Result:
**
![](https://i.imgur.com/37HqMbN.png)