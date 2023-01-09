import Link from './Link'
function Footer({ bgColor, color, text }) {
  const footerStyle = {
    background: bgColor,
    color: color,
  }
  return (
    <footer style={footerStyle} className='foot'>
      <div>
        <h1>&#169; {text}</h1>
        <Link />
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text: ': Team Kernel',
  color: '#fff',
  bgColor: '#FF6A95',
}

export default Footer
