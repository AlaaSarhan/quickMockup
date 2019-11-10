import draw2d from '@sarhanalaa/draw2d'

const createWindow = ({
    height = 480,
    title = 'Window',
    titleBarColor = '#333',
    titleBarBgColor = '#999',
    width = 640,
}) => {
    const window = new draw2d.shape.layout.FlexGridLayout({
        columns: 'grow',
        rows: '20px, grow',
        stroke: 1,
        width,
        height,
        zIndex: 1
    })

    const titleBar = new draw2d.shape.basic.Label({
        bgColor: titleBarBgColor,
        text: title,
        fontColor: titleBarColor,
        stroke: 0,
        width,
        zIndex: 2
    })

    const windowContent = new draw2d.shape.composite.Raft({ zIndex: 2, stroke: 0 })

    window.add(titleBar, {row: 0, col: 0})
    window.add(windowContent, {row: 1, col: 0})

    return window
}

export default createWindow
