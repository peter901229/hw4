// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '臺中嘉義臺北地區月均溫圖'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.cwa.gov.tw/V8/C/C/Statistics/monthlymean.html" ' +
            'target="_blank">中央氣象署</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: '溫度'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '臺中',
        marker: {
            symbol: 'square'
        },
        data: [ 17.0,
            17.7,
            20.1,
            23.5,
            26.4,
            28.1,
            28.9,
            28.4,
            27.8,
            25.5,
            22.6,
            18.7 ]
}, {
        name: '嘉義',
        marker: {
            symbol: 'circle'
        },
        data: [ 16.8,
            17.7,
            20.2,
            23.5,
            26.3,
            28.3,
            28.9,
            28.4,
            27.4,
            24.8,
            22.0,
            18.4]
    },{
        name: '臺北',
        marker: {
            symbol: 'diamond'
        },
        data: [ 16.6,
            17.2,
            19.0,
            22.5,
            25.8,
            28.3,
            30.1,
            29.7,
            27.8,
            24.7,
            22.0,
            18.2]
    }]
});
