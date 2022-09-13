import { Send } from "@mui/icons-material";
import { Container, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const StyledButton = styled(Button)(({theme}) => ({
  backgroundColor:'gray',
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor:'yellowgreen',
          color:'gray',
        }
}))

function App() {
  return (
    <Container>
     
      <br/>

      <StyledButton variant="contained"> My Button</StyledButton>
      <br/>
      <Button variant='contained'>Default Button</Button>
      

    </Container>
  );
}

export default App;
