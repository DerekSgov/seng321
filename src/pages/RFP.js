import React from 'react'

import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { PostContent, PostBody } from '../components/common/Posts'

const RFP = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent>
                <PostContent>
                    <Title>Request for Proposal</Title>
                    <PostBody>
                        <p>Here at AidConnect, we have created a request for proposal to solve our <a href="/Problem-Statement">problem</a> at hand, <a href="/images/RFPTemplate.pdf">click here to view the proposal!</a> We look forward to working with the team who can help us solve our problem and provide aid to disaster victims in need!</p>
                    </PostBody>
                </PostContent>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default RFP