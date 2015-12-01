$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-01',
            host3: null,
            host2: null,
            host1: 5.679
        }, {
            period: '2015-02',
            host3: 2.478,
            host2: 1.111,
            host1: 2.441
        }, {
            period: '2015-03',
            host3: 3.912,
            host2: 1.969,
            host1: 6.780
        }, {
            period: '2015-04',
            host3: 3.767,
            host2: 1.111,
            host1: 5.689
        }, {
            period: '2015-05',
            host3: 7.098,
            host2: 1.914,
            host1: 5.293
        }, {
            period: '2015-06',
            host3: 5.670,
            host2: 4.293,
            host1: 8.890
        }, {
            period: '2015-07',
            host3: 4.820,
            host2: 1.231,
            host1: 1.588
        }, {
            period: '2015-08',
            host3: 1.641,
            host2: 5.276,
            host1: 9.031
        }, {
            period: '2015-09',
            host3: 10.687,
            host2: 4.460,
            host1: 2.028
        }, {
            period: '2015-10',
            host3: 8.432,
            host2: 5.713,
            host1: 13.414
        }, {
            period: '2015-11',
            host3: 5.412,
            host2: 3.243,
            host1: 0.143
        }, {
            period: '2015-12',
            host3: null,
            host2: null,
            host1: null
        }],
        xkey: 'period',
        ykeys: ['host3', 'host2', 'host1'],
        labels: ['HostUbuntu3', 'HostUbuntu2', 'HostUbuntu1'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
