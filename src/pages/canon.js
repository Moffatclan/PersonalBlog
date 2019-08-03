/** @jsx jsx */
import {React,useState} from 'react'
import {mq, mainTheme} from "../components/styles"
import {H2,Content,Body} from '../components/StyledComponents'
import Header from '../components/Header'
import styled from '@emotion/styled'
import {jsx,css} from '@emotion/core'
import {Social} from '../components/social'

const CanonList = [
    {
        title:"Four Quartets",
        author:"T.S. Eliot",
        medium:"book",
        text:"Language and pure meaning interwoven as only T.S. Eliot can - incomprehensible in its clarity, as poignant when you don't understand it as when you think you do.",
        link:"www.goodreads.com/book/show/80410.Four_Quartets",
    },
    {
        title:"The Lord of the Rings",
        author:"J.R.R. Tolkien",
        medium:"book", 
        text:"The first book to teach me that there can be more to great stories than fun plot. Prose that demands to be read aloud, a world that lives on beyond the page, and a vision of the good in the world that's worth fighting for.",
        link:"https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings",
    },
    {
        title:"Saint George and the Dragon",
        author:"Margaret Hodges",
        medium:"book",
        text: "A picture book dedicated to artistry. The story of Saint George's legendary battle against a dragon is told in parallel with the story of a ship sailing out to sea in side panels. From a young age this framed the way I see good and evil, heroes and villains. It also introduced me to layered stories, stories within stories that together manage to tell something more.",
        link:"https://www.goodreads.com/book/show/10118.Saint_George_and_the_Dragon"
    },
    {
        title:"Farther Along",
        author:"Josh Garrels",
        medium:"song",
        author: "Josh Garrels",
        text: `"There's so much more to life than we've been told /
        It's full of beauty that will unfold /
        And shine like you struck gold my wayward son /
        That deadweight burden weighs a ton /
        Go down into the river and let it run /
        And wash away all the things you've done /
        Forgiveness alright."`,
        link:"https://open.spotify.com/album/3jrVFS6lW7HvxOKN7QPQC8"
    },
    {
        title:"Blessings (ii)",
        author:"Chance the Rapper",
        medium:"song",
        author:"Chance the Rapper",
        text: `"I speak of promised lands / 
        Soil as soft as momma's hands /
        Running water, standing still /
        Endless fields of daffodils and chamomile" ... 
        "I speak to God in public, I speak to God in public /
        He keep my rhymes in couplets"`,
        link: "https://open.spotify.com/track/5IdQEHgtmj9th3OkfQKhf8?si=IJl1ndjMTKCawYIr1AeJ_Q"
    },
    {
        title:"The Wheel of Time",
        author:"Robert Jordan",
        medium:"book",
        text: "This series is monolithic in many ways. One story slowly unveiled across 14 books, perhaps too slowly at times. Truly a masterclass in building a world and story together.",
        link:"https://www.goodreads.com/series/41526-the-wheel-of-time"
    },
    {
        title:"Star Trek: Deep Space Nine",
        author:"Rick Berman & Michael Piller",
        medium:"tv",
        text: "A vibrant look at the frontier of space. Darker than other Star Trek series, but also full of life, complex heroes, and likable rogues. The first vision of the future that truly captured my imagination.",
        link:"https://www.imdb.com/title/tt0106145/"
    }

]

function Canon() {
    const Container = styled.div(
        `
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        `
    )
    const [sort, setSort] = useState("title")
    let list = CanonList
    const SelectSort = () => {
        return (


            <form>
                <label>Sort By:</label>
                <select onChange={e => setSort(e.target.value)} value={sort}>
                    <option value="none">-- Select --</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="medium">Medium</option>
                    <option value="author">Author</option>
                </select>
                
            </form>

        )
    }

    switch(sort) {
        case "title":
            list = list.sort((a,b) => SortTitle(a,b));
                break;
        case "medium":
            list = list.sort((a,b) => SortMedium(a,b));
            break;
        case "author":
            list = list.sort((a,b) => SortAuthor(a,b));
            break;
        case "default":
            break;
        }

    
    return(
       <div className="Canon">
            <H2>Personal Canon</H2>
            <p>These are the things that influence how I think and work.
                The giants whose shoulders I clamber onto. 
                The melodies I don't want to stop humming.
            </p>
            <SelectSort />
            <Container>
                {list.map((item, index) => 
                    <CanonItem 
                    key={index}
                    title={item.title}
                    author={item.author}
                    medium={item.medium} 
                    text={item.text}
                    link={item.link}
                    author={item.author}
                    />
                )}
            </Container>
            <p>This page was inspired by <a href="https://www.brendanschlagel.com/2017/11/05/canonize-creating-personal-canon-template/">this blog post</a> by Brendan Schlagel. 
                    I borrowed heavily from <a href="https://github.com/bschlagel/canonize/blob/master/webpage/style-light.css">his source code</a> in creating this page.
            </p>
            </div>
        

    )
}

function CanonItem(props) {
    const {medium, title, text, category, link, author} = props
    let icon
    switch(medium){
        case "book":
            icon="📖";
            break;
        case "song":
            icon="🎵";
            break;
        case "movie":
            icon="🎥";
            break;
        case "tv":
            icon="📺";
            break;
        default:
            icon="⁉️";
            break;
    }

    const Item = styled.div(
        `
        display: block;
        float: left;
        text-align: left;
        box-sizing: border-box;
        margin: 0 3% 20px 0;
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        transition: all .25s;
        width: 30%;
        min-width: 275px;
        min-height:300px;
        &: hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        };
        padding-top:1rem;
        `
    )


    const Icon = styled.div(
        `
        font-size:2em;
        text-align: center;
        `
    )
    
    const Title = styled.h3(
        `
        text-align: center;
        margin-bottom: .25rem;
        `
    )

    const Author = styled.h4(
        `
        padding:0;
        margin:0;
        text-align:center;
        `
    )

    const Description = styled.p(
        `
        padding: 15px 20px;
        text-align: center;
        `
    )

    const ItemLink = styled.a(
        `
        text-decoration:none;
        color: ${mainTheme.text};
        &:hover {
            color: ${mainTheme.text};
            text-decoration:none;
            opacity: .8;
            -webkit-transition: all -webkit-transform .25s;
            transition: all .25s;
        };
        `
    )

    return(
        <Item>
            <ItemLink href={link}>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <Author>{author}</Author>
                <Description>{text}</Description>
            </ItemLink>
        </Item>
    )
}

function SortTitle (a,b){
    let titleA = a.title.toUpperCase(); // ignore upper and lowercase
    let titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
    return -1;
    }
    if (titleA > titleB) {
    return 1;
    }

    // names must be equal
    return 0;
}

function SortAuthor (a,b){
    let authorA = a.author.toUpperCase(); // ignore upper and lowercase
    let authorB = b.author.toUpperCase(); // ignore upper and lowercase
    if (authorA < authorB) {
    return -1;
    }
    if (authorA > authorB) {
    return 1;
    }

    // names must be equal
    return 0;
}

function SortMedium (a,b){
    let A = a.medium.toUpperCase(); // ignore upper and lowercase
    let B = b.medium.toUpperCase(); // ignore upper and lowercase
    if (A < B) {
    return -1;
    }
    if (A > B) {
    return 1;
    }

    // names must be equal
    return 0;
}

const Layout = () => {

    return(
        <Body>
            <Header title={"Personal Canon - D.S. Chapman - The things that influence me"} path={"/canon/"} />
            <Content>
                <Canon />
                <Social />
            </Content>
        </Body>
    )
}

export default Layout