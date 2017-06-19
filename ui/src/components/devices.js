/**
 * Created by master on 02/06/2017.
 */
import React from 'react'
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class Devices extends React.Component {
    componentWillMount() {
        console.log('Fetch started')
        this.props.fetchDevices()
    }

    constructor(props){
        super(props);
        this.renderRows.bind(this);
        this.renderTable.bind(this);
    }

    renderRows() {
        return (

         this.props.devices.map((device, index) =>(

            <TableRow key={index}>
                <TableRowColumn >{device.name}</TableRowColumn>
                <TableRowColumn>{device.description}</TableRowColumn>
            </TableRow>
            ))
        );
    }

    renderTable() {

        return (

            <Paper className="table-paper">
            <div className="table-wrapper">

                <Table className="maintable">
                <TableHeader displaySelectAll={false}>
                    <TableRow >
                        <TableHeaderColumn>DEVICE NAME</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover={true}>
                    {this.renderRows()}
                </TableBody>
            </Table>

            </div>
            </Paper>


        )

    };

    render() {
        return (
            <div>
            {this.renderTable()}
            </div>

    )
    }


}



