import elements from './elements/index.js'

function QuickMockupApp( canvasContainerId, width, height ) {
    this.elements = elements
    this.canvas = new draw2d.Canvas( canvasContainerId, width, height )
    this.canvas.setScrollArea('#'+canvasContainerId)

    this.canvas.installEditPolicy(new draw2d.policy.canvas.CanvasPolicy({
        onMouseDown: function(canvas) {
            const selectedFigure = canvas.getPrimarySelection()
            if (selectedFigure && selectedFigure !== canvas.getFigures().last()) {
                canvas.getPrimarySelection().toFront()
            }
        }
    }))
}

export default QuickMockupApp
