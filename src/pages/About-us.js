import React from 'react'

import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { PostContent, PostBody } from '../components/common/Posts'
import OurTeam from '../components/common/OurTeam/OurTeam'
import { TEAM_MEMBERS } from '../constants/TeamMembers'

const AboutUs = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent>
                <PostContent>
                    <Title>About Us</Title>
                    <PostBody>
                        <OurTeam people={TEAM_MEMBERS}/>
                    </PostBody>
                </PostContent>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default AboutUs