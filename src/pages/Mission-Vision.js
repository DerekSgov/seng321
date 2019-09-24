import React from 'react'

import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { PostContent, PostBody } from '../components/common/Posts'

const MissionAndVision = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent>
                <PostContent>
                    <Title>Our Mission</Title>
                    <PostBody>
                        <p>As post-disaster relief can be chaotic due to the nature of the situation, our mission is to provide disaster victims with efficient and reliable ways to connect to the aid they require.</p>
                    </PostBody>
                    <Title>Our Vision</Title>
                    <PostBody>
                        <p>Connecting with relief and getting aid shouldn't be the hardest part of being a disaster victim. At AidConnect, our vision is that of a world where, relief services work together and, getting aid is no longer the hardest aspect of surviving in a disaster situation.</p>
                    </PostBody>
                </PostContent>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default MissionAndVision