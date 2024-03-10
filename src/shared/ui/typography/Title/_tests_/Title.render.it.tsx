import { render, screen } from '@testing-library/react';
import Title from '@/shared/ui/typography/Title/Title.tsx';


export default () => {
    render(<Title>Simple</Title>);
    screen.getByRole('heading');
    screen.getByText('Simple');
}