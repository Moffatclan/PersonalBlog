import React from 'react'
import Poem from 'components/Poem'
import {Link} from 'gatsby'
import Layout from 'components/Layout'

const Advent = () => {
    return(
<Layout title='Advent  | Seasons of Thought | D.S. Chapman' path="/poetry/seasons-of-thought/advent/">
    <Poem title='Advent'>
        {`There is a cold we cannot shake–
        caught in the air, imprisoned   
        in the wood of the bedroom floor–   
        It spreads its iron chains  
        till it freezes our lungs.  
        Our feet lose all their feeling.  
 
        There is a cold we cannot shake   
        even after we come inside   
        shedding frozen air like a coat.  
        It settles in our chests,   
        freezes our lips when we cough.   

        We are the frozen people,   
        caught with a cold that lingers    
        even in the heat of summer.  
        Our toes and tongue ache for warm  
        freedom, long evaporated.  

        There is still warmth–  
        lingering in a loaf of bread,  
        woven between the glass of wine  
        and conversation over dinner.  
        The ice remains to our core,  

        warmed for a passing moment,  
        but aching for a great thaw,
        for the warmth of blankets and stoves,
        the thawing of lips and feet–
        longing for the coming of a flame.`}
</Poem>
<p><em>This poem is found in the collection <Link to="poetry/seasons-of-thought">Seasons of Thought</Link></em></p>
</Layout>
    )
}
export default Advent