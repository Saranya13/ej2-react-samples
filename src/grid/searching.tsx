import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { categoryData } from './data';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';

export class Searching extends SampleBase<{}, {}> {

    public toolbarOptions: any = ['search'];
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section row'>
                    <GridComponent dataSource={categoryData} toolbar={this.toolbarOptions} allowPaging={true} pageSettings={{ pageSize: 10 }} >
                        <ColumnsDirective>
                            <ColumnDirective field='CategoryName' headerText='Category Name' width='170'></ColumnDirective>
                            <ColumnDirective field='ProductName' headerText='Product Name' width='150'></ColumnDirective>
                            <ColumnDirective field='QuantityPerUnit' headerText='Quantity PerUnit' width='180' textAlign='right' />
                            <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='right' />
                        </ColumnsDirective>
                        <Inject services={[Toolbar, Page]} />
                    </GridComponent>
                </div>
                <div id='description'>
                    <p>
                        The searching feature enables the user to view the reduced amount of records based on search criteria. It can be enabled by setting  <code><a target='_blank' className='code'
                            href='http://ej2.syncfusion.com/react/documentation/grid/api-gridComponent.html#allowsearching-boolean'>
                            allowSearching</a></code> property as true.
          </p>
                    <p>
                        Grid component features are segregated into individual feature-wise modules. To use searching feature, we need to inject <code>Search</code> module into the <code>services</code></p>

                    <p>
                        More information on the searching feature configuration can be found in this
            <a target='_blank' href='http://ej2.syncfusion.com/react/documentation/grid/searching.html'> documentation section</a>.
          </p>
                </div>
            </div>
        )
    }
}