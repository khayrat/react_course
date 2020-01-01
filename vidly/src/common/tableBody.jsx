import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };

  createKey(item, column) {
    return item[this.props.keyId] + (column.path || column.key);
  }

  render() {
    const { data, columns, keyId } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[keyId]}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  keyId: "_id"
};

export default TableBody;
