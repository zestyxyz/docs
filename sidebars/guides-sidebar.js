module.exports = {
    mySidebar: [
        'welcome',
        'metamask',
        'advertisers',
        {
            type: 'category',
            label: 'Virtual Space Owners',
            collapsed: false,
            items: [
                'for-creators/create-space',
                {
                    type: 'category',
                    label: 'Platform Integrations',
                    items: [
                        'for-creators/platform-integrations/unity-integration',
                        'for-creators/platform-integrations/cryptovoxels-integration',
                        'for-creators/platform-integrations/decentraland-integration',
                        'for-creators/platform-integrations/muse',

                    ]
                },
                {
                    type: 'category',
                    label: 'WebXR Integration',
                    items: [
                        'for-creators/webxr-integrations/a-frame',
                        'for-creators/webxr-integrations/babylonjs',
                        'for-creators/webxr-integrations/r3f',
                        'for-creators/webxr-integrations/threejs',
                        'for-creators/webxr-integrations/wonderland',
                    ]
                },
                'for-creators/create-auction',
                'for-creators/get-paid',

            ]
        }
    ],
  };