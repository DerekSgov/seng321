import React from 'react'
import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { Link } from 'gatsby'

const Contact = () => (
    <Layout>
        <ContainerDiv>
            <ArticleContent>
                <section className="post-full-content">
                    <Title>Contact</Title>
                    <h2>Have any questions?</h2>
                    <p>Feel free to reach us through our contact email: AidConnect@outlook.com</p>
                    <h2>Found an issue with the site?</h2>
                    <p>Make a pull request or create an issue on Github <Link href={`https://github.com/DerekSgov/sen321/issues`}>here</Link></p>
                </section>
            </ArticleContent>
        </ContainerDiv>

    </Layout>
)

export default Contact