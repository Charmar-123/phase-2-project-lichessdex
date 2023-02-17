// Bootstrap components imports
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



const TournamentCard = ({ name, description, url, rounds, handleSelectRound }) => {

    // Use tournament data and seperate into alreadyy played rounds, and upcoming rounds

    let finishedGames = [];
    let unFinishedGames = [];

    rounds.forEach((round) => {
        if (round.finished === true) {
            finishedGames.push(
                <option key={round.id} value={round.id}>{round.name}</option>
            )
        } else {
            unFinishedGames.push(
                <option key={round.id} value={round.id}>{round.name}</option>
            )
        }
    })


    const onChangeRound = (roundID, roundName) =>{
        handleSelectRound(roundID, roundName)
        
    }



    return (
        <Card style={{ width: '26rem', margin: '2rem'}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link target="_blank" href={url}>Card Link</Card.Link>
                <Container>
                    <Row>
                        <Col>
                            <h6>Finished Games</h6>
                            <Form.Select 
                            style={{ width: "9rem" }}

                            // To retrieve the selected options name.
                            onChange={e => {onChangeRound(e.target.value, e.target.options[e.target.selectedIndex].text)}}
                            >
                                {finishedGames}
                            </Form.Select>
                        </Col>
                        <Col>
                            <h6>Upcoming Games</h6>
                            <Form.Select 
                            aria-label="Default select example" 
                            style={{ width: "9rem" }} 
                            // onChange={e => onChangeRound(e.target.value)}
                            >
                                {unFinishedGames}
                            </Form.Select></Col>

                    </Row></Container>

            </Card.Body>
        </Card>
    );
}

export default TournamentCard;


