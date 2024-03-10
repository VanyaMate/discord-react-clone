import { render, screen } from '@testing-library/react';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import React from 'react';


export default () => {
    const textButton: string = 'Button';
    render(<Button>{ textButton }</Button>);
    screen.getByRole('button');
    screen.getByText(textButton);
}