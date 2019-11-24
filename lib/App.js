import draw2d from '@sarhanalaa/draw2d'
import elements from '../lib/elements'

export default function createApp( canvasContainerId, width, height ) {
    const canvas = new draw2d.Canvas( canvasContainerId, width, height )
    canvas.setScrollArea('#'+canvasContainerId)

    canvas.installEditPolicy(new draw2d.policy.canvas.CanvasPolicy({
        onMouseDown: function(canvas) {
            const selection = canvas.getSelection()

            if (selection) {
                selection.each(function (i, figure) { figure.toFront() } )
            }
        }
    }))

    return {
        canvas,
        elements,
        draw2d
    }
}
