import { linkImages } from '../assets'

function Link() {
  return (
    <div className='img-con'>
      <a
        target='blank'
        href='https://www.linkedin.com/in/mercy-taiwo-002b26131/'
      >
        <img src={linkImages.link} alt='' />
      </a>
      <a target='blank' href='https://github.com/Kennyt3'>
        <img src={linkImages.git} alt='' />
      </a>
      <a target='blank' href='https://www.instagram.com/mercy.taiwo/'>
        <img src={linkImages.insta} alt='' />
      </a>
    </div>
  )
}

export default Link
