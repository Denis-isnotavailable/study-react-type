import styled from "@emotion/styled";
import { ImPencil, ImFolderDownload, ImBin } from "react-icons/im";

type IconProps = {
  ishead?: string  
}

export const NotesListStyled = styled.table`
    width: 100%;
    margin: 0 auto 30px;
    text-align: center;
    border-spacing: 0px 10px;

    thead {
        background-color: #9d9c9c;
    }

    td,
    th {
        padding: 5px;
    }

    th:first-of-type {    
        border-top-left-radius: .3rem;
        border-bottom-left-radius: .3rem;
    }

    th:last-child {    
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }

    td {
        max-width: 100px;
        height: 30px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        
    }
`;

export const IconsListStyled = styled.ul`
    display: flex;
    justify-content: end;

    li:not(:last-child) {
        margin-right: 5px;
    }

`;

export const RedactIconStyled = styled(ImPencil)<IconProps>`
    width: 24px;
    height: 20px;
    fill: ${p => p.ishead ? "#ffffff" : "#9d9c9c"};

    cursor: ${p => !p.ishead && "pointer"};
    transition: fill 250ms linear;
    
    :hover {
        fill: ${p => !p.ishead && "#000000"};
    }
`;

export const ArchiveIconStyled = styled(ImFolderDownload)<IconProps>`
    width: 24px;
    height: 20px;
    fill: ${p => p.ishead ? "#ffffff" : "#9d9c9c"};

    cursor: ${p => !p.ishead && "pointer"};
    transition: fill 250ms linear;

    :hover {
        fill: ${p => !p.ishead && "#000000"};
    }
`;

export const DeleteIconStyled = styled(ImBin)<IconProps>`
    width: 24px;
    height: 20px;
    fill: ${p => p.ishead ? "#ffffff" : "#9d9c9c"};

    cursor: ${p => !p.ishead && "pointer"};
    transition: fill 250ms linear;

    :hover {
        fill: ${p => !p.ishead && "#000000"};
    }
`;