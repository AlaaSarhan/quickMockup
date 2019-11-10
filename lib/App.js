import draw2d from '@sarhanalaa/draw2d'
import elements from '../lib/elements'

export default function createApp( canvasContainerId, width, height ) {
    const canvas = new draw2d.Canvas( canvasContainerId, width, height )

    return {
        canvas,
        elements,
        draw2d
    }
}
