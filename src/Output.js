import React from 'react'
import OutputRow from './OutputRow'

const Output = (props) => {
return(
<div>
<OutputRow value={props.answer} textSize={{fontSize: '32px'}}/>
<OutputRow value={props.user} textSize={{fontSize: '32px'}}/>
</div>
)

}
export default Output ;
