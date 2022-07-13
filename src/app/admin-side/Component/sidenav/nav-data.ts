export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'bi bi-speedometer2',
        label: 'Dashboard'
    },
    {
        routeLink: 'orders',
        icon: 'bi bi-cart',
        label: 'Orders'
    },
    {
        routeLink: 'products',
        icon: 'bi bi-card-checklist',
        label: 'Products'
    },
    {
        routeLink: 'statistics',
        icon: 'bi bi-bar-chart-fill',
        label: 'Statistics'
    },
    {
        routeLink: 'users',
        icon: 'bi bi-file-earmark-person',
        label: 'customers'
    },
    {
        routeLink: 'media',
        icon: 'bi bi-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'bi bi-gear',
        label: 'Settings'
    },
       {
        routeLink: 'journal',
        icon: 'bi bi-journal-album',
        label: 'Journal'
    },
    {
        routeLink: 'journal',
        icon: 'bi bi-arrow-right-short',
        label: 'Menu with Children',
        submenuLevel1: [
            {
                routeLink: 'journal',
                icon: 'bi bi-arrow-right-short', // icon if needed
                label: 'Sub menu level 1',
            },
            {
                routeLink: '',
                icon: 'fal fa-cog', // icon if needed
                label: 'Sub menu level 1',
                submenuLevel2: [
                    {
                        routeLink: '',
                        icon: 'fal fa-cog', // icon if needed
                        label: 'Sub menu level 2',
                    }
                ]
            }
        ]
    },

];