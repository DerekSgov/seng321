import styled from "@emotion/styled"

export const SiteHeader = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    background-color: black;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/header-image.jpg);
    background-size: 100%;
    background-position: center;
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
export const LogoHolder = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    margin: auto;
`
export const HeaderLogo = styled.img`
    height: 200px;
    align-items: center;
    margin: 0 auto;
`