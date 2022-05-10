import React from 'react'
import { Key } from './Key';
import _ from 'lodash';
import { VALID_KEYS, NOTES, KEY_TO_NOTE, NOTE_TO_KEY } from './global/constants';

class Piano extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pressedKeys: [],
      keyColor: getComputedStyle(document.documentElement).getPropertyValue('--color-key')
    }
  }

  playNote = (note) => {
    if(!_.isEmpty(note)){
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.currentTime = 0;
      noteAudio.play();
      setTimeout(() => {
        noteAudio.pause();
      }, 1000);
    }
  }

  adaptColor = (key) => {
    // let compStylesKey = getComputedStyle(key)
    // console.log(compStylesKey.getPropertyValue('background-color'))
    // console.log(key.title)
    if (key.title.endsWith('0') || key.title.endsWith('1')){
      if (key.title.endsWith('_0') || key.title.endsWith('_1')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#CC0000')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#FF9999')
        })
      }
    }
    else if (key.title.endsWith('2')){
      if (key.title.endsWith('_2')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#CC6600')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#FFCC99')
        })
      }
    }
    else if (key.title.endsWith('3')){
      if (key.title.endsWith('_3')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#CCCC00')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#FFFF99')
        })
      }
    }
    else if (key.title.endsWith('4')){
      if (key.title.endsWith('_4')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#00CC00')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#99FF99')
        })
      }
    }
    else if (key.title.endsWith('5')){
      if (key.title.endsWith('_5')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#00CC66')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#99FFCC')
        })
      }
    }
    else if (key.title.endsWith('6')){
      if (key.title.endsWith('_6')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#00CCCC')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#99FFFF')
        })
      }
    }
    else if (key.title.endsWith('7') || key.title.endsWith('8')){
      if (key.title.endsWith('_7') || key.title.endsWith('_8')){
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#0066CC')
        })
      }
      else{
        this.setState({
          keyColor: document.documentElement.style.setProperty('--color-key', '#99CCFF')
        })
      }
    }
  }

  handleClick = (event) => {
    const keys = document.querySelectorAll('.key')
    keys.forEach(key =>{
      key.classList.remove('pressed')
      if(key === event.target){
        key.classList.add('pressed')
        this.adaptColor(key)
        this.playNote(key.title) 
      }
    }) 
  }
  
  handleKeyDown = (event) => {
    if(event.repeat){
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...this.state.pressedKeys];
    console.log(updatedPressedKeys)
    if(!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    this.setState({
      pressedKeys: updatedPressedKeys,
    });
    const index = this.state.pressedKeys.indexOf(event.key);
    if(index > -1){
      this.setState(state => ({
        pressedKeys: state.pressedKeys.splice(index, 1)
      }));
    }
    this.playNote(KEY_TO_NOTE[key]);
  }

  handleKeyUp = (event) => {
    const index = this.state.pressedKeys.indexOf(event.key);
    if(index > -1){
      this.setState(state => ({
        pressedKeys: state.pressedKeys.splice(index, 0)
      }));
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('click', this.handleClick);
  }
  
  render() {
    const keys = _.map(NOTES, (note, index) => {
      return (
        <Key
          key={index} 
          note={note}
          // pressedKeys={this.state.pressedKeys}
          isPressed={this.state.pressedKeys.includes(NOTE_TO_KEY[note])}
          color={this.state.keyColor}
          onClick={this.handleClick}
        />
      );
    });

    const audioFiles = NOTES.map((note, index) => {
      return (
        <audio 
        id={note}
        key={index}
        src={`../../notes/${note}.mp3`}
        />
      )
    })

    return (
      <>
        <div className='piano'>
          {keys}
        </div>
        <div>
          {audioFiles}
        </div>
      </>
    )
  }
}

export { Piano };