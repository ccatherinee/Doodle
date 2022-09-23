import React from "react";
// get access to Table component from ./table 
import Table from "./Table";
// get access to Button component from ./Button 
import Button from "./Button";

// hardcoded availability data below
// eventually feed this data into Table component to create a table
// to emulate the calendar/table of available dates in Doodle 
const getData = () => [
  {
    // the date 
    Date: "Sept. 21 2022 8:30am (EST)",
    // number of people available that date
    number: 1,
    // person a and their availability that day 
    a: 'y',
    // person b and their availability that day 
    b: 'n',
    // person c and their availability that day 
    c: 'n',
    // instantiate a Button component (./button)
    // button which toggles from "No" to "Yes" to "Maybe"
    me: <Button></Button>
  },
  {
    Date: "Sept. 22 2022 8:30am (EST)",
    number: 0,
    a: 'n',
    b: 'n',
    c: 'n',
    me: <Button></Button>
  },
  {
    Date: "Sept. 23 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 24 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 25 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 26 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 27 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 28 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 29 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
  {
    Date: "Sept. 30 2022 8:30am (EST)",
    number: 3,
    a: 'y',
    b: 'y',
    c: 'y',
    me: <Button></Button>
  },
];

function App() {
  // name the columns in the table by "Header", and access the hardcoded data fields above using "accessor"
  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "Others available",
        accessor: "number"
      },
      {
        Header: "a's availability",
        accessor: "a",
      },
      {
        Header: "b's availability",
        accessor: "b",
      },
      {
        Header: "c's availability",
        accessor: "c",
      },
      {
        Header: "my availability ",
        accessor: "me",
      }
    ],
  );
  // this memoizes data so we don't have to constantly reload entries (possibly from a database)
  // but is not really necessary since we hardcoded data above anyway
  const data = React.useMemo(() => getData(), []);
  
  // instantiate a Table component 
  // populate the table with the columns and data defined above 
  return (
    <div>
      <h1>
        Doodle 2.0
      </h1>
      <h4>
        *Click the "Others available" column head to sort dates by number of other people already available!
      </h4>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;