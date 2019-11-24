import draw2d from '@sarhanalaa/draw2d'

/**
 * This is a raft that has a slightly stronger influence on its aboard figures.
 *
 * Concretely, this means:
 * - it brings aboard elements toFront as well when toFront is called on the raft element
 *
 * The need for this extension might completely deminish if we switch to using
 * strong composition or child relationship for containment relationship.
 */
export default draw2d.shape.composite.Raft.extend({
    toFront: function (figure) {
        const aboardFigures = this.getAboardFigures(this.isInDragDrop)

        this._super(figure)

        aboardFigures.each(function(i, figure) { figure.toFront() })
    }
})
