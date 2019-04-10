import Handsontable from 'handsontable'
import css from 'handsontable/dist/handsontable.full.css'

export const run = ({ state, element, events, iteration }) => {
  const styles = document.createElement('style')
  styles.innerHTML = css
  element.appendChild(styles)
  
  const container = document.createElement('div')
  element.appendChild(container)
  const hot = new Handsontable(container, {
    data: state.data,
    rowHeaders: true,
    colHeaders: true,
    // use 'non-commercial-and-evaluation' for non commercial use
    licenseKey: state.licenseKey
  })
}

