//import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
  //  Cell: ({ value }) => {
    //  return format(new Date(value), 'dd/MM/yyyy')
    //}
  },
  {
    Header: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Phone',
    accessor: 'phone'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
]
