function init( toobarId, canvasId ) {
    // canvas
    const app = new LibQMock('canvas')
    const win = new app.elements.Window({ title: "I'm window", width: 400, height: 400 })
    const win2 = new app.elements.Window({ title: "I'm inside window", width: 200, height: 200 })
    app.canvas.add(win2.main, 200, 200)
    app.canvas.add(win.main, 100, 100)
    app.canvas.add(new draw2d.shape.basic.Label({ text: "I'm inside inner window", bgColor: 'grey'}), 230, 230)

    window.addEventListener('keyup', (e) => {
        switch(e.key) {
            case 'y':
                e.ctrlKey && app.canvas.getCommandStack().redo()
                break
            case 'z':
                e.ctrlKey && app.canvas.getCommandStack().undo()
                break
        }
    })

    // toolbar
    const toolbar = new draw2d.Canvas('toolbar')
    let y = 32
    Object.keys(app.elements).forEach(key => {
        const element = new app.elements[key]({ width: 160, height: 160 })
        toolbar.add(element.main, 32, y);
        y += 176
    })
}
