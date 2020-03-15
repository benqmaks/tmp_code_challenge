import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Actions from './Actions/Actions';

const UsersTable = ({ users, onRowDeleteClick, onRowEditClick }) => {
  const columns = [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Email',
    accessor: 'email'
  }, {
    Header: 'Phone',
    accessor: 'phone'
  }, {
    Header: 'Action',
    Cell: (row) => {
      return <Actions
        onEditClick={() => onRowEditClick(row.index, users[row.index])}
        onDeleteClick={() => onRowDeleteClick(row.index)}
      />
    }
  }];

  const tableProps = {
    columns,
    minRows: 5,
    sortable: false,
    resizable: false,
    loading: false,
    showPagination: false,
    data: users,
    LoadingComponent: () => null,
  };

  return (
    <ReactTable {...tableProps} />
  );
};
UsersTable.propTypes = {
  users: PropTypes.array,
  onRowEditClick: PropTypes.func,
  onRowDeleteClick: PropTypes.func,
};

UsersTable.defaultProps = {
  users: [],
  onRowEditClick: () => {},
  onRowDeleteClick: () => {},
};

export default  UsersTable;

