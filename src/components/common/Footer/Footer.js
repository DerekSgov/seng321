import React from 'react'
import PropTypes from 'prop-types'
import { FooterNavDiv, SiteFooter, Disclaimer } from '.'
import { NavItem } from '../Navigation'
import { ContainerDiv } from '..'

const Footer = ({ data }) => (
    <SiteFooter>
        <ContainerDiv>
            <FooterNavDiv>
                {data.map(navItem => (
                    <NavItem to={navItem.to} key={navItem.text}>{navItem.text}</NavItem>
                ))}
                <Disclaimer>
                    <p>Disclaimer: This not a real company, this website exists only for a school project</p>
                </Disclaimer>
            </FooterNavDiv>
        </ContainerDiv>
    </SiteFooter>
)

Footer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default Footer