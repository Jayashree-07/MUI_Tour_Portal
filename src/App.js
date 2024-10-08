// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import RightBar from './Components/RightBar';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Box>
    <Navbar/>
    <Container maxWidth='xl'>
      <Stack direction="row" spacing={2} justifyContent={'space-between'} >
      <Menu/>
      <Content/>
      <RightBar/>
      </Stack>
    </Container>
    </Box>
  );
}

export default App;
