import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Router>
            {children}
        </Router>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }