import { Send } from "@mui/icons-material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Container>
      <Typography
        variant="h5"
        component="p"
        align="center"
        gutterBottom={true}
        sx={{ backgroundColor: "aliceblue", color: "yellowgreen" }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        recusandae dolore, quisquam laborum consectetur ad delectus cum rerum
        vero aspernatur non molestias accusamus doloremque perspiciatis ut
        possimus numquam sapiente repudiandae.
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained" onClick={() => console.log('clicked')}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br/>
      <Button variant="contained" disabled>Disabled Contained</Button>
      <Button variant="contained" disableElevation> Contained</Button>
      <br/>
      <Button variant="contained" onClick={() => console.log('clicked')} color='error' size='small'>Contained</Button>
      <br/>
      <Button variant="contained" sx={{
        backgroundColor:'gray',
        color:'yellowgreen',
        "&:hover": {
          backgroundColor:'yellowgreen',
        color:'gray',
        }
      }}> My Button</Button>
      <br/>
      <br/>
      <Button variant="contained" endIcon={<Send/>}>Send</Button>

    </Container>
  );
}

export default App;
