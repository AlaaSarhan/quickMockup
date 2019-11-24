import draw2d from '@sarhanalaa/draw2d'
import Container from '../draw2d/shape/composite/Container'

const titleLabelEditor = new draw2d.ui.LabelInplaceEditor()

const createWindow = ({
    height = 480,
    title = 'Window',
    titleBarColor = '#333',
    titleBarBgColor = '#999',
    width = 640,
}) => {
    const window = new Container({
        bgColor: 'rgba(255, 255, 255, .5)',
        stroke: 1,
        width,
        height
    })

    const titleBarLabel = new draw2d.shape.basic.Label({
        bgColor: titleBarBgColor,
        text: title,
        fontColor: titleBarColor,
        stroke: 0,
        height: 24,
        width
    })

    window.add(titleBarLabel, new draw2d.layout.locator.XYAbsPortLocator(0, 0))

    window.on('dblclick', () => { titleLabelEditor.start(titleBarLabel) })

    return window
}

export default createWindow
