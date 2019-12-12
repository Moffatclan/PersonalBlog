import React from 'react'
import Poem from 'components/Poem'
import {Link} from 'gatsby'
import Layout from 'components/Layout'

const Sunset = () => {
    return(
<Layout title='Sunset | Seasons of Thought | D.S. Chapman' path="/poetry/seasons-of-thought/sunset/">
    <Poem title='Sunset'>
        {`Drained, dropping, the screen is fading,
        music ending, bar is closing.
Final curtain call is coming.
Light is waning. Light is waning.

Water falling without purpose
sometimes frozen, sometimes soaking,
freezing one day, hot the other.
Drums keep playing. Light is waning.

Words continue through the darkness–
movie kisses, backstage lovers–
silence in the writer’s workshop
save a tapping through the shadow.

Light is fading over ocean
as one lover leaves the gangplank.
Ship is casting off at nightfall.
Love is constant. (Is it waning?)

Love is constant, through the waning
though its form is always changing,
shining though the curtain closes
even when it never opens.

Drain a life to dregs of sadness
it will echo to a rhythm.
Feet are tapping, lips are thrumming
even while this light is waning.`}
</Poem>
<p><em>This poem is found in the collection <Link to="poetry/seasons-of-thought">Seasons of Thought</Link></em></p>
</Layout>
    )
}
export default Sunset