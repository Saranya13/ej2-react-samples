import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
    LineSeries, DataLabel, Legend, ILoadedEventArgs,
    ChartTheme, Category, ITextRenderEventArgs
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
let data1: Object[] = [
    { x: 2010, y: 1014 }, { x: 2011, y: 1040 },
    { x: 2012, y: 1065 }, { x: 2013, y: 1110 },
    { x: 2014, y: 1130 }, { x: 2015, y: 1153 },
    { x: 2016, y: 1175 }
];
let data2: Object[] = [
    { x: 2010, y: 990 }, { x: 2011, y: 1010 },
    { x: 2012, y: 1030 }, { x: 2013, y: 1070 },
    { x: 2014, y: 1105 }, { x: 2015, y: 1138 },
    { x: 2016, y: 1155 }
];
let theme: ChartTheme;

let materialMan: string = '<div style="background-color:#00bdae;border-radius: 3px; width: 68px">' +
    '<img src="http://npmci.syncfusion.com/production/react/demos/src/chart/images/male.png" style="width: 24px; height: 24px; padding: 2px" />' +
    '<div style="color:white; font-family:Roboto; font-style: medium; fontp-size:14px; float: right;'
    + 'padding: 2px;line-height: 20px;text-align: center; padding-right: 6px;"><span>' +
    '${point.y}M </span></div></div>';
let materialWomen: string = '<div style="background-color:#404041;border-radius: 3px; width: 68px">' +
    '<img src="http://npmci.syncfusion.com/production/react/demos/src/chart/images/male.png" style="width: 24px; height: 24px; padding: 2px" />' +
    '<div style="color:white; font-family:Roboto; font-style: medium; fontp-size:14px; float: right;'
    + 'padding: 2px;line-height: 20px;text-align: center;padding-right: 6px;"><span>' +
    '${point.y}M </span></div></div>';
let fabricMan: string = '<div style="background-color:#4472c4;border-radius: 3px;width: 68px">' +
    '<img src="http://npmci.syncfusion.com/production/react/demos/src/chart/images/male.png" style="width: 24px; height: 24px; padding: 2px" />' +
    '<div style="color:white; font-family:Roboto; font-style: medium; fontp-size:14px; float: right;'
    + 'padding: 2px;line-height: 20px;text-align: center;padding-right: 6px"><span>' +
    '${point.y}M </span></div></div>';
let fabricWomen: string = '<div style="background-color:#ed7d31;border-radius: 3px;width: 68px">' +
    '<img src="http://npmci.syncfusion.com/production/react/demos/src/chart/images/male.png" style="width: 24px; height: 24px; padding: 2px" />' +
    '<div style="color:white; font-family:Roboto; font-style: medium; fontp-size:14px; float: right;'
    + 'padding: 2px;line-height: 20px;text-align: center;padding-right: 6px"><span>' +
    '${point.y}M </span></div></div>';
let bootstrapMan: string = '<div style="background-color:#a16ee5;border-radius: 3px;width: 68px">' +
    '<img src="http://npmci.syncfusion.com/production/react/demos/src/chart/images/male.png" style="width: 24px; height: 24px; padding: 2px" />' +
    '<div style="color:white; font-family:Roboto; font-style: medium; fontp-size:14px; float: right;'
    + 'padding: 2px;line-height: 20px;text-align: center;padding-right: 6px"><span>' +
    '${point.y}M </span></div></div>';
let bootstrapWomen: string = '<div style="background-color:#f7ce69;border-radius: 3px;width: 68px">' +
    '<img src="http://npmci.syncfusion.com/production/react/demos/src/chart/images/male.png" style="width: 24px; height: 24px; padding: 2px" />' +
    '<div style="color:white; font-family:Roboto; font-style: medium; fontp-size:14px; float: right;'
    + 'padding: 2px;line-height: 20px;text-align: center;padding-right: 6px"><span>' +
    '${point.y}M </span></div></div>';

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
	}`;
/**
 * DataLabelTemplate sample
 */
export class DataLabelTemplate extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <ChartComponent id='charts' style={{ textAlign: "center" }}
                        primaryXAxis={{
                            minimum: 2010, maximum: 2016,
                            interval: Browser.isDevice ? 2 : 1,
                            edgeLabelPlacement: 'Shift',
                            labelStyle: {
                                color: '#606060',
                                fontFamily: 'Roboto',
                                fontStyle: 'medium',
                                size: '14px'
                            },
                            majorGridLines: { width: 0 },
                            lineStyle: { color: '#eaeaea', width: 1 }
                        }}
                        primaryYAxis={{
                            minimum: 900, maximum: 1300,
                            labelFormat: '{value}M',
                            title: Browser.isDevice ? '' : 'Population',
                            labelStyle: {
                                color: '#606060', fontFamily: 'Roboto',
                                fontStyle: 'medium', size: '14px'
                            },
                            interval: 80,
                            majorGridLines: {
                                color: '#eaeaea', width: 1
                            },
                            lineStyle: {
                                color: '#eaeaea', width: 1
                            }
                        }}
                        titleStyle={{
                            color: '#606060', fontFamily: 'Roboto',
                            fontStyle: 'medium', size: '14px'
                        }}
                        chartArea={{ border: { width: 0 } }}
                        width={Browser.isDevice ? '100%' : '60%'}
                        title='Population of India ( 2010 - 2016 )' load={this.loadPre.bind(this)}
                        loaded={this.loaded.bind(this)}
                        textRender={this.textRender.bind(this)}>
                        <Inject services={[LineSeries, DataLabel, Category, Legend]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data1} xName='x' yName='y' name='Male' type='Line'
                                marker={{
                                    visible: true,
                                    shape: 'Circle',
                                    dataLabel: {
                                        visible: true,
                                        position: 'Top',
                                        margin: { right: 15 },
                                        template: materialMan
                                    }
                                }} width={2}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data2} xName='x' yName='y' name='Female' type='Line'
                                marker={{
                                    visible: true,
                                    shape: 'Rectangle',
                                    dataLabel: {
                                        visible: true,
                                        position: 'Bottom',
                                        margin: { right: 15 },
                                        template: materialWomen
                                    }
                                }} width={2}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        )
    }
    public textRender(args: ITextRenderEventArgs): void {
        if (theme === 'Material') {
            args.template = args.series.name === 'Male' ? materialMan : materialWomen;
        } else if (theme === 'Fabric') {
            args.template = args.series.name === 'Male' ? fabricMan : fabricWomen;
        } else {
            args.template = args.series.name === 'Male' ? bootstrapMan : bootstrapWomen;
        }
    };
    public loadPre(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)) as ChartTheme;
        theme = args.chart.theme;
    };
    public loaded(args: ILoadedEventArgs): void {
        let  chart:  Element  =  document.getElementById('charts');
        chart.setAttribute('title',  '');
    };
}
ReactDOM.render(<DataLabelTemplate />, document.getElementById('sample'));