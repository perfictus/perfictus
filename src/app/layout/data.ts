export const menuItems = [{
    label: 'Home',
    icon: 'fa-regular fa-angle-down',
    submenu: [
        { title: 'SEO Marketing', img: 'assets/img/demo/demo1.jpg', link: 'index.html' },
        { title: 'Affiliate Marketing', img: 'assets/img/demo/demo2.jpg', link: 'index2.html' },
        { title: 'Startup Agency', img: 'assets/img/demo/demo3.jpg', link: 'index3.html' },
    ],
},
{
    label: 'Portfolio',
    icon: 'fa-regular fa-angle-down',
    submenu: [
        { title: 'Portfolio', link: 'portfolio.html' },
        { title: 'Portfolio Details', link: 'portfolio-details.html' },
    ],
},
{
    label: "Service",
    icon: "fa-regular fa-angle-down",
    submenu: [
        {
            title: "Service",
            submenu: [
                { title: "Service 01", link: "service.html" },
                { title: "Service 02", link: "service2.html" }
            ]
        },
        {
            title: "Single Service",
            submenu: [
                { title: "SEO Marketing", link: "service-details1.html" },
                { title: "Social Marketing", link: "service-details2.html" }
            ]
        }
    ]
}
];