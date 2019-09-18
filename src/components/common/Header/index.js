import styled from "@emotion/styled"

export const SiteHeader = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    background-color: black;
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(/images/Earth-Satalite-View.png);
`

export const SiteMast = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SiteMastIcon = styled.div`
    display: flex;
    align-items: center;
    margin-left: -10px;
    :last-child {
        padding-right: 0;
    }
`

export const ACLogo = styled.img`
    height: 50px;
    margin: -5px 0 0;
`