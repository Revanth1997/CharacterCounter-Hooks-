import {Count, Characters} from './styledComponents'

const CountDetails = props => {
  const {charactersList} = props
  const {character} = charactersList
  return (
    <Count>
      <Characters>
        {character} : {character.length}
      </Characters>
    </Count>
  )
}

export default CountDetails
