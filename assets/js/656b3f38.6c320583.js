"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={sidebar_label:"FAQ",sidebar_position:3},l="AuctionHouse FAQ",c={unversionedId:"auction-house/faq",id:"auction-house/faq",title:"AuctionHouse FAQ",description:"Can I get fees when NFTs get sold-on my Auction House?",source:"@site/docs/auction-house/faq.md",sourceDirName:"auction-house",slug:"/auction-house/faq",permalink:"/auction-house/faq",editUrl:"https://github.com/metaplex/docs/tree/main/docs/auction-house/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"FAQ",sidebar_position:3},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/auction-house/getting_started"},next:{title:"CLI",permalink:"/auction-house/cli"}},u=[{value:"Can I get fees when NFTs get sold-on my Auction House?",id:"can-i-get-fees-when-nfts-get-sold-on-my-auction-house",children:[],level:2},{value:"Does the AuctionHouse restrict the user from selling their NFT on another Non-AuctionHouse marketplace?",id:"does-the-auctionhouse-restrict-the-user-from-selling-their-nft-on-another-non-auctionhouse-marketplace",children:[],level:2},{value:"Can people view the settings of my AuctionHouse",id:"can-people-view-the-settings-of-my-auctionhouse",children:[],level:2},{value:"Can the AuctionHouse change the sale price on my NFT",id:"can-the-auctionhouse-change-the-sale-price-on-my-nft",children:[],level:2}],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auctionhouse-faq"},"AuctionHouse FAQ"),(0,a.kt)("h2",{id:"can-i-get-fees-when-nfts-get-sold-on-my-auction-house"},"Can I get fees when NFTs get sold-on my Auction House?"),(0,a.kt)("p",null,"Yes, An AuctionHouse may be configured to take ",(0,a.kt)("inlineCode",{parentName:"p"},"seller fee basis points"),". This is part of the create and update command; see the CLI use it."),(0,a.kt)("p",null,"Fees are paid to Creators,Then the Auction house and the seller gets the remainder of the sale. This is easy to calculate on your UI by taking the NFT royalties, Sale price, Auction House fee and displaying to the buyer what their total gains will be."),(0,a.kt)("h2",{id:"does-the-auctionhouse-restrict-the-user-from-selling-their-nft-on-another-non-auctionhouse-marketplace"},"Does the AuctionHouse restrict the user from selling their NFT on another Non-AuctionHouse marketplace?"),(0,a.kt)("p",null,"No, the AuctionHouse cannot stop users from sending their NFT even if they have a for-sale listing. If this happens, the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute_sale")," operation will fail and the buyer can get their finds back by canceling their bid.\nMarketplaces creating a AuctionHouse experience will need to track the Buy/Sell trade state accounts and watch the TokenAccounts of sellers so they can automatically cancel the listing and bids on that NFTs."),(0,a.kt)("p",null,"Specifically Marketplaces should currently store:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Trade Stade Account Keys"),(0,a.kt)("li",{parentName:"ol"},"Trade State Token Size and Price parts of the seed"),(0,a.kt)("li",{parentName:"ol"},"Token Account Keys that are stored in the trade state")),(0,a.kt)("p",null,"Specifically Marketplaces need to track these two events on Token Accounts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ownership has changed from the original Seller of the NFT"),(0,a.kt)("li",{parentName:"ol"},"Token Account Amount has changed to 0")),(0,a.kt)("p",null,"If these events happen the AuctionHouse Authority can call instructions to cancel the bids and listings without the seller or buyer needing to be present."),(0,a.kt)("h2",{id:"can-people-view-the-settings-of-my-auctionhouse"},"Can people view the settings of my AuctionHouse"),(0,a.kt)("p",null,"Yes anyone can and should be able to verofy the settings of your AuctionHouse especially the ",(0,a.kt)("inlineCode",{parentName:"p"},"Can Change Sale Price")," parameter.\nThis can be done on the cli with the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")),(0,a.kt)("h2",{id:"can-the-auctionhouse-change-the-sale-price-on-my-nft"},"Can the AuctionHouse change the sale price on my NFT"),(0,a.kt)("p",null,"Yes but only in a certain scenario. These things need to happen in order for a Auction House to be able to use this feature."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The AuctionHouse instance must have ",(0,a.kt)("inlineCode",{parentName:"li"},"Can Change Sale Price")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ol"},"You as the NFT seller must list your NFT for sale at a price of 0.\n:::warning")),(0,a.kt)("p",null,"Don't worry not even the Auction House can sell it for 0 unless you sign the transaction with your key."),(0,a.kt)("p",null,":::"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"The AuctionHouse now can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," priced trade state you made in #2 to create new ",(0,a.kt)("inlineCode",{parentName:"li"},"sale")," listings at different prices.")))}p.isMDXComponent=!0}}]);