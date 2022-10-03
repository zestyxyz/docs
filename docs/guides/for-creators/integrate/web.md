---
description: How to add your Space NFT to your livestream via OBS Studio or Streamlabs OBS.
---

# Web Integration

:::note
You will first need to create a Space NFT in order to get started. Check out [For Creators](../create-space.md) for more instructions.
:::

## Web

#### Step 1a

If you want to import the `<script>` tag, copy and paste this into the `<head>`:

```html
<script src="https://ipfs.io/ipns/lib.zesty.market/zesty-web-sdk.js"></script>
```

#### Step 1b

If you are using it in an NPM project, install it like so:

```sh
npm install '@zestymarket/web-sdk'
```

#### Step 2

In your page's `<body>`, copy and paste:

```html
<zesty-web space="0" width="100px"></zesty-web>
```

Replace `space="0"` with your own Space ID.

You can also pass the argument `beacon="true"` if you would like to opt into Zesty Analytics. Anyone will be able to view this on your Space's page, where it will display a history of visits to your space and clicks on your banner.

Adding a banner to the previous example would look like this:

```html
<zesty-web space="0" width="100px" beacon="true"></zesty-web>
```
