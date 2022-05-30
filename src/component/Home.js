import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


function Home (){
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://localhost:7119/unSubmitted")
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const data = await response.json()
      //console.log(data)
      setStudents(data)
    }
    catch (err){
      setErr(err.message);
    }
    finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    fetchData()
  }, [])
    // <div>
    //   {students.length > 0 && (
    //     <ul>
    //       {students.map(student => (
    //         <li key={student.studentId}>student id:{student.studentId} first name:{student.firstName} last name:{student.lastName} nation:{student.nation}</li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

    const DownloadCSV = async () => {
      setIsLoading(true);
  
      try {
        const response = await fetch("https://localhost:7119/ExportToCSV");
  
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('result is: ', JSON.stringify(result, null, 4));
        // https://exerror.com/failed-to-load-resource-neterr-http2-protocol-error-for-react-app-after-upg/
  
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    const SubmitStudents = async () => {
      setIsLoading(true);
  
      try {
        const requestOptions = {
          method: 'PUT'
      };
        const response = await fetch("https://localhost:7119/SubmitStudents", requestOptions); 
  
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        setErr("Users Submitted");
        // const result = await response.json();
        // console.log('result is: ', JSON.stringify(result, null, 4));
  
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    return (
        <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Student ID</StyledTableCell>
              <StyledTableCell align="left">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Nation&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student.studentId}>
                <StyledTableCell align="left">{student.studentId}</StyledTableCell>
                <StyledTableCell align="left">{student.firstName}</StyledTableCell>
                <StyledTableCell align="left">{student.lastName}</StyledTableCell>
                <StyledTableCell align="left">{student.nation}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        {isLoading && <h2>Loading...</h2>}
        {err && <h2>{err}</h2>}
        <Button variant="outlined" onClick={DownloadCSV}>Download unSubmitted CSV</Button>
        <Button variant="contained" onClick={SubmitStudents}>Submit Students</Button>
  
        </div>
    );
}
 
export default Home;