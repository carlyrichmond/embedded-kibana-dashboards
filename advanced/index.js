let dashboardUri=getDashboardUri();

const iframe = document.getElementById('kibana-dashboard');
iframe.setAttribute('src', dashboardUri);

const picker = new easepick.create({
    element: '#datepicker',
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'
    ],
    zIndex: 10,
    firstDay: 0,
    autoApply: false,
    format: 'MMM DD, YYYY @ HH:MM:SS',
    plugins: [
        'RangePlugin',
        'TimePlugin'
    ],
    setup(picker) {
        picker.on('select', (e) => {
            const dateFormat = 'YYYY-MM-DDTHH:MM:00.000Z';
            const startDate =  picker.getStartDate().format(dateFormat);
            const endDate =  picker.getEndDate().format(dateFormat);
            
            dashboardUri=getDashboardUri(startDate, endDate);
            iframe.setAttribute('src', dashboardUri);
        });
     }
});

function getDashboardUri(startDate, endDate) {
    if (!startDate) {
        startDate = 'now-1y';
    }

    if (!endDate) {
        endDate = 'now';
    }

    return `https://my-elastic-deployment-9f9945:9243/app/dashboards?auth_provider_hint=anonymous1#/view/7adfa750-4c81-11e8-b3d7-01146121b73d?embed=true&_g=(filters:!(),refreshInterval:(pause:!f,value:0),time:(from:'${startDate}',to:'${endDate}'))&hide-time-filter=true`;
}