import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No.', width: 100 },
  { field: 'tagName', headerName: 'タグ名', width: 160 },
  { field: 'tagDescription', headerName: '説明', width: 200 },
];

const rows = [
  { id: 1, tagName: 'A', tagDescription: 'テストAタグ' },
  { id: 2, tagName: 'b', tagDescription: 'テストbタグ' },
  { id: 3, tagName: 'C', tagDescription: 'テストCタグ' },
];

export default function TagTable() {
  return (
    <div style={{ height: 200, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
