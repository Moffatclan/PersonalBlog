/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { InternalLink, InternalNotesLink } from '../layout/links'
import { bpMaxMD } from '../../lib/breakpoints'

const Nav = styled.nav`
  padding-top: 6rem;
  background: white;
  max-width: 12.5%;

  position: absolute;
  overflow-y: scroll;
  z-index: 1;
  top: 0;
  left: 0;

  ul {
    padding: 0;
    margin: 0;

    font-size: 1rem;
    li {
      display: block;
    }
  }
  ${bpMaxMD} {
    display: none;
  }
`

export default function NoteNav() {
  const data = useStaticQuery(graphql`
    query {
      notes: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/Dendron/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            id
            title
          }
          slug
        }
      }
    }
  `)
  // Let's get these values in a form that's easier to manage
  let notes = data.notes.nodes.map((note) => {
    return {
      id: note.frontmatter.id,
      title: note.frontmatter.title,
      slug: note.slug.substring(note.slug.lastIndexOf('/') + 1),
      hierarchies: note.slug
        .substring(note.slug.lastIndexOf('/') + 1)
        .split('.'),
    }
  })
  //Now let's sort it based on the slug field
  notes = notes.sort((a, b) => {
    if (a.slug > b.slug) {
      return 1
    } else if (a.slug < b.slug) {
      return -1
    }
  })

  let topHierarchies = []

  for (let index = 0; index < notes.length; index++) {
    //check if we already created a top level hierarchy
    if (
      !topHierarchies.some(
        (hierarchy) => hierarchy.parent.slug === notes[index].hierarchies[0]
      )
    ) {
      //check if the top level note is published (because we sorted the list if it exists it should be first) if not insert a dummy object
      if (notes[index].slug === notes[index].hierarchies[0]) {
        topHierarchies.push({ parent: notes[index], children: [] })
      } else {
        topHierarchies.push({
          parent: {
            slug: notes[index].hierarchies[0],
            title: notes[index].hierarchies[0],
            id: 404,
          },
          children: [notes[index]],
        })
      }
    } else {
      topHierarchies[
        topHierarchies.findIndex(
          (x) => x.parent.slug === notes[index].hierarchies[0]
        )
      ].children.push(notes[index])
    }
  }

  console.log(topHierarchies)

  return (
    <Nav>
      {topHierarchies.map((hierarchy) => {
        if (hierarchy.parent.id === 404) {
          return (
            <details key={hierarchy.parent.id}>
              <summary>{hierarchy.parent.title}</summary>
              <ul>
                {hierarchy.children.map((note) => {
                  return (
                    <li key={note.id}>
                      <InternalLink to={`/notes/${note.id}`}>
                        {note.title}
                      </InternalLink>
                    </li>
                  )
                })}
              </ul>
            </details>
          )
        } else {
          return (
            <details key={hierarchy.parent.id}>
              <summary>
                <InternalLink to={`/notes/${hierarchy.parent.id}`}>
                  {hierarchy.parent.title}
                </InternalLink>
              </summary>
              <ul>
                {hierarchy.children.map((note) => {
                  return (
                    <li key={note.id}>
                      <InternalLink to={`/notes/${note.id}`}>
                        {note.title}
                      </InternalLink>
                    </li>
                  )
                })}
              </ul>
            </details>
          )
        }
      })}
    </Nav>
  )
}
