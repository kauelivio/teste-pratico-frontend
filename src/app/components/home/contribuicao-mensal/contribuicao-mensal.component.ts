import { Component, OnInit } from '@angular/core';

import { ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive } from 'ng-apexcharts';

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
    responsive: ApexResponsive[];
    dataLabels: ApexDataLabels;
    fill: ApexFill;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-contribuicao-mensal',
    templateUrl: './contribuicao-mensal.component.html',
    styleUrls: ['./contribuicao-mensal.component.less']
})
export class ContribuicaoMensalComponent {

    public chartOptions: Partial<ChartOptions>;

    data = [
        {
            total: 600000,
            label: 'Contribuição mensal',
            value: 500,
            percentage: 5
        },
        {
            total: 400000,
            label: 'Contribuição voluntária',
            value: 500,
        }
    ]

    totalSum = this.data.reduce((acc, cur) => { return acc + cur.total; }, 0)

    constructor() {
        this.chartOptions = {
            series: this.data.map(item => item.total),
            chart: {
                type: 'donut',
                width: 150,
                height: 150
            },
            labels: this.data.map(item => item.label),
            fill: {
                colors: ['#E22E6F', '#594CBE'], // cores do gráfico
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: { width: 200 }
                }
            }],
            stroke: {
                show: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%', // Controla o tamanho do buraco central
                    },
                    expandOnClick: false, // Evita expansão ao clicar
                }
            },
        } as ChartOptions;

    }
}
