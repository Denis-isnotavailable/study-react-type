import React from 'react';
import { SharedLayoutStyled } from './SharedLayout.styled';

const SharedLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SharedLayoutStyled>{children}</SharedLayoutStyled>
    );
};

export default SharedLayout;