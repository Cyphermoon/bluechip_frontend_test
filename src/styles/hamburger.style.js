import styled from 'styled-components'

export const StyledNavBottom = styled.span`
    top:0px
`
export const StyledNavMiddle = styled.span`
    top:5px;
`
export const StyledNavTop = styled.span`
    top:10px
`

export const StyledIcon = styled.div`
    min-height: 18px;
    position:relative;
    z-index:10;
    cursor:pointer;
    width: 1.75rem;

    & > *{
        position:absolute;
        background-color:${({ theme }) => theme.colors.gray_500};
        width:100%;
        opacity:1;
        border-radius:15px;
        height:2px;
        display:inline-block;
        transition:all 200ms linear;
        transform-origin:left center;
        left:0;
    }

    ${StyledNavMiddle}{
            width:80%
    }

    &.opened{

        ${StyledNavTop}{
            transform:rotate(45deg);
            top:-3px
        }
       
        ${StyledNavMiddle}{
            transform:translateX(-70%);
            opacity:0;
        }

        ${StyledNavBottom}{
         
            justify-self:flex-start;
            transform:rotate(-45deg);
            top:19px;
        }
    }`
