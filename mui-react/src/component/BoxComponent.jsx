import React from 'react';
import { Box } from '@material-ui/core';
export const BoxComponent = () => {
    return (
        <Box>
                <h2>box design</h2>
            <Box>
            <Box  width={500} component="section" boxShadow={7}  padding={2}>
                    <h1>Box</h1>
                    <p>The Box component serves as a wrapper component for most of the CSS utility needs.</p>
            </Box>
            <Box width={500} component="section" boxShadow={7} padding={2}>
                    <h1>Box</h1>
                    <p>The Box component serves as a wrapper component for most of the CSS utility needs.</p>
            </Box>
            <Box width={500} component="section" boxShadow={7} padding={2}>
                    <h1>Box</h1>
                    <p>The Box component serves as a wrapper component for most of the CSS utility needs.</p>
            </Box>
            <Box width={500} component="section" boxShadow={7} padding={2}>
                    <h1>Box</h1>
                    <p>The Box component serves as a wrapper component for most of the CSS utility needs.</p>
            </Box>
            </Box>
        </Box>
    )
}
