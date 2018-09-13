import React from 'react';

export const SectionHeader = props => {
	return (
            <h4 className="clearfix mb-15" style={{borderBottom: '1px solid #ddd', padding: '5px', ...props.style}}>
            	{props.children}
            </h4>
	)
}