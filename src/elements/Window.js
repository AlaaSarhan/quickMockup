import Container from '../shape/composite/Container.js'

const titleLabelEditor = new draw2d.ui.LabelInplaceEditor()

function Window({
    height = 480,
    title = 'Window',
    titleBarColor = '#333',
    titleBarBgColor = '#999',
    width = 640
} = {}) {
    this.name = 'quickMockup.Window'

    this.titleBarLabel = new draw2d.shape.basic.Label({
        bgColor: titleBarBgColor,
        text: title,
        fontColor: titleBarColor,
        stroke: 0,
        height: 24,
        width
    })
    this.titleBarLabel.on('dblclick', () => { titleLabelEditor.start(this.titleBarLabel) })

    this.figure = new Container({
        bgColor: 'rgba(255, 255, 255, .5)',
        stroke: 1,
        width,
        height
    })

    this.figure.add(this.titleBarLabel, new draw2d.layout.locator.XYAbsPortLocator(0, 0))
}

export default Window
