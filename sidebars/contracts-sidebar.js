module.exports = {
    mySidebar: [
        'overview',
        {
            type: 'category',
            label: 'Market',
            collapsed: false,
            items: [
                'market/intro',
                'market/zestynft',
                'market/zestyvault',
                'market/zestymarket_erc20_v1_1',
                'market/zestymarket_erc20_v2',
            ]
        },
        {
            type: 'category',
            label: 'Governance',
            collapsed: false,
            items: [
                'governance/zestytoken',
                'governance/tokenvesting',
                'governance/rewarddistributor',
                'governance/rewardrecipient',
                'governance/stakingrewards',
            ]
        }
    ],
  };