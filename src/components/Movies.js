import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3CCE3C67240CCED70FD7DB26B3EB62B762ABDD3835CCAACEDC670FC0EB907C3F/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D7257D43A0A61CC9F2DB2DE4670DC8D9D1F85BC7E6C84F3D066792965E00C2E/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3CCE3C67240CCED70FD7DB26B3EB62B762ABDD3835CCAACEDC670FC0EB907C3F/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D81CFC0AB36129E290B4A78224FBD4CE0FC6FFABF59539B0FDD9D844F25EBA4/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4D7257D43A0A61CC9F2DB2DE4670DC8D9D1F85BC7E6C84F3D066792965E00C2E/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr))
`

const Wrap = styled.div`
    border-radius: 13px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.1);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        
    }
`