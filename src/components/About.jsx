import * as React from "react";
import relumeIcon from "../assets/svg/Relume2.svg";
import josh from "../assets/images/IMG-20230716-WA0018.jpg";
import zic from "../assets/images/1702236454389.jpg";


const About = () => {
  return (
    <div className="bg-sky-950 bg-opacity-80 flex flex-col">
      <div className="justify-center self-center w-full max-w-[1312px] mt-24 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-white text-base font-semibold leading-6 tracking-tighter max-md:max-w-full">
                Our Journey
              </div>
              <div className="text-white text-5xl font-medium leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                About TokenTrove:
                <br />
                Bridging Creativity and Blockchain
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="self-stretch text-zinc-100 text-opacity-80 text-lg leading-7 my-auto max-md:max-w-full max-md:mt-10">
              Welcome to TokenTrove, where the world of digital content meets
              the power of blockchain. Our story begins with a shared passion
              for empowering creators and redefining the landscape of digital
              ownership. TokenTrove emerged from the fertile ground of
              innovation and a desire to bring decentralized creativity to the
              forefront.
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1312px] mt-28 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-center text-base font-semibold leading-6 tracking-tighter whitespace-nowrap -mr-5 max-md:max-w-full">
                The Genesis
              </div>
              <div className="text-white text-5xl font-medium leading-[58px] -mr-5 mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Chainlink Hackathon
              </div>
              <div className="text-zinc-100 text-opacity-80 text-lg leading-7 -mr-5 mt-6 max-md:max-w-full">
                TokenTrove was conceived during our journey through the
                Chainlink Hackathon, an exciting exploration into the
                possibilities of blockchain technology. Fueled by a vision to
                revolutionize how creators and their audiences interact with
                digital content, our team embarked on a mission to build a
                platform that marries the best of blockchain and content
                creation. In the midst of the hackathon, TokenTrove took shape
                as a platform designed to provide content creators with
                unprecedented control over their work. From customizable creator
                tokens to the ability to set their token's value, we envisioned
                a space where creators could thrive in a decentralized,
                community-driven ecosystem.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3c069-a34b-43fd-8662-b26d991f74a4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="aspect-[1.14] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>{" "}
      <div className="text-white text-center text-base font-semibold leading-6 tracking-tighter self-center whitespace-nowrap mt-28 max-md:mt-10">
        Our values
      </div>{" "}
      <div className="self-center text-white text-center text-5xl font-medium leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        What's Important to Us
      </div>
      <div className="self-center text-zinc-100 text-opacity-80 text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
        At TokenTrove, we are on a mission to democratize digital content
        ownership. We believe in fostering a space where creators have autonomy,
        audiences have access to unique and valuable content, and the blockchain
        serves as the bedrock of trust and security.
      </div>
      <div className="justify-center self-center w-full max-w-[1312px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-center flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eee4f07-02f9-471e-bc0c-81c9856d0a0d?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
              />
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 mt-6">
                Community Governance
              </div>
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-6">
                Be part of the decision-making process. Our governance model
                ensures that the community's voice is heard on platform updates
                and changes.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-center flex flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/318c88a3-d33b-4e07-933e-296f190fdd7c?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
              />{" "}
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 mt-6">
                Seamless Integration
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-6">
                Easily integrate your profile with other platforms, connecting
                with your audience across the web.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-center flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9fdbe2-dde7-45e4-a1d9-1ece1d8bc54d?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
              />{" "}
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 mt-6">
                Creator Autonomy
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-6">
                Creators have the flexibility to set the price of their token,
                allowing for individualized pricing strategies that may better
                reflect the perceived value of their content.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="text-white text-center text-base font-semibold leading-6 tracking-tighter self-center whitespace-nowrap mt-28 max-md:mt-10">
        Our team
      </div>{" "}
      <div className="self-center text-white text-center text-5xl font-medium leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Meet the Team
      </div>{" "}
      <div className="self-center text-zinc-100 text-opacity-80 text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
        Behind TokenTrove is a diverse team of passionate individuals, each
        bringing their unique skills and perspectives to the table. Together, we
        are dedicated to shaping the future of digital content and blockchain
        innovation.
      </div>{" "}
      <div className="self-center flex w-[960px] max-w-full flex-col mt-16 px-5 max-md:mt-10">
        <div className="self-stretch -mr-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={josh}
                  className="rounded-[120px] aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />{" "}
                <div className="self-stretch text-white text-center text-xl font-semibold leading-8 mt-6 max-md:max-w-full">
                  Olujimi Joshua
                </div>{" "}
                <div className="self-stretch text-center text-lg leading-7 bg-clip-text bg-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] max-md:max-w-full">
                  Co-Project Lead(Programmer)
                </div>{" "}
                <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-4 max-md:max-w-full">
                </div>{" "}
                <div className="items-stretch flex w-[62px] max-w-full gap-3.5 mt-6">
                  <a href="https://www.linkedin.com/in/olujimi-joshua/">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4820a28-3679-441c-977d-f4935f426d5c?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />{" "}
                  </a>
                  <a href="https://twitter.com/dafejay">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b25ed82-e1e3-4f3e-a381-91ec4f18c795?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={zic}
                  className="rounded-[75px] aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />{" "}
                <div className="self-stretch text-white text-center text-xl font-semibold leading-8 mt-6 max-md:max-w-full">
                  Alabi Isaac
                </div>{" "}
                <div className="self-stretch text-center text-lg leading-7 bg-clip-text bg-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] max-md:max-w-full">
                  Co-Project lead(Ui/Ux Designer)
                </div>{" "}
                <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-4 max-md:max-w-full">
                </div>{" "}
                <div className="items-stretch flex w-[62px] max-w-full gap-3.5 mt-6">
                  <a href=" https://www.linkedin.com/in/isaac-williams-307017200/">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/86ec2193-0324-41d6-8597-9b66d476e867?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />{" "}
                  </a>
                  <a href="https://twitter.com/oruku_bad">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/02128239-18ba-4d0e-b5cb-61da56ea9608?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-center text-white text-center text-3xl font-bold leading-10 max-w-screen-md mt-14 max-md:max-w-full max-md:mt-10">
          Join Us!
        </div>{" "}
        <div className="self-center text-zinc-100 text-opacity-80 text-center text-lg leading-7 max-w-screen-md mt-4 max-md:max-w-full">
          Join us on this exciting journey as we continue to expand the
          boundaries of what's possible in the realm of decentralized
          creativity.
        </div>
        <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--White,#FFF)] self-center w-[136px] max-w-full mt-6 px-5 py-3 border-solid">
          Get Involved
        </div>
      </div>
      <div className="items-stretch bg-black self-stretch flex w-full flex-col mt-20 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-between items-stretch flex w-[194px] max-w-full gap-5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/857a542b-a86a-40a4-ba30-358ae8682a88?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                    className="aspect-[1.22] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-xl font-extrabold leading-5 self-center grow whitespace-nowrap my-auto">
                    TokenTrove
                  </div>
                </div>
                <div className="self-stretch text-white text-base leading-6 mt-6 max-md:max-w-full">
                  Join our newsletter to stay up to date on features and
                  releases.
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-neutral-600 text-base leading-6 items-stretch border border-[color:var(--Purple,rgba(98,98,217,0.85))] bg-white grow p-3 border-solid">
                    Enter your email
                  </div>
                  <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--Standard,#5D49D9)] px-5 py-3 border-solid">
                    Subscribe
                  </div>
                </div>
                <div className="self-stretch text-white text-xs leading-5 underline mt-4 max-md:max-w-full">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                      <div className="text-white text-base font-semibold leading-6 tracking-tighter">
                        Navigation
                      </div>
                      <div className="text-white text-sm leading-5 mt-6">
                        About
                      </div>
                      <div className="text-white text-sm leading-5 mt-4">
                        Contact
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col max-md:mt-10">
                      <div className="text-white text-base font-semibold leading-6 tracking-tighter">
                        Support
                      </div>
                      <div className="text-white text-sm leading-5 mt-6">
                        Blog
                      </div>
                      <div className="text-white text-sm leading-5 mt-4">
                        Roadmap
                      </div>
                      <div className="text-white text-sm leading-5 mt-4">
                        Resources
                      </div>
                      <div className="text-white text-sm leading-5 mt-4">
                        Contribution
                      </div>
                      <div className="text-white text-sm leading-5 mt-4">
                        Newsletter
                      </div>
                      <div className="text-white text-sm leading-5 mt-2.5">
                        FAQ
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                      <div className="text-white text-base font-semibold leading-6 tracking-tighter">
                        Follow Us
                      </div>
                      <div className="items-stretch flex justify-between gap-3 mt-6">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a021e62d-d963-4a23-807b-6e72afcbc1b0?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          Facebook
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1b111ac-bc2f-4130-93d9-7987a16530e3?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          Instagram
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5528370a-5e52-4f21-be80-b2499fafd6e1?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          X
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/87fa7881-d129-4a83-a3de-5c0c3e8d86bf?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          LinkedIn
                        </div>
                      </div>
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7bd34ef-bb7e-4663-ad95-ae21f5be9c8b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          Youtube
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10" />
        <div className="justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-indigo-600 text-sm leading-5 grow shrink basis-auto">
            © 2023 TokenTrove. All rights reserved.
          </div>
          <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
            <div className="text-indigo-600 text-sm leading-5 underline">
              Privacy Policy
            </div>
            <div className="text-indigo-600 text-sm leading-5 underline">
              Terms of Service
            </div>
            <div className="text-indigo-600 text-sm leading-5 underline whitespace-nowrap">
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default About