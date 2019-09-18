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
                        <p>AidConnect has a system that connects disaster victims with aid organizations’ information. AidConnect’s system can be unreliable in post-disaster situations when critical infrastructure is damaged. This cripples the ability of aid organizations to communicate with each other and provide food, clean water, social support, and medical assistance to disaster victims. It also cripples the ability of disaster victims to connect with the aid organizations. AidConnect wants to make our data more accessible to victims and deliver it reliably to their mobile devices.</p>
                    </PostBody>
                </PostContent>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default ProblemStatement