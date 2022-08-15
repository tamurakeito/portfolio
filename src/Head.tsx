import React from "react"
import { Helmet } from "react-helmet"

const Head = ({props}:{props: string}) => {
    const title: string = props
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
        </Helmet>
    )
}

export default Head