## Basics of using React Table

## Description
Simple example of how to use React Table
Demonstrates filtering / sorting and adding button component to a column.

There are 3 components to demonstrate this:

`BasicTable`
`FilterTable`
`ButtonTable`

This read me will talk about the basic table component.

## Running example
Make sure to install the node modules

`npm install`

Then to start:

`npm start`

This will launch the app at localhost:3000

## Usage

In order to use react table you need to import it 

```javascript
import { useTable } from 'react-table'
```

You then set up your columns and data, so something basic would be:

```javascript
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
```

Where COLUMNS includes the columns name and an accessor, something like:

```javascript
export const COLUMNS = [
  { Header : 'Id', accessor : 'id' },
  { Header : 'First Name', accessor : 'first_name' }
  // etc
];
```
and MOCK_DATA an array of objects in JSON format (normally this would come from some back-end API written in Node.js or whatever):

```javascript
[{"id":1,"first_name":"Steve"........}];
```

You would then do some general boiler plate code to set table properties up and set the useTable hook up to point to the columns and your data, a little like this:

```javascript
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
})
```

And to actually render the table, another load of 'boiler plate' code is returned:

```javascript
return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
```

The table is rendered from App.js, simply:

```javascript
function App() {
  return (
    <>
    <div className="App">
        <BasicTable></BasicTable>
    </div>
    </>
  );
}
```

The better way to improve the table component would obviously to pass props for the columns and the data, this can be an exercise for you.




