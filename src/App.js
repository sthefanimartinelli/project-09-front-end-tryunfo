import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo,
    isSaveButtonDisabled: true,
  };

  validateFields = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const minAttrValue = 0;
    const maxAttrValue = 90;
    const maxTotalAttrValue = 210;
    const validateName = cardName.length !== 0;
    const validateDescription = cardDescription.length !== 0;
    const validateImage = cardImage.length !== 0;
    const validateRare = cardRare.length !== 0;
    const validateAttr1 = parseInt(cardAttr1, 10)
      <= maxAttrValue && parseInt(cardAttr1, 10) >= minAttrValue;
    const validateAttr2 = parseInt(cardAttr2, 10)
      <= maxAttrValue && parseInt(cardAttr2, 10) >= minAttrValue;
    const validateAttr3 = parseInt(cardAttr3, 10)
      <= maxAttrValue && parseInt(cardAttr3, 10) >= minAttrValue;
    const validateMaxAttrs = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) <= maxTotalAttrValue;
    this.setState({
      isSaveButtonDisabled: !(validateName && validateDescription && validateImage
        && validateRare && validateAttr1 && validateAttr2 && validateAttr3
          && validateMaxAttrs),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateFields);
  };

  onSaveButtonClick = () => {

  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
