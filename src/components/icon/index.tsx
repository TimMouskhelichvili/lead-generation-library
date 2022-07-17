import React, { ReactElement } from 'react';
import { IIcon } from 'src/interfaces/IIcon';
import { IconSVG } from './style';

interface IProps {
	icon: IIcon;
}

/**
 * The Icon component.
 * @param {IProps} props - The props.
 */
export const Icon = (props: IProps): ReactElement => (
    <IconSVG>
        <path fill={'currentColor'} d={props.icon.data} />
    </IconSVG>
);