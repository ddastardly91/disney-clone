import React from 'react'
import styled from 'styled-components'
import HoverVideoPlayer from 'react-hover-video-player';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="/videos/1564674844-disney.mp4"
                    pausedOverlay={<img src="/images/viewers-disney.png" alt="" />}
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="/videos/1564676714-pixar.mp4"
                    pausedOverlay={<img src="/images/viewers-pixar.png" alt="" />}
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="/videos/1564676115-marvel.mp4"
                    pausedOverlay={<img src="/images/viewers-marvel.png" alt="" />}
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="videos/1608229455-star-wars.mp4"
                    pausedOverlay={<img src="/images/viewers-starwars.png" alt="" />}
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="/videos/1564676296-national-geographic.mp4"
                    pausedOverlay={<img src="/images/viewers-national.png" alt="" />}
                />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    padding: 30px 0 26px;
    justify-content: space-between;
    
`

const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 13px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;
    display: flex;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: #2B3041;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.1);
        border-color: rgba(249, 249, 249, 0.8);
        z-index: 10;
    }

`