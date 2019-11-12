import draw2d from '@sarhanalaa/draw2d'

const createWindow = ({
    height = 480,
    title = 'Window',
    titleBarColor = '#333',
    titleBarBgColor = '#999',
    width = 640,
}) => {
    const window = new draw2d.shape.composite.Raft({
        stroke: 1,
        width,
        height
    })

    const titleBar = new draw2d.shape.basic.Rectangle({
        bgColor: titleBarBgColor,
        stroke: 0,
        height: 24,
        width
    })

    const titleBarLabel = new draw2d.shape.basic.Label({
        text: title,
        fontColor: titleBarColor,
        stroke: 0
    })

    window.add(titleBar, new draw2d.layout.locator.XYRelPortLocator(0, 0))
    window.add(titleBarLabel, new draw2d.layout.locator.XYRelPortLocator(0, 0))

    return window
}

export default createWindow
