import React from 'react'
import Header from './Header'
import {MDXProvider} from "@mdx-js/tag"
import {Body,Content,H2,Poem,Stanza} from '../styles/StyledComponents'
import { S_Link } from './GatsbyComponents';


const Template = ({ children, pageContext}) => {
    const {frontmatter} = pageContext
    return( 
    <MDXProvider>
        <Body>
            <Header />
            <Content>
            <H2>{frontmatter.title}</H2>
            <div>{children}</div>
            
            </Content>
        </Body>
    </MDXProvider>

    )
}

export default Template