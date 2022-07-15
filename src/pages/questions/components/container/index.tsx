import React, { ReactElement } from 'react';
import { ContainerTitle, ContainerContent, ContainerButtons } from './style';

interface IProps {
	title: string;
	selected: string[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
}

/**
 * The Container component.
 * @param {IProps} props - The props.
 */
export const Container = (props: IProps): ReactElement => {
    return (
        <div>
            <ContainerTitle>{props.title}</ContainerTitle>
            <ContainerContent>
                {props.children}
            </ContainerContent>
            <ContainerButtons>
                <button>previous</button>
                <button>next</button>
            </ContainerButtons>
        </div>
    );
};