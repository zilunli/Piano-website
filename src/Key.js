import _ from 'lodash';
import { NOTE_TO_KEY } from './global/constants';
import React from 'react'

// class Key extends React.Component {

//   keyIsBlack = (note) => {
//     return note.length > 2;
//   }

//   keyIsPressed = (note, pressedKeys) => {
//     return _.includes(pressedKeys, NOTE_TO_KEY[note]);
//   }

//   render() {
//     let keyClassName = "key";
//     const keyIsBlack = this.keyIsBlack(this.props.note);
//     const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);
//     if(keyIsBlack){
//       keyClassName += " black";
//     }
//     if(keyIsPressed){
//       keyClassName += " pressed";
//     }
  
//     let key
//     if(keyIsBlack){
//       // Dont display note label
//       key = (
//         <div className={keyClassName} title={this.props.note}></div>
//       )
//     } else {
//       key = (      
//         <div className={keyClassName} title={this.props.note}>
//           <div className='key-text'>
//             {this.props.note}
//           </div>
//         </div>
//       )
//     }
//     return key
//   }
// }

function Key ({note, isPressed}) {

  let keyClassName = 'key'
  const isBlack = note.length > 2
  if(isPressed){
    keyClassName += " pressed"
  }
  if(isBlack){
    keyClassName += " black";
    return (<div className={keyClassName} title={note}></div>)
  }
  return (
  <div className={keyClassName} title={note}>
    <div className='key-text'>
      {note}
    </div>
  </div>
  )
}

export { Key };
