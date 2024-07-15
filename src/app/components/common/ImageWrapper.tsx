import { BASE_PATH_IMAGE } from '@/constants/configuration'
import Image, { ImageProps } from 'next/image'
import React from 'react'

const env = process.env.NODE_ENV

export default function ImageWrapper(props: ImageProps) {
    return (
        <Image {...props} src={`${props.src}`} />
    )
}
