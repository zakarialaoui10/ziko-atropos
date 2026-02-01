import { Atropos } from 'ziko-atropos'
import { tags } from 'ziko/ui'

globalThis.a = Atropos(
    tags.div().style({
        width : '100%',
        height : '100%',
        background : 'blue',
        borderRadius : '25px'
    })
).style({
    border : '2px darkblue dotted',
    width : '400px',
    height : '300px',
    margin : '20px auto',
    borderRadius : '25px'
})
a.mount(document.body)