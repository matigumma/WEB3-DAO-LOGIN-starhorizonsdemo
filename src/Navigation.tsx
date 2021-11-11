import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';

export const Navigation: FC = () => {
        const { wallet, connecting, connected } = useWallet();
    return (
      <main>
        <div
          id="nav"
          className="fixed inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out bg-transparent border-b border-transparent text-primary-content text-base-content"
        >
          <div className="mx-auto space-x-1 navbar max-w-none">
            <div className="flex-none">{/**/}</div>{' '}
            <div className="flex items-center flex-none">
              <a
                href="/"
                aria-current="page"
                className=" pl-2 font-mono text-xs opacity-80"
                aria-label="Homepage"
              >
                <div data-tip="star horizons" className="tooltip tooltip-bottom">
                  <span className="hidden lg:inline xl:ml-2">demo solana wallet login</span>
                </div>
              </a>
            </div>{' '}
            <a
              href="/#"
              target="_blank"
              rel="nofollow noreferrer"
              className="hidden pl-2 font-mono text-xs opacity-80"
            >
              <div className="inline-block text-3xl font-title text-primary">
                  <span className="uppercase text-base-content">SH</span>
                </div>
            </a>{' '}
            <div className="flex-1" />{' '}

            {!connecting && connected && wallet && <WalletDisconnectButton className="lg:btn-lg btn btn-ghost" />}
            <div title="Github ↗︎" className="items-center flex-none">
              <a
                aria-label="Github"
                target="_blank"
                href="https://github.com/matiasgumma/starhorizonsdemo"
                rel="noopener noreferrer"
                className="normal-case btn btn-ghost drawer-button btn-square"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="inline-block w-6 h-6 fill-current"
                >
                  <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>{' '}
        <div>
          <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-neutral-focus via-primary to-neutral-focus text-primary-content">
            
            <div className="inline-block w-full transform scale-125 opacity-5 -rotate-12 text-neutral">
              {/* ?xml version="1.0" encoding="UTF-8"? */}
              <span>STAR HORIZONS</span>
            </div>{' '}
            <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
              <h1 className="py-4 mb-2 font-extrabold text-center font-title lg:py-10 lg:py-0">
                <div className="text-4xl">
                  Member verification
                </div>
              </h1>{' '}
              <div className="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
                <img 
                  alt=""
                  src="https://pbs.twimg.com/profile_images/1449229774212247554/ErJj99gm_400x400.jpg"
                  className="flex-1 w-full max-w-xs lg:mx-0" 
                />{' '}
                <div className="flex flex-col max-w-sm gap-2 my-2 text-left">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Clean HTML with component classes
                  </div>{' '}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Connect with Discord
                  </div>{' '}
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Pure CSS, No dependencies
                  </div>
                </div>
              </div>{' '}
              <div className="flex justify-center flex-1 mt-4 space-x-2 lg:mt-12 lg:justify-start">
                <a
                  href="/#"
                  className="lg:btn-lg btn btn-ghost"
                >
                    How to use?
                  {/* <span className="hidden md:inline">See</span>&nbsp; components */}
                </a>{' '}
                <WalletMultiButton className="shadow-2xl lg:btn-lg btn" />
                {/* <h2>Connected Successfully 👍</h2> */}
                {/* <a href="/#" className="shadow-2xl lg:btn-lg btn">
                  CTA
                </a> */}
              </div>
            </div>
          </div>{' '}
          <div className="hidden">
            <div className="bg-base-200 text-base-content">
              <footer className="max-w-6xl px-4 py-20 mx-auto footer">
                <div>
                  <div className="inline-block text-3xl font-title">
                    <span className="lowercase text-primary">daisy</span>
                    <span className="uppercase text-base-content">UI</span>
                  </div>{' '}
                  <p className="opacity-50">
                    Free Components library <br />
                    for utility first CSS frameworks
                  </p>
                </div>{' '}
                <div>
                  <span className="footer-title">Guides</span>{' '}
                  <a href="/docs/install" className="link link-hover">
                    How to install
                  </a>{' '}
                  <a href="/docs/use" className="link link-hover">
                    How to use components
                  </a>{' '}
                  <a href="/docs/customize" className="link link-hover">
                    How to customize
                  </a>{' '}
                  <a href="/docs/default-themes" className="link link-hover">
                    How to use themes
                  </a>{' '}
                  <a href="/core/colors" className="link link-hover">
                    Color system
                  </a>{' '}
                  <a href="/docs/config" className="link link-hover">
                    Config
                  </a>
                </div>{' '}
                <div>
                  <span className="footer-title">Links</span>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/saadeghi/daisyui"
                    className="group link link-hover"
                  >
                    Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/saadeghi/daisyui/blob/master/CHANGELOG.md"
                    className="group link link-hover"
                  >
                    Changelog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/saadeghi/daisyui/blob/master/LICENSE"
                    className="group link link-hover"
                  >
                    License
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md"
                    className="group link link-hover"
                  >
                    Contributing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    href="/compare/Bootstrap-alternative"
                    className="link link-hover"
                  >
                    Alternatives
                  </a>
                </div>{' '}
                <div>
                  <span className="footer-title">Available on</span>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.npmjs.com/package/daisyui"
                    className="group link link-hover"
                  >
                    NPM
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://unpkg.com/browse/daisyui/"
                    className="group link link-hover"
                  >
                    Unpkg CDN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.jsdelivr.com/package/npm/daisyui"
                    className="group link link-hover"
                  >
                    JSdeliver CDN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>
                </div>{' '}
                <div>
                  <span className="footer-title">Try online</span>{' '}
                  <a
                    href="/tailwindplay"
                    className="group link link-hover"
                    target="_blank"
                    rel="noopener"
                  >
                    Tailwind Play
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codepen.io/saadeghi/pen/gOwWKvv"
                    className="group link link-hover"
                  >
                    Codepen
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="inline-block w-4 opacity-0 fill-current group-hover:opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                      />
                    </svg>
                  </a>
                </div>
              </footer>
            </div>{' '}
            <footer className="px-4 py-10 border-t footer bg-base-200 border-base-300 text-base-content footer-center">
              <div className="flex flex-col items-center justify-between w-full max-w-6xl sm:flex-row">
                <a
                  href="https://github.com/saadeghi"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center hover:opacity-90"
                >
                  <div className="mr-3 avatar">
                    <div className="p-px w-14 h-14 mask mask-squircle bg-neutral">
                      <img
                        src="https://github.com/saadeghi.png"
                        alt="Pouya Saadeghi"
                        className="mask mask-squircle"
                      />
                    </div>
                  </div>{' '}
                  <div className="text-left">
                    <p className="text-xs text-opacity-50 text-base-content">
                      Created by
                    </p>{' '}
                    <h2 className="text-lg font-bold text-base-content">
                      Pouya Saadeghi
                    </h2>
                  </div>
                </a>{' '}
                <a
                  href="https://manasky.com"
                  rel="nofollow noreferrer"
                  target="_blank"
                  className="inline-block mb-4 opacity-50 link hover:opacity-80"
                >
                  <svg
                    viewBox="0 0 324 162"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 mt-2 fill-current"
                  >
                    <title>Manasky - Web design and web dvelopment team</title>{' '}
                    <path
                      d="M53.9,156.3 C62.3,156.3 69.3166667,155.9 74.95,155.1 C80.5833333,154.3 85.0333333,153.05 88.3,151.35 C91.5666667,149.65 93.9,147.5 95.3,144.9 C96.7,142.3 97.4,139.2 97.4,135.6 C97.4,132.066667 96.85,128.983333 95.75,126.35 C94.65,123.716667 92.9333333,121.516667 90.6,119.75 C88.2666667,117.983333 85.3166667,116.583333 81.75,115.55 C78.1833333,114.516667 73.9333333,113.866667 69,113.6 L69,113.6 L31.8,111.4 C29.7333333,111.2 28.05,110.983333 26.75,110.75 C25.45,110.516667 24.5,110.083333 23.9,109.45 C23.3,108.816667 23,107.866667 23,106.6 C23,105.533333 23.25,104.683333 23.75,104.05 C24.25,103.416667 25.2166667,102.916667 26.65,102.55 C28.0833333,102.183333 30.2166667,101.916667 33.05,101.75 C35.8833333,101.583333 39.5666667,101.5 44.1,101.5 C48.3666667,101.5 52.65,101.616667 56.95,101.85 C61.25,102.083333 65.4333333,102.383333 69.5,102.75 C73.5666667,103.116667 77.4166667,103.55 81.05,104.05 C84.6833333,104.55 87.9333333,105.1 90.8,105.7 L90.8,105.7 L94.1,90.4 C90.7,89.6666667 87.0166667,89 83.05,88.4 C79.0833333,87.8 75.05,87.3 70.95,86.9 C66.85,86.5 62.9,86.1833333 59.1,85.95 C55.3,85.7166667 51.8666667,85.6 48.8,85.6 C38.2666667,85.6 29.6833333,86.3333333 23.05,87.8 C16.4166667,89.2666667 11.55,91.5666667 8.45,94.7 C5.35,97.8333333 3.8,101.966667 3.8,107.1 C3.8,111.366667 4.73333333,114.95 6.6,117.85 C8.46666667,120.75 11.5333333,123.016667 15.8,124.65 C20.0666667,126.283333 25.7,127.3 32.7,127.7 L32.7,127.7 L70.4,129.8 C72.2,129.933333 73.6666667,130.15 74.8,130.45 C75.9333333,130.75 76.7833333,131.216667 77.35,131.85 C77.9166667,132.483333 78.2,133.533333 78.2,135 C78.2,136 77.95,136.85 77.45,137.55 C76.95,138.25 76.0333333,138.8 74.7,139.2 C73.3666667,139.6 71.4666667,139.9 69,140.1 C66.5333333,140.3 63.3,140.4 59.3,140.4 C54.1666667,140.4 49.25,140.25 44.55,139.95 C39.85,139.65 35.35,139.216667 31.05,138.65 C26.75,138.083333 22.6666667,137.466667 18.8,136.8 C14.9333333,136.133333 11.2666667,135.4 7.8,134.6 L7.8,134.6 L4.9,150.9 C9.03333333,151.9 13.8166667,152.8 19.25,153.6 C24.6833333,154.4 30.4,155.05 36.4,155.55 C42.4,156.05 48.2333333,156.3 53.9,156.3 Z M126.902216,155 L126.902,138.921 L146.783,125.819 L178.802216,155 L205.702216,155 L162.58,115.732 L203.702216,86.8 L175.802216,86.8 L138.902216,111.2 L126.902,120.881 L126.902216,86.8 L106.602216,86.8 L106.602216,155 L126.902216,155 Z M273.278357,155 L273.278357,129.8 L319.578357,86.8 L293.978357,86.8 L263.378357,114.4 L232.778357,86.8 L206.778357,86.8 L252.978357,129.7 L252.978357,155 L273.278357,155 Z"
                      fillRule="nonzero"
                    />{' '}
                    <path
                      d="M25.16,77 L25.16,40.04 L25.76,40.04 C26.16,41.8 26.64,43.6 27.2,45.44 C27.76,47.28 28.4,49.12 29.12,50.96 L29.12,50.96 L35.84,66.8 L54.56,66.8 L61.28,50.96 C62.16,48.96 62.86,47.08 63.38,45.32 C63.9,43.56 64.32,41.8 64.64,40.04 L64.64,40.04 L65.24,40.04 L65.24,77 L85.16,77 L85.16,5.72 L63.92,5.72 L50.24,37.04 C49.44,38.8 48.62,40.78 47.78,42.98 C46.94,45.18 46.32,47.04 45.92,48.56 L45.92,48.56 L45.32,48.56 C44.92,47.04 44.3,45.18 43.46,42.98 C42.62,40.78 41.8,38.8 41,37.04 L41,37.04 L27.32,5.72 L6.08,5.72 L6.08,77 L25.16,77 Z M112.16,77 L116.84,62 L138.8,62 L143.48,77 L164.84,77 L140,5.72 L116.6,5.72 L91.76,77 L112.16,77 Z M133.88,46.28 L121.64,46.28 L125.12,35.24 C125.68,33.56 126.14,31.96 126.5,30.44 C126.86,28.92 127.2,27.4 127.52,25.88 L127.52,25.88 L128.12,25.88 C128.44,27.4 128.78,28.92 129.14,30.44 C129.5,31.96 129.96,33.56 130.52,35.24 L130.52,35.24 L133.88,46.28 Z M190.52,77 L190.52,36.68 L191.12,36.68 C192,38.2 192.9,39.74 193.82,41.3 C194.74,42.86 195.72,44.36 196.76,45.8 L196.76,45.8 L218.72,77 L235.64,77 L235.64,5.72 L216.56,5.72 L216.56,42.8 L215.96,42.8 C215.16,41.2 214.28,39.64 213.32,38.12 C212.36,36.6 211.36,35.12 210.32,33.68 L210.32,33.68 L190.76,5.72 L171.44,5.72 L171.44,77 L190.52,77 Z M262.64,77 L267.32,62 L289.28,62 L293.96,77 L315.32,77 L290.48,5.72 L267.08,5.72 L242.24,77 L262.64,77 Z M284.36,46.28 L272.12,46.28 L275.6,35.24 C276.16,33.56 276.62,31.96 276.98,30.44 C277.34,28.92 277.68,27.4 278,25.88 L278,25.88 L278.6,25.88 C278.92,27.4 279.26,28.92 279.62,30.44 C279.98,31.96 280.44,33.56 281,35.24 L281,35.24 L284.36,46.28 Z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </main>
    );
};