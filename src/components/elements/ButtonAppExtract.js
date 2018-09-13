import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {FontAwesome} from './FontAwesome';

export const ButtonAppExtract = props => {
   return (
      <Button onClick={props.onClick} style={{background: '#EEE', width: '150px', height:'90px', margin: '15px'}}>
         <FontAwesome icon="plus" themeSize="3x" style={{color: '#fff'}} />
      </Button>
   )
}

export const ButtonAppExtracted = styled(Button)`
   width: 150px;
   height: 90px;
   margin: 15px;
   span.preview {
      display: block;
      text-align: left;
      font-size: 12px;
      span, strong {
         display: block;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
      }
   }
`;