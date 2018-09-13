import React from 'react';

export const TextVerticalMiddle = props => {
   const {className, style, width, marginTop, text} = props;

   return (
      <div className={className} style={{position: 'relative', ...style}}>
         <div style={{float: 'left', width: width, position: 'absolute', top: '50%', marginTop: marginTop}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <div style={{writingMode: 'vertical-lr'}}>{text}</div>
            </div>
         </div>
         {props.children}
      </div>
   );
}