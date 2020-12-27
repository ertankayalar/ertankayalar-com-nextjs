export default function Expertise() {
  return (
    <div className='w-full flex flex-row flex-wrap py-5 bg-gray-50 rounded my-5'>
      <div className='w-full text-center text-strong-dark font-bold py-10'>
        <h2 className='text-xl'>My Expertise</h2>
      </div>
      <div className='w-full md:w-1/2 flex mb-5 md:mb-0'>
        <div className='w-1/6 flex justify-center'>
          <div className='mx-auto my-3'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='mobile'
              className='h-12 w-12 md:h-16 md:w-16 text-gray-300'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'
              ></path>
            </svg>
          </div>
        </div>
        <div className='w-5/6 text-base  text-gray-500'>
          <h2 className='text-lg text-primary font-medium'>
            Frontend Development
          </h2>
          <p className='h-28 md:h-32 pt-1'>
            I'm huge fan of React.js/Next.js and Tailwind CSS for frontend
            tasks. I love rapid development and quick solutions.
          </p>
          <div className='text-sm my-5  bottom-0'>
            <p className='font-semibold text-gray-400'>I USE:</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-y-1 mt-2'>
              <span>React</span>
              <span>Next</span>
              <span>Webpack</span>
              <span>Sass</span>
              <span>Less</span>
              <span>Tailwind CSS</span>
              <span>Bootstrap</span>
              <span>Git</span>
              <span>Javascript</span>
              <span>Yarn</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex'>
        <div className='w-1/6 flex'>
          <div className='my-3 mx-auto'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='server'
              className='h-12 w-12 md:h-16 md:w-16 text-gray-300'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z'
              ></path>
            </svg>
          </div>
        </div>
        <div className='w-5/6 text-md text-gray-500  md:pl-2'>
          <h2 className='text-lg text-primary font-medium'>
            Backend Development
          </h2>
          <p className='h-36 md:h-32 pt-1 '>
            I'm a PHP developer more than decade. I can build backend
            applications with Symfony or Laravel. Even WordPress themes and
            plugins. But also I'm learning Python/Django on these days.
          </p>
          <div className='text-sm my-5'>
            <p className='font-semibold text-gray-400'>I USE:</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-y-1  mt-2'>
              <span>Symfony</span>
              <span>Laravel</span>
              <span>NodeJS</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
