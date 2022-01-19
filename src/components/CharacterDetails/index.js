import {useState, useEffect} from 'react'
import {v4 as uuid} from 'uuid'
import CountDetails from '../CountDetails'
import {
  Container,
  AppContainer,
  CharacterHeading,
  CharactersInput,
  AddButton,
  CountContainer,
  CountHeading,
  Image,
  CharactersList,
} from './styledComponents'

const CharacterDetails = () => {
  const [character, setCharacter] = useState('')
  const [charactersList, setCharactersList] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    if (charactersList.length === 0) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }, [charactersList.length])

  const onAdd = () => {
    setCharactersList([
      ...charactersList,
      {
        id: uuid(),
        character,
      },
    ])
    setCharacter('')
  }

  return (
    <AppContainer>
      <Container>
        <CharacterHeading>Character Counter</CharacterHeading>
        <CharactersInput
          value={character}
          onChange={e => setCharacter(e.target.value)}
          type="text"
          placeholder="Enter the Characters here"
        />
        <AddButton type="button" onClick={onAdd}>
          Add
        </AddButton>
      </Container>
      <CountContainer>
        <CountHeading>Count the characters like a Boss...</CountHeading>
        {isEmpty && (
          <Image
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        )}
        {!isEmpty && (
          <CharactersList>
            {charactersList.map(eachCharacter => (
              <CountDetails
                id={eachCharacter.id}
                key={eachCharacter.id}
                charactersList={eachCharacter}
              />
            ))}
          </CharactersList>
        )}
      </CountContainer>
    </AppContainer>
  )
}

export default CharacterDetails
