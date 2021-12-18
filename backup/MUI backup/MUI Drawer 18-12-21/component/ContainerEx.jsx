import React from 'react'
import {Box,Container,Typography} from '@material-ui/core'
export const ContainerEx = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <Box  pt={5} textAlign="center">
                    <Typography color="secondary" variant="h3" >Welcome</Typography>
                    <Typography align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cum deserunt aperiam quasi quam, optio soluta facilis unde placeat deleniti ullam, enim officia impedit eveniet incidunt? Doloremque velit eligendi adipisci rerum illum quae aperiam aspernatur neque autem natus omnis ipsum, maiores iusto commodi eveniet! Officiis cum maxime aliquam sunt illo voluptas omnis laudantium nemo ipsum harum voluptatum, eius repudiandae nostrum delectus? Mollitia quae nobis, porro impedit voluptatem nostrum dolorem cum repellat! Odit aperiam enim nulla rerum, consequuntur qui delectus unde minus voluptatum quas beatae alias ea molestias assumenda culpa velit quis atque. Neque officiis ab maiores sunt ex quidem repellat.</Typography>
                </Box>
            </Container>
        </div>
    )
}
