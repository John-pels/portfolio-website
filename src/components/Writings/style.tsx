import styled from "styled-components";

export const WritingContainer = styled.section`
background: linear-gradient(148.04deg, #EDEBE8 16.7%, #EDECF3 38.56%, #E9EFF3 57.56%);

`


export const Blog = styled.div`
grid-row:span 3;
`

export const BlogTitle = styled.h3`
font-family:${({ theme }) => theme.fontFamilies.manhope.medium};
font-size:1.125em;
line-height: 22px;
margin-bottom:10px;


${({ theme }) => theme.media.md} {
font-size:1em;
}
`

export const BlogDescription = styled.article`
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};
font-size:1em;
line-height: 25px;

${({ theme }) => theme.media.md} {
font-size:0.9em;
}
`
