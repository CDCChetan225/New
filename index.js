import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Home = () => {
  const [secret, setSecret] = useState('');
  const [secrets, setSecrets] = useState([]);

  const handlePostSecret = () => {
    if (secret.trim() !== '') {
      setSecrets([...secrets, { message: secret }]);
      setSecret('');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={10} className="mb-4">
          <Card>
            <Card.Body>
              <Form> 
                <Form.Group controlId="formSecret">
                  <Form.Label>Your Secret Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type your secret here..."
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary m-3" onClick={handlePostSecret}>
                  Post Secret
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={10}>
          <h2>Secrets Shared by Others</h2>
          {secrets.length === 0 ? (
            <p>No secrets shared yet.</p>
          ) : (
            <ul className="list-group">
              {secrets.map((s, index) => (
                <li key={index} className="list-group-item">
                  <strong>Anonymous:</strong> {s.message}
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

// import React, { useState } from 'react';
// import { Container, Grid, TextField, Button, Card, Typography } from '@mui/material';

// const Home = () => {
//   const [secret, setSecret] = useState('');
//   const [secrets, setSecrets] = useState([]);

//   const handlePostSecret = () => {
//     if (secret.trim() !== '') {
//       setSecrets([...secrets, { message: secret }]);
//       setSecret('');
//     }
//   };

//   return (
//     <Container mt={5}>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3}>
//             <Container p={3}>
//               <Typography variant="h5" mb={3}>
//                 Share Your Secret
//               </Typography>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={4}
//                 variant="outlined"
//                 placeholder="Type your secret here..."
//                 value={secret}
//                 onChange={(e) => setSecret(e.target.value)}
//               />
//               <Button variant="contained" color="primary" mt={3} onClick={handlePostSecret}>
//                 Post Secret
//               </Button>
//             </Container>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3}>
//             <Container p={3}>
//               <Typography variant="h5" mb={3}>
//                 Secrets Shared by Others
//               </Typography>
//               {secrets.length === 0 ? (
//                 <Typography variant="body1">No secrets shared yet.</Typography>
//               ) : (
//                 <ul>
//                   {secrets.map((s, index) => (
//                     <Typography key={index} variant="body1" mb={1}>
//                       <strong>Anonymous:</strong> {s.message}
//                     </Typography>
//                   ))}
//                 </ul>
//               )}
//             </Container>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Home;
