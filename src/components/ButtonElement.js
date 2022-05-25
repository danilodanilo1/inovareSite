import {Link} from 'react-scroll'
import styled from 'styled-components'
export const ButtonN = styled.button`
    border-radius:50px;
    background: #d4aa00ff;
    white-space:nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: '#010606';
    font-family: 'Roboto', 'sans-serif';
    font-weight: bold;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    min-width: 200px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #eac631;
        outline:none;
    }
`

export const Button = styled(Link)`
    border-radius:50px;
    background: ${({ primary }) => (primary ? '#eac631' : '#010606')};
    white-space:nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ?'#fff' : '#eac631')};
        
    }
`