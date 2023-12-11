import React from "react";
import pdfFile from "../assets/whitepaper/token-trove-whitepaper.pdf";

const Resources = () => {
  const pdfPath = '/assets/whitepaper/token-trove-whitepaper.pdf';
  return (
    <div className="bg-sky-950 bg-opacity-80 flex flex-col">
      <div className="text-white text-base font-semibold leading-6 tracking-tighter whitespace-nowrap ml-20 mt-24 self-start max-md:max-w-full max-md:mt-10">
        Blog
      </div>
      <div className="text-white text-6xl font-medium leading-[67px] w-[768px] max-w-full ml-20 mt-4 self-start max-md:text-4xl max-md:leading-[54px]">
        TokenTrove Blog: Unveiling the Future of Decentralized Creativity
      </div>
      <div className="text-white text-lg leading-7 w-[768px] max-w-full ml-20 mt-6 self-start">
        At TokenTrove, we believe in transparency, innovation, and keeping our
        community at the forefront of everything we do. Our blog is your go-to
        source for the latest updates, exciting features, and glimpses into the
        dynamic world of decentralized creativity. Let's dive into the recent
        highlights:
      </div>{" "}
      <div className="self-center w-full max-w-screen-xl mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col pb-3 px-5 max-md:mt-10">
              <div className="text-white text-lg font-bold leading-7 whitespace-nowrap -mr-5">
                Resources
              </div>{" "}
              <div className="text-white text-base font-semibold leading-6 tracking-tighter whitespace-nowrap bg-sky-600 -mr-5 mt-6 px-4 py-3 items-start">
                View all
              </div>{" "}
              <div className="flex flex-col items-stretch -mr-5 mt-3 pl-4 pr-20 max-md:pr-5">
                <div className="text-white text-base leading-6 whitespace-nowrap max-md:mr-px">
                  Getting Started
                </div>{" "}
                <div className="text-white text-base leading-6 whitespace-nowrap mt-6 max-md:mr-px">
                  Platform Features
                </div>{" "}
                <div className="text-white text-base leading-6 whitespace-nowrap mt-6 max-md:mr-px">
                  Tokenomics
                </div>{" "}
                <div className="text-white text-base leading-6 whitespace-nowrap mt-6 max-md:mr-px">
                  Technical Resources
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col px-5 max-md:max-w-full max-md:mt-10">
              <div className="items-stretch flex w-[179px] max-w-full gap-4 self-start">
                <div className="text-white text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 bg-opacity-80 grow py-1">
                  Technical Resources
                </div>{" "}
                <div className="text-white text-sm font-semibold leading-5 self-center grow whitespace-nowrap my-auto">
                  10 min read
                </div>
              </div>{" "}
              <div className="self-stretch text-white text-3xl font-bold leading-10 -mr-5 mt-4 max-md:max-w-full">
                Our Whitepaper
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-2 max-md:max-w-full">
                Your one stop destination for all token trove represents
              </div>{" "}
              <div className="justify-center items-stretch flex w-[106px] max-w-full gap-2 mt-6 pr-px self-start">
                <a href={pdfFile} download="white-paper.pdf" onClick={(e) => {e.stopPropagation()}}>
                  <div className="text-white text-base leading-6">Download</div>{" "}
                </a>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce34468-def9-4fef-9238-dff3605baf54?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center text-white text-5xl font-medium leading-[58px] w-[768px] max-w-[1312px] mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
        Why Create a Studio on TokenTrove?
      </div>{" "}
      <div className="self-center w-full max-w-[1312px] mt-11 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79a4e010-e281-4482-b5c4-664848bf2bbe?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-[150px] overflow-hidden max-w-full rounded-[50%]"
              />{" "}
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 mt-6">
                Empowerment
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-6">
                Take control of your brand and content with a personalized
                studio. It's your canvas, and TokenTrove is the platform that
                lets your creativity run wild.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73994a92-6f30-49fe-82cd-1c8f333c6c17?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                className="aspect-square object-contain object-center w-[150px] overflow-hidden max-w-full rounded-[50%]"
              />
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 mt-6">
                Creator Tokens
              </div>
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-6">
                Mint your unique creator token, a digital representation of your
                brand and content. Set your token's value and watch your digital
                assets soar.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch flex grow flex-col max-md:mt-10">
              <div className="flex w-[150px] shrink-0 h-[150px] flex-col rounded-[50%]" />{" "}
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 mt-6">
                Collaboration Hub
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 mt-6">
                TokenTrove's studio is not just a space for your creations; it's
                a hub for collaboration. Connect with other creators, initiate
                joint projects, and amplify your impact.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-[840px] max-w-full mt-11 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch flex grow flex-col px-5 max-md:mt-10">
              <div className="flex w-[150px] shrink-0 h-[150px] flex-col rounded-[50%]" />{" "}
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 -mr-5 mt-6">
                Exclusive NFT Auctions
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 -mr-5 mt-6">
                Turn your digital creations into exclusive NFTs and auction them
                directly from your studio. Monetize your art and build a
                dedicated audience.
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch flex grow flex-col px-5 max-md:mt-10">
              <div className="flex w-[150px] shrink-0 h-[150px] flex-col rounded-[50%]" />{" "}
              <div className="self-stretch text-white text-center text-3xl font-bold leading-10 -mr-5 mt-6">
                Community Engagement
              </div>{" "}
              <div className="self-stretch text-zinc-100 text-opacity-80 text-center text-base leading-6 -mr-5 mt-6">
                Foster a community around your studio. Engage with your
                audience, respond to their feedback, and build a loyal
                following.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="justify-end self-center w-full max-w-[1312px] mt-28 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-6xl font-medium leading-[67px] whitespace-nowrap -mr-5 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                How to Get Started
              </div>{" "}
              <div className="text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-6 max-md:max-w-full">
                Dive into the world of decentralized creativity on TokenTrove
                effortlessly. Whether you're a seasoned creator or just
                starting, our intuitive studio creation process awaits. Join the
                community, establish your studio, and let your artistic voice
                resonate across the TokenTrove landscape, where innovation meets
                simplicity.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-white text-3xl font-bold leading-10 -mr-5 max-md:max-w-full">
                <ul>
                  <li>Connect Your Wallet to TokenTrove</li>
                </ul>
              </div>
              <div className="text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-2.5 max-md:max-w-full">
                If you haven't already, connect your Metamask wallet to
                TokenTrove and join the decentralized revolution.
              </div>{" "}
              <div className="text-white text-3xl font-bold leading-10 -mr-5 mt-8 max-md:max-w-full">
                <ul>
                  <li>Navigate to Studio</li>
                </ul>
              </div>{" "}
              <div className="text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-2.5 max-md:max-w-full">
                Once logged in, head to your studio and discover the
                &quot;Deploy a Studio&quot; option.
              </div>{" "}
              <div className="text-white text-3xl font-bold leading-10 -mr-5 mt-8 max-md:max-w-full">
                <ul>
                  <li>Personalize Your Studio</li>
                </ul>
              </div>{" "}
              <div className="text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-2.5 max-md:max-w-full">
                Customize your studio with a unique name, logo, and banner. This
                is your digital space—make it uniquely yours.
              </div>{" "}
              <div className="text-white text-3xl font-bold leading-10 -mr-5 mt-8 max-md:max-w-full">
                <ul>
                  <li>Mint Your Creator Token</li>
                </ul>
              </div>{" "}
              <div className="text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-2.5 max-md:max-w-full">
                Mint your own creator token and set its value. This token
                becomes a key element of your brand and content ecosystem.
              </div>{" "}
              <div className="text-white text-3xl font-bold leading-10 -mr-5 mt-8 max-md:max-w-full">
                <ul>
                  <li>Start Uploading and Collaborating</li>
                </ul>
              </div>{" "}
              <div className="text-zinc-100 text-opacity-80 text-base leading-6 -mr-5 mt-2.5 max-md:max-w-full">
                Begin uploading your content, initiate collaborations, and
                explore the myriad possibilities within your TokenTrove studio.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1312px] mt-28 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto px-5 items-start max-md:max-w-full max-md:mt-10">
              <div className="self-stretch text-white text-5xl font-medium leading-[58px] -mr-5 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Stay Tuned for More Excitement!
              </div>{" "}
              <div className="self-stretch text-white text-lg leading-7 -mr-5 mt-6 max-md:max-w-full">
                The TokenTrove blog is your gateway to staying updated on the
                latest developments, features, and stories within our vibrant
                community. Subscribe to our newsletter to ensure you never miss
                a beat in the world of decentralized creativity.
              </div>{" "}
              <div className="justify-center items-center border border-[color:var(--Purple,rgba(98,98,217,0.85))] bg-white flex w-[156px] max-w-full flex-col mt-10 px-5 py-3 border-solid">
                <div className="text-base leading-6 bg-clip-text bg-[linear-gradient(180deg,rgba(98,98,217,0.85)_0%,#9D62D9_100%)] whitespace-nowrap">
                  Subscribe Now
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1e2cac5-e0ff-498a-aa0f-33fc76a9f95b?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
              className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>{" "}
      <div className="items-stretch bg-black self-stretch flex w-full flex-col mt-28 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-between items-stretch flex w-[194px] max-w-full gap-5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee6524e8-ad3f-49e7-8ebd-fc5c48047c39?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                    className="aspect-[1.22] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-white text-xl font-extrabold leading-5 self-center grow whitespace-nowrap my-auto">
                    TokenTrove
                  </div>
                </div>{" "}
                <div className="self-stretch text-white text-base leading-6 mt-6 max-md:max-w-full">
                  Join our newsletter to stay up to date on features and
                  releases.
                </div>{" "}
                <div className="items-stretch self-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-neutral-600 text-base leading-6 items-stretch border border-[color:var(--Purple,rgba(98,98,217,0.85))] bg-white grow p-3 border-solid">
                    Enter your email
                  </div>{" "}
                  <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--Standard,#5D49D9)] px-5 py-3 border-solid">
                    Subscribe
                  </div>
                </div>{" "}
                <div className="self-stretch text-white text-xs leading-5 underline mt-4 max-md:max-w-full">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                      <div className="text-white text-base font-semibold leading-6 tracking-tighter">
                        Navigation
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-6">
                        About
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-4">
                        Contact
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex grow flex-col max-md:mt-10">
                      <div className="text-white text-base font-semibold leading-6 tracking-tighter">
                        Support
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-6">
                        Blog
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-4">
                        Roadmap
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-4">
                        Resources
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-4">
                        Contribution
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-4">
                        Newsletter
                      </div>{" "}
                      <div className="text-white text-sm leading-5 mt-2.5">
                        FAQ
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                      <div className="text-white text-base font-semibold leading-6 tracking-tighter">
                        Follow Us
                      </div>{" "}
                      <div className="items-stretch flex justify-between gap-3 mt-6">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbb151ed-461a-4494-954a-8b060cc96b16?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          Facebook
                        </div>
                      </div>{" "}
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa68db3a-fc2f-499a-8cda-64f775b84df4?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          Instagram
                        </div>
                      </div>{" "}
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1091e9d1-7cbe-44f3-8618-627170264534?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          X
                        </div>
                      </div>{" "}
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05df67ee-adab-4762-a693-e4693831b932?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <div className="text-white text-sm leading-5 grow whitespace-nowrap self-start">
                          LinkedIn
                        </div>
                      </div>{" "}
                      <div className="items-stretch flex justify-between gap-3 mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/86e60a1e-7297-4543-a608-0438cacba1cc?apiKey=d2ab310cab9b448f841a51a9f2cf6583&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />{" "}
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
        </div>{" "}
        <div className="bg-white flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10" />{" "}
        <div className="justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-indigo-600 text-sm leading-5 grow shrink basis-auto">
            © 2023 TokenTrove. All rights reserved.
          </div>{" "}
          <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
            <div className="text-indigo-600 text-sm leading-5 underline">
              Privacy Policy
            </div>{" "}
            <div className="text-indigo-600 text-sm leading-5 underline">
              Terms of Service
            </div>{" "}
            <div className="text-indigo-600 text-sm leading-5 underline whitespace-nowrap">
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Resources