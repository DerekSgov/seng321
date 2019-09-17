import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import TeamMember from './TeamMember/TeamMember'

export const TeamGrid = styled.section`
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    width: 150px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 980px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 680px) {
        grid-template-columns: 1fr 1fr;
    }
`

const OurTeam = ({ people }) => (
    <TeamGrid>
        {people.map(teamMember => (
            <TeamMember key={teamMember.position} person={teamMember} />
        ))}
    </TeamGrid>

)

OurTeam.propTypes = {
    people: PropTypes.array.isRequired,
}

export default OurTeam