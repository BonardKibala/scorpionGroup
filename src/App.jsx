import './App.css';
import { Icon, Header, Image, Container, Grid, Segment, Form, Card, Input } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import jeremie from './images/jeremie.png'
import bnrd from './images/bnrd.png'
import deko from './images/deko.png'
import nathan from './images/nathan.png'
import bams from './images/bams.png'
import tond from './images/tond.png'; import gala from './images/gala.png'; import ruth from './images/ruth.png';
import jonas from './images/jonas.png'; import skofild from './images/skofild.png'; import isaac from './images/isaac.png';
import jonathan from './images/jonathan.png'; import rico from './images/rico.png'; import ami from './images/ami.png';
import joe from './images/joe.png'


const scorpionsMembers = [{ name: "Bonard Kibala", image: bnrd, email: "kibalabonard1@gmail.com", role: "Vice-président et Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Jérémie Dagbiatima", image: jeremie, email: "jeremiedagbia@gmail.com", role: "Président Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Emmanuel Deko", image: deko, email: "emmanueldeko@gmail.com", role: "membre et Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Nathan Kayembe", image: nathan, email: "nathankayembe@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Benjamin Bamwishi", image: bams, email: "benjaminbamwishi@gmail.com", role: "Secrétaire et Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Benjamin Tondase", image: tond, email: "benjamintondase@gmail.com", role: "membre et Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Prescillia Gala", image: gala, email: "prescilliagala@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Ruth Maguga", image: ruth, email: "ruthmaguga@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Jonas Kayembe", image: jonas, email: "jonaskayembe@gmail.com", role: "membre et Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Emmanuel Nguahele", image: skofild, email: "emmanuelskofild@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Isaac Morisho", image: isaac, email: "morishomushaba@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Jonathan Mupene", image: jonathan, email: "jonathanmupene@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Joe Kimbuya", image: joe, email: "joekimbuya@gmail.com", role: "membre et Co-fondateur de l'équipe Scorpion Technology" },
{ name: "Rico Kisoka", image: rico, email: "kisokarico@gmail.com", role: "membre de l'équipe Scorpion Technology" },
{ name: "Ami Nzuzi", image: ami, email: "aminzuzi@gmail.com", role: "membre de l'équipe Scorpion Technology" }
]
const App = () => {
  const [members, setMembers] = useState(scorpionsMembers)
  const [search, setSearch] = useState(members)
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    setMembers(scorpionsMembers)
    setSearch(scorpionsMembers)
    // setLoading(false)
  }, [])
  const handleChange = (e) => {
    e.preventDefault()
    let nameSearch = e.target.value.toUpperCase()

    const searchResult = members.filter(result => {
      return result.name.toUpperCase().includes(nameSearch)
    })
    setSearch(searchResult)
  }

  return <div className="principalContainer">
    {
      <div>
        <Header as='h1' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content className="title">Scorpion Technology members</Header.Content>
        </Header>
        <Container className="container">
          <Grid columns="equal" className="grid">
            <Grid.Column width={16} className="gridcolumn">
              <Segment color="grey" className="segment">
                <Form>
                  <Form.Field className="form">
                    <Input icon={<Icon name='search' circular link />} className="inputSearch"
                      placeholder='Search...'
                      placeholder="Recherche par nom" onChange={(e) => handleChange(e)} />
                  </Form.Field>
                </Form>
                {/* {JSON.stringify(members)} */}
                {/* {JSON.stringify(search)} */}
                <div className="cardContainer">
                  {
                    search.map((scorpionMember, index) => <div>
                      <Card key={index} className="card">
                        <Image src={scorpionMember.image} wrapped ui={true} />
                        <Card.Content>
                          <Card.Header className="header">{scorpionMember.name}</Card.Header>
                          <Card.Meta>
                            <span className='date'>Scorpion Technology Enterprise</span>
                          </Card.Meta>
                          <Card.Description>
                            {scorpionMember.role}
                          </Card.Description>
                        </Card.Content>
                        <Card.Content >
                          <a>
                            <Icon name='user' />
                            {scorpionMember.email}
                          </a>
                        </Card.Content>
                      </Card> <br></br>
                      {/* <Cardrobot key={index} src={`https://robohash.org/${scorpionMember.id}`} name={scorpionMember.name} email={scorpionMember.email} /> */}
                    </div>)
                  }
                </div>

              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    }
    <div className="footer">
    </div>
  </div>
}

export default App;
