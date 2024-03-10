import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Button from '@/shared/ui/buttons/Button/Button.tsx';
import { expect } from 'vitest';
import css from '@/shared/ui/buttons/Button/Button.module.scss';


export default async () => {
    let onClickWorks: string      = '';
    let onClickAsyncWorks: string = '';

    const onClickHandler = function (_: React.MouseEvent<HTMLButtonElement>, data: string) {
        onClickWorks = data;
    };

    const onClickAsyncHandler = function (_: React.MouseEvent<HTMLButtonElement>, data: string) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                onClickAsyncWorks = data;
                resolve();
            }, 500);
        });
    };

    render(
        <>
            <Button
                onClick={ onClickHandler }
                data={ 'sync works' }
            >
                OnClick
            </Button>
            <Button
                onClickAsync={ onClickAsyncHandler }
                data={ 'async works' }
            >
                OnClickAsync
            </Button>
        </>,
    );

    const onClickButton: HTMLButtonElement      = screen.getByText('OnClick');
    const onClickAsyncButton: HTMLButtonElement = screen.getByText('OnClickAsync');

    onClickButton.click();
    expect(onClickWorks).toBe('sync works');

    onClickAsyncButton.click();
    expect(onClickAsyncWorks).not.toBe('async works');

    await waitFor(() => {
        expect(onClickAsyncButton.classList.contains(css.loading)).toBe(true);
    });
    await waitFor(() => {
        expect(onClickAsyncButton.classList.contains(css.loading)).toBe(false);
    });

    expect(onClickAsyncWorks).toBe('async works');
}