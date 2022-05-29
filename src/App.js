import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'


function App() {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState([])
  console.log(quote);
  const randomQuote = () => {
    const index = Math.floor(Math.random() * (quotes.length + 1) )
    setQuote(quotes[index])
  }
  useEffect(() => {
    axios(process.env.REACT_APP_API)
      .then(response => setQuotes(response.data))
  }, [])

  useEffect(() => {
    randomQuote()
  }, [quotes])

  return (
    <>
    <Container>
      <Card dark>
        <Author >
         {`~ ${quote?.author || 'non Author'}`}
        </Author>
        <Text>
          "{quote?.text}"
        </Text>
        <Button onClick={randomQuote}>Next</Button>
      </Card>
    </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100vh;
  color: tomato;
  background-color: ${props => props.dark ? 'black' : 'grey'}
`
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding-top: 2em;
  padding-bottom: 0.5em;
  width: 20em;
  background-color: ${props => props.dark ? 'black' : 'grey'};
  border-radius: 0.25em;
  &:hover {
    box-shadow: .1em .3em 1em tomato;
  }
`

const Text = styled.div`
  width: 100%;
  text-align: ${props => props.textAlign || 'center'};
  padding: 1em;
  font-size: 1.5em;
  background-color: ${props => props.dark ? 'black' : 'grey'}
`
const Author = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 1em;
  padding-bottom: 0.2em;
`

const Button = styled.button`
  margin: 1em;
  background-color: silver;
  height: calc((1vw+1vh)*3);
  width: calc((1vw+1vh)*8);
  font-size: calc((1vw+1vh)*2.5);
  border: none;
  border-radius: 0.2em;
  &:hover {
    transform: scale(1.2);
    filter: invert(100%);
    transition: 0.5s;
  }
`