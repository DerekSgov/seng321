import React from 'react'
import PropTypes from 'prop-types'
import { HeadShot, EmployeeName, EmployeePosition, EmployeeDiv } from '.'

const TeamMember = ({ person }) => (
    <EmployeeDiv>
        {person.image_url &&
                    <HeadShot style={{
                        backgroundImage: `url(${person.image_url})` ,
                    }}></HeadShot>}
        <EmployeeName>{person.name}</EmployeeName>
        <EmployeePosition>{person.position}</EmployeePosition>
    </EmployeeDiv>
)

TeamMember.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image_url: PropTypes.string,
        position: PropTypes.string.isRequired,
    }).isRequired,
}

export default TeamMember
