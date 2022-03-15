---
description: How to add your Space NFT to your livestream via OBS Studio or Streamlabs OBS.
---

# Web Integration

:::note
You will first need to create a Space NFT in order to get started checkout [For Creators](../create-space.md) for more instructions.
:::

## Web

#### Step 1a

If you want to import the `<script>` tag, copy and paste this into the `<head>`:

```
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-web-sdk.js"></script>
```

#### Step 1b

If you are using it in an NPM project, install it like so:

```
npm install '@zestymarket/web-sdk'
```

#### Step 2

In your page's `<body>`, copy and paste:

```
<zesty-web space="0" creator="0x0000000000000000000000000000000000000000" width="100px"></zesty-web>
```

If you wish to opt into enabling a beacon on your space, copy and paste:

```
<zesty-web space="0" creator="0x0000000000000000000000000000000000000000" width="100px" beacon="true"></zesty-web>
```

