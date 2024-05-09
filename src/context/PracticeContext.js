import React, { createContext, useState } from 'react'
const TestContext = createContext();

const PracticeContext = ({ children }) => {
    const [value, setValue] = useState(1);
    return (
        <TestContext.Provider value={{ value, setValue }}>
            {children}
        </TestContext.Provider>
    )
}

export { TestContext, PracticeContext }