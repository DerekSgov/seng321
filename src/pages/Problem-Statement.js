import React from 'react'

import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { PostContent, PostBody } from '../components/common/Posts'

const ProblemStatement = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent>
                <PostContent>
                    <Title>Problem Statement</Title>
                    <PostBody>
                        <p>At AidConnect, we agknowledge that post-disaster communication and organization can be chaotic and hampering the efforts to help those in need. NGOs and Governmental agencies often miscommunicate and experience issues with providing essential services, such as food and clean water centers, medical assistance and more, with provisions being under or over utilized depending on the location. Due to the natural chaos of the situation and lack of means to access current information on relief efforts, the people these organizations aim to help often struggle to find the aid they require.</p>
                    </PostBody>
                </PostContent>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default ProblemStatement