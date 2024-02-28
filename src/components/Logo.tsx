import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import LogoImage from '@/images/logo.png'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-24 w-24 ">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.483409 77.6044L12.5422 17.845C12.7306 16.9117 13.5506 16.2406 14.5027 16.2406H20.9881C22.2485 16.2406 23.1947 17.3924 22.9501 18.6289L12.3489 72.1982C12.1042 73.4347 13.0504 74.5865 14.3109 74.5865H43.5473C44.5047 74.5865 45.3278 73.908 45.5105 72.9682L46.8771 65.9407C47.1171 64.706 46.1716 63.5589 44.9138 63.5589H24.5423C23.2803 63.5589 22.3338 62.4045 22.5811 61.167L34.4828 1.60809C34.6696 0.673088 35.4905 0 36.444 0H61.8744C63.1417 0 64.0894 1.16366 63.833 2.40474L56.0846 39.901C55.8281 41.1421 56.7759 42.3058 58.0432 42.3058H77.5187C78.7943 42.3058 79.744 43.4839 79.4731 44.7305L75.7238 61.9836C75.524 62.9031 74.7103 63.5589 73.7694 63.5589H67.4125C66.156 63.5589 65.2107 62.4137 65.4488 61.1799L67.6646 49.6973C67.9027 48.4634 66.9574 47.3183 65.7009 47.3183H46.9641C45.7058 47.3183 44.7601 46.1702 45.0011 44.9352L52.4834 6.5936C52.7244 5.35861 51.7787 4.21053 50.5204 4.21053H46.18C45.2247 4.21053 44.4028 4.88612 44.2178 5.82335L34.2855 56.1592C34.0416 57.3953 34.9877 58.5464 36.2476 58.5464H56.4288C57.6968 58.5464 58.6448 59.7113 58.387 60.9529L54.7638 78.4065C54.5711 79.3346 53.7534 80 52.8055 80H2.44389C1.1804 80 0.233486 78.8429 0.483409 77.6044Z"
              fill={invert ? 'white' : '#1D63FF'}
            />
          </svg>
        </div>

        <h1
          className={clsx(
            'ml-2 hidden font-display text-lg font-bold sm:ml-4 sm:flex sm:text-4xl',
            invert ? 'text-white' : 'text-[#1D63FF]',
          )}
        >
          LogicLeaps
        </h1>
      </div>
    </>
  )
}
