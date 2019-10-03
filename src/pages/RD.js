import React from 'react'

import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { PostContent, PostBody } from '../components/common/Posts'

const RD = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent>
                <PostContent>
                    <Title>Requirements Document Feedback</Title>
                    <PostBody>
                        <p>A big thanks to Angle Engineering for taking on our RFP!</p>
                        <p>We enjoyed reading it and look forward to working more with them in the future, click <a href="/images/RD1.1.pdf">here to view our feedback.</a></p>
                    </PostBody>
                </PostContent>
            </ArticleContent>
        </ContainerDiv>
    </Layout>
)

export default RD