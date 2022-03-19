import * as React from 'react';
interface PropsI {
	text: string;
}
export const Button = ({ text }: PropsI) => {
	return <button>{text}</button>;
};
