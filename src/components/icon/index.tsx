import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement } from 'react';
import { IconSVG } from './style';

interface IProps {
	icon: IconDefinition;
	className?: string;
}

/**
 * The Icon component.
 * @param {IProps} props - The props.
 */
export const Icon = (props: IProps): ReactElement => (
    <IconSVG 
        focusable={'false'} 
        role={'img'} 
        xmlns={'http://www.w3.org/2000/svg'}
        className={props.className}
        viewBox={`0 0 ${props.icon.icon[0]} ${props.icon.icon[1]}`}>
        <path fill={'currentColor'} d={props.icon.icon[4] as string} />
    </IconSVG>
);