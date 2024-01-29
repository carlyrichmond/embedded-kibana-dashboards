let selectedStartDate = 'now-1y';
let selectedEndDate = 'now';
let selectedCarrier = 'Kibana Airlines';

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
    format: 'MMM DD, YYYY @ HH:MM:00',
    plugins: [
        'RangePlugin',
        'TimePlugin'
    ],
    setup(picker) {
        picker.on('select', (e) => {
            const dateFormat = 'YYYY-MM-DDTHH:MM:00.000Z';
            selectedStartDate =  picker.getStartDate().format(dateFormat);
            selectedEndDate =  picker.getEndDate().format(dateFormat);
            
            dashboardUri=getDashboardUri();
            iframe.setAttribute('src', dashboardUri);
        });
     }
});

function getDashboardUri() {
    const carrierQuery = rison.encode_object({Carrier : encodeURIComponent(selectedCarrier)});
    return `https://my-elastic-deployment:9243/app/dashboards?auth_provider_hint=anonymous1#/view/7adfa750-4c81-11e8-b3d7-01146121b73d?embed=true&_g=(filters:!(),refreshInterval:(pause:!f,value:0),time:(from:'${selectedStartDate}',to:'${selectedEndDate}'))&_a=(query:(language:kuery,query:'${carrierQuery}'))&hide-time-filter=true`;
}

function updateWithCarrier() {
    const carrierSelect = document.getElementById('carrier-select');
    selectedCarrier = carrierSelect.value || '';

    dashboardUri=getDashboardUri();
    iframe.setAttribute('src', dashboardUri);
}