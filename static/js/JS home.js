document.addEventListener('DOMContentLoaded', function() {
    // Mock data for the dashboard
    const mockData = {
        revenue: [1000, 1500, 1200, 1800, 2000],
        pipeline: [
            {name: 'Lead', value: 30},
            {name: 'Qualified', value: 20},
            {name: 'Proposal', value: 15},
            {name: 'Negotiation', value: 10},
            {name: 'Closed', value: 5}
        ],
        clients: {new: 15, active: 50},
        productivity: {tasks: 75, calls: 30, meetings: 10},
        alerts: [
            'Hot lead: Contact John Doe',
            'Opportunity stagnant: XYZ Corp deal',
            'Contract renewal: ABC Inc in 7 days'
        ]
    };

    // Populate revenue chart
    document.getElementById('revenueChart').textContent = 'Revenue Chart: $' + mockData.revenue.reduce((a, b) => a + b, 0);

    // Populate pipeline chart
    document.getElementById('pipelineChart').textContent = 'Pipeline: ' + mockData.pipeline.reduce((acc, stage) => acc + stage.value, 0) + ' total opportunities';

    // Populate clients stats
    document.getElementById('clientsStats').textContent = `New clients: ${mockData.clients.new}, Active: ${mockData.clients.active}`;

    // Populate productivity stats
    const productivityStats = document.getElementById('productivityStats');
    productivityStats.textContent = `Tasks: ${mockData.productivity.tasks}, Calls: ${mockData.productivity.calls}, Meetings: ${mockData.productivity.meetings}`;

    // Populate alerts
    const alertsList = document.getElementById('alertsList');
    mockData.alerts.forEach(alert => {
        const li = document.createElement('li');
        li.textContent = alert;
        alertsList.appendChild(li);
    });
});