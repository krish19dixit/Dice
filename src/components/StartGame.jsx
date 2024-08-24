import styled from "styled-components";
const StartGame = () => {
    return (
        <Container>
            <div>
            <img src="/images/Dices.png" />
            </div>
            
            <div>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
max-width: 1180px;
display: flex;
height: 100vh;
margin: 0 auto;
align-items: center;
`;
const Button = styled.button`
padding: 10px 18px ;
background-color: #000000;
color: white;
border-radius: 5px ;
min-width: 220px;
border: none;
`;