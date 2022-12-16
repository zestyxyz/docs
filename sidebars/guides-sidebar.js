module.exports = {
  mySidebar: [
    {
      type: "category",
      label: "Virtual Space Owners",
      collapsed: false,
      items: [
        "for-creators/create-space",
        {
          type: "category",
          label: "Install your banner",
          collapsed: false,
          items: [
            "for-creators/integrate/web",
            {
              type: "category",
              label: "Platform Integrations",
              items: [
                "for-creators/integrate/platform-integrations/unity-integration",
                "for-creators/integrate/platform-integrations/cryptovoxels-integration",
                "for-creators/integrate/platform-integrations/decentraland-integration",
                "for-creators/integrate/platform-integrations/muse",
                "for-creators/integrate/platform-integrations/hyperfy",
              ],
            },
            {
              type: "category",
              label: "WebXR Integrations",
              items: [
                "for-creators/integrate/webxr-integrations/a-frame",
                "for-creators/integrate/webxr-integrations/babylonjs",
                "for-creators/integrate/webxr-integrations/r3f",
                "for-creators/integrate/webxr-integrations/threejs",
                "for-creators/integrate/webxr-integrations/wonderland",
              ],
            },
          ],
        },
        "for-creators/create-auction",
        "for-creators/get-paid",
        "for-creators/automation",
      ],
    },
    {
      type: "category",
      label: "Advertisers",
      collapsed: false,
      items: [
        "for-advertisers/create-campaign",
        "for-advertisers/bid",
        "for-advertisers/refunds",
      ],
    },
    "faq",
    "metamask",
    {
      type: "category",
      label: "Extras",
      collapsed: false,
      items: ["extras/dice"],
    },
  ],
};
