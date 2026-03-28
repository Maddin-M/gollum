$(document).ready(() => {
  // ace editor dark mode
  // see: https://github.com/gollum/gollum/issues/1656#issuecomment-785096494
  if (window.ace && window.ace_editor) {
    window.ace.config.setModuleUrl("ace/theme/twilight", "http://ajaxorg.github.io/ace-builds/src-noconflict/theme-twilight.js")
    window.ace_editor.setTheme("ace/theme/twilight")
    window.ace_editor.setOption("showPrintMargin", false)

    // change default height and make vertically resizable
    window.ace_editor.container.style.height = "600px"
    window.ace_editor.container.style.resize = "vertical"
    window.ace_editor.container.style.overflow = "auto"
    window.ace_editor.resize()
  }
  // mermaid dark mode
  if (mermaid) {
    mermaid.initialize({ theme: "dark" })
  }
})
