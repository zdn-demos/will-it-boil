import React from 'react';
export function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil, you fool.</p>;
  }
}