import {Component} from 'react'
import {
  MainAppComponent,
  Heading,
  FormComponent,
  MemeContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  CustomButton,
  MemeMobileDisplay,
  DisplayText,
  FormMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    optionId: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    inputTopText: '',
    inputBottomText: '',
    selectFont: '',
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeFontValue = event => {
    this.setState({optionId: event.target.value})
  }

  onAddChangesContainer = event => {
    event.preventDefault()
    const {optionId, topText, bottomText, imageUrl} = this.state
    this.setState({
      backgroundImage: imageUrl,
      inputTopText: topText,
      inputBottomText: bottomText,
      selectFont: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      imageUrl,
      inputBottomText,
      inputTopText,
      selectFont,
      topText,
      bottomText,
      optionId,
    } = this.state

    return (
      <MainAppComponent>
        <MemeContainer>
          <Heading>Meme Generator</Heading>
          <FormMemeContainer>
            <MemeMobileDisplay
              data-testid="meme"
              backgroundImage={backgroundImage}
            >
              <DisplayText selectFont={selectFont}>{inputTopText}</DisplayText>
              <DisplayText selectFont={selectFont}>
                {inputBottomText}
              </DisplayText>
            </MemeMobileDisplay>
            <FormComponent onSubmit={this.onAddChangesContainer}>
              <CustomLabel htmlFor="image">Image URL</CustomLabel>
              <CustomInput
                placeholder="Enter the Image URL"
                type="text"
                value={imageUrl}
                id="image"
                onChange={this.onChangeImage}
                autoComplete="off"
              />
              <CustomLabel htmlFor="topText">Top Text</CustomLabel>
              <CustomInput
                placeholder="Enter the Top Text"
                type="text"
                id="topText"
                value={topText}
                onChange={this.onChangeTopText}
                autoComplete="off"
              />
              <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
              <CustomInput
                placeholder="Enter the Bottom Text"
                type="text"
                id="bottomText"
                value={bottomText}
                onChange={this.onChangeBottomText}
                autoComplete="off"
              />
              <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
              <CustomSelect
                id="fontSize"
                value={optionId}
                onChange={this.onChangeFontValue}
              >
                {fontSizesOptionsList.map(eachItem => (
                  <CustomOption
                    key={eachItem.optionId}
                    value={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </CustomOption>
                ))}
              </CustomSelect>
              <CustomButton type="submit">Generate</CustomButton>
            </FormComponent>
          </FormMemeContainer>
        </MemeContainer>
      </MainAppComponent>
    )
  }
}

export default MemeGenerator
